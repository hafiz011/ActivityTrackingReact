"use client"
import type React from "react"
import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { loginApi } from "@/services/authService"
import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { LandingTheme } from '@/components/LandingTheme';
import {HeaderSection} from '@/components/headerSection';
import Footer from '@/components/Footer';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [token,setToken] = useState<string | null>(null);
  const [user, setUser] = useState();

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      const data = await loginApi(email, password);
      console.log(data)
      if (!data.token) throw new Error("Token not received")
      login(data.token, data.user); // Pass both token and user
      router.push("/dashboard");
    } catch (err: unknown) {
        // Try to extract a message from the API response
        const apiMessage =
        (err as { response?: { data?: { Message?: string; message?: string } } })?.response?.data?.Message ||
        (err as { response?: { data?: { Message?: string; message?: string } } })?.response?.data?.message ||
        "Something went wrong. Please try again later.";
        setError(apiMessage);
    } finally {
      setIsLoading(false)
    }
  }

 return (
  <>
  <LandingTheme>
    <HeaderSection /> 
       {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
        <Card className="w-full max-w-md mt-20 bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-cyan-500/10 border border-cyan-500/30 transition-all">
          <CardHeader className="text-center space-y-6 pb-8">

            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-200 to-slate-100 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Welcome back
              </CardTitle>
              <p className="text-slate-400 dark:text-slate-300 text-sm">
                Sign in to your account to continue your journey
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 px-8 pb-8">
            {error && (
              <Alert variant="destructive" className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/50">
                <AlertDescription className="text-center text-red-500 dark:text-red-200">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-slate-300 dark:text-slate-200">
                  Email address
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    className="pl-10 h-12 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError(null)
                    }}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-slate-300 dark:text-slate-200">
                  Password
                </Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-12 h-12 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError(null)
                    }}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-slate-400 bg-white/80 dark:border-slate-300"
                  />
                  <Label htmlFor="remember-me" className="text-sm font-normal text-slate-400 dark:text-slate-300">
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="px-0 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" asChild>
                  <a href="/forgot-password">Forgot password?</a>
                </Button>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Sign in
                  </>
                )}
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-400">
                {"Don't have an account? "}
                <Button variant="link" className="px-0 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" asChild>
                  <a href="/register">Create account</a>
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    <Footer />
  </LandingTheme>
  </>
  )
}