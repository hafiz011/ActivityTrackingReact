// services/authService.ts

import axios from "@/lib/axios";
import { LoginResponse, RegisterResponse, LogoutResponse, AccountDetails } from "@/services/auth";

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>("/auth/login", { email, password });
  return response.data;
};

export const register = async (data: any): Promise<RegisterResponse> => {
  const response = await axios.post<RegisterResponse>("/auth/register", data);
  return response.data;
};

export const logout = async (): Promise<LogoutResponse> => {
  const response = await axios.post<LogoutResponse>("/auth/logout");
  return response.data;
};

export const getAccountDetails = async (): Promise<AccountDetails> => {
  const response = await axios.get<AccountDetails>("/auth/account");
  return response.data;
};
