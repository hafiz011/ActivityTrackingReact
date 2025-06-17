import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://localhost:5011";

export default function ConfirmEmail() {
  const [message, setMessage] = useState("Confirming your email...");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userId = params.get("userId");
    const token = params.get("token");

    if (!userId || !token) {
      setMessage("Invalid confirmation link.");
      return;
    }

    axios
      .post<{ Message: string }>(`${API_BASE_URL}/api/auth/confirm-email`, {
        UserId: userId,
        Token: token,
      })
      .then((response) => setMessage(response.data.Message))
      .catch((err) => {
        const apiMsg =
          err?.response?.data?.Message ||
          err?.response?.data?.message ||
          "Email confirmation failed. The link may be invalid or expired.";
        setMessage(apiMsg);
      });
  }, [location.search]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow text-center">
        <h2 className="text-xl font-bold mb-4">Email Confirmation</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}