"use client"
import { useState } from "react";
import { Mail, Loader2, CheckCircle, XCircle } from "lucide-react";
import { forgotPassword } from "@/services/authService";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LandingTheme } from '@/components/LandingTheme';
import {HeaderSection} from '@/components/headerSection';
import Footer from '@/components/Footer';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  // Success state for icon and alert
  const isSuccess = showSuccess && !error;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      await forgotPassword({ email });
      setMessage("If an account with that email exists, a reset link has been sent.");
      setShowSuccess(true);
    } catch (err) {
      const apiMsg =
        (typeof err === "object" &&
          err !== null &&
          "response" in err &&
          typeof (err as { response?: unknown }).response === "object" &&
          (err as { response?: { data?: { Message?: string; Errors?: string } } }).response?.data?.Message) ||
        (typeof err === "object" &&
          err !== null &&
          "response" in err &&
          typeof (err as { response?: unknown }).response === "object" &&
          (err as { response?: { data?: { Message?: string; Errors?: string } } }).response?.data?.Errors) ||
        "Account not found.";
      setError(apiMsg);
      setShowSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowSuccess(false);
    setMessage(null);
    setError(null);
    router.push("/login");
  };

  return (
    <>
    <LandingTheme> 
    <HeaderSection /> 
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {isLoading ? (
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            ) : showSuccess ? (
              error ? (
                <XCircle className="h-12 w-12 text-red-500" />
              ) : (
                <CheckCircle className="h-12 w-12 text-green-500" />
              )
            ) : (
              <Mail className="h-12 w-12 text-blue-500" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold">Find Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {showSuccess ? (
            <Alert variant={error ? "destructive" : "default"}>
              <AlertDescription className="text-center">
                {error ? error : message}
              </AlertDescription>
            </Alert>
          ) : null}
          {!showSuccess && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                    required
                  />
                </div>
              </div>
              {error && (
                <div className="text-red-600 text-center mb-2">{error}</div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>
          )}
          {showSuccess && (
            <button
              onClick={handleClosePopup}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-medium transition"
            >
              Go to Login
            </button>
          )}
        </CardContent>
      </Card>
    </div>
    <Footer />
    </LandingTheme>
    </>
  );
}