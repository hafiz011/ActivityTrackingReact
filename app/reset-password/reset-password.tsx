import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const API_BASE_URL = "https://localhost:5011";

export default function ResetPassword() {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setEmail(params.get("email") || "");
    setToken(params.get("token") || "");
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
    setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!form.newPassword || !form.confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!email || !token) {
      setError("Invalid or expired reset link.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post<{ Message: string }>(
        `${API_BASE_URL}/api/auth/reset-password`,
        {
          Email: email,
          Token: token,
          NewPassword: form.newPassword,
          ConfirmPassword: form.confirmPassword,
        }
      );
      setMessage(response.data.Message);
      setTimeout(() => navigate("/login"), 3000);
    } catch (err: unknown) {
        // Try to extract a message from the API response
        const apiMessage =
        (err as { response?: { data?: { Message?: string; message?: string } } })?.response?.data?.Message ||
        (err as { response?: { data?: { Message?: string; message?: string } } })?.response?.data?.message ||
        "Something went wrong. Please try again.";
        setError(apiMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
          {message && (
            <div className="text-green-700 text-center bg-green-100 border border-green-300 px-4 py-3 rounded-xl mb-4 shadow-sm">
              {message} <br />
              Redirecting to login...
            </div>
          )}
          {error && (
            <div className="text-red-600 text-center bg-red-100 border border-red-300 px-4 py-3 rounded-xl mb-4 shadow-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                value={form.newPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}