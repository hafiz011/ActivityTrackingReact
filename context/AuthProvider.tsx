"use client";

import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "./AuthContext";

function parseJwt(token: string): User | null {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const email = payload.email || payload.name || payload.sub;
    const userId = payload.userId || payload.sub;
    return email ? { email, userId, fullName: payload.name } : null;

  } catch {
    return null;
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      setUser(parseJwt(token));
    } else {
      setUser(null);
    }
  }, [token]);

  const login = (token: string, userFromApi?: User) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userFromApi || parseJwt(token));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
