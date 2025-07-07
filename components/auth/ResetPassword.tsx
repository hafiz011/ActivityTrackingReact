"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, XCircle, Loader2, Lock } from "lucide-react";
import { ResetPassword as resetPasswordService } from "@/services/authService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    const tokenParam = searchParams.get("token");
    if (!emailParam || !tokenParam) {
      setMessage("Invalid confirmation link. Please check your email for the correct link.");
      setIsSuccess(false);
      setIsLoading(false);
      return;
    }
    setEmail(emailParam);
    setToken(tokenParam);
  }, [searchParams]);

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
      const response = await resetPasswordService({
        email,
        token,
        newPassword: form.newPassword,
        confirmPassword: form.confirmPassword,
      });

      setMessage(response.Message || "Password reset successful!");
      setTimeout(() => router.push("/login"), 2500);
    } catch (err: unknown) {
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
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8 transition-colors">
      <Card className="w-full max-w-md shadow-xl border-0 bg-card/90 backdrop-blur">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {isLoading ? (
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            ) : message ? (
              <CheckCircle className="h-12 w-12 text-green-500" />
            ) : error ? (
              <XCircle className="h-12 w-12 text-red-500" />
            ) : (
              <Lock className="h-12 w-12 text-blue-500" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold">Set Password</CardTitle>
        </CardHeader>
        <CardContent>
          {message && (
            <Alert variant="default" className="mb-4">
              <AlertDescription className="text-center">
                {message} <br />
                Redirecting to login...
              </AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription className="text-center">
                {error}
              </AlertDescription>
            </Alert>
          )}
          {!message && (
            <form onSubmit={handleSubmit} className="space-y-5">
              {email && (
                <div className="mb-2 text-center text-gray-600 text-sm">
                  Setting password for <span className="font-semibold">{email}</span>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  value={form.newPassword}
                  onChange={handleChange}
                  required
                  minLength={6}
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={6}
                  placeholder="Confirm new password"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Setting...
                  </>
                ) : (
                  "Set Password"
                )}
              </button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}