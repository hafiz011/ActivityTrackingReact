// app/login/page.tsx
"use client";
import { useState } from "react";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

const handleLogin = async () => {
  try {
    const res = await fetch("https://localhost:5011/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    localStorage.setItem("token", data.Token);
    router.push("/dashboard");
  } catch (error) {
    console.error("Fetch Error:", error);
    alert("Login failed");
  }
};



  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input type="email" placeholder="Email" className="input mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="input mb-2" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="btn btn-primary w-full">Login</button>
    </div>
  );
}
