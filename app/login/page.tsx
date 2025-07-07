"use client"

import type React from "react"
import { useEffect, useState } from "react"
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
import {HeaderSection} from "@/components/headerSection"
import { LandingTheme } from "@/components/LandingTheme";

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

// useEffect(() =>{
// const storedToken = localStorage.getItem("authToken")
//       const storedUser = localStorage.getItem("authUser")
//       if (storedToken) {setToken(storedToken)}
//       if (storedUser || storedToken) {
//         router.push("/dademo")
//       }
// }, []);

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
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md mt-20 bg-card shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            <Lock className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold mb-2">Welcome back</CardTitle>
            <p className="text-muted-foreground text-sm">Sign in to your account to continue</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription className="text-center">{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10"
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
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="pl-10 pr-12"
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
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Eye className="w-5 h-5 text-muted-foreground" />
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
                />
                <Label htmlFor="remember-me" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <Button variant="link" className="px-0 text-sm" asChild>
                <a href="/forgot-password">Forgot password?</a>
              </Button>
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isLoading} className="w-full h-12">
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center pt-6 border-t">
            <p className="text-muted-foreground">
              {"Don't have an account? "}
              <Button variant="link" className="px-0 font-semibold" asChild>
                <a href="/register">Create account</a>
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>

    </div>
  </LandingTheme>
  </>
  )
}