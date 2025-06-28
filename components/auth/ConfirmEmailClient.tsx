"use client"
export const dynamic = "force-dynamic"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import { confirmEmail as confirmEmailApi } from "@/services/authService"

export default function ConfirmEmailClient() {
  const [message, setMessage] = useState("Confirming your email...")
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const handleConfirmEmail = async () => {
      const userId = searchParams.get("userId")
      const token = searchParams.get("token")

      if (!userId || !token) {
        setMessage("Invalid confirmation link. Please check your email for the correct link.")
        setIsSuccess(false)
        setIsLoading(false)
        return
      }

      try {
        const response = await confirmEmailApi({ UserId: userId, Token: token })

        const successMessage =
          response.Message ||
          response.message ||
          "Your email has been successfully confirmed! You can now log in to your account."

        setMessage(successMessage)
        setIsSuccess(true)
      } catch (err: any) {
        const errorMessage =
          err?.response?.data?.Message ||
          err?.response?.data?.message ||
          err?.message ||
          "Email confirmation failed. The link may be invalid or expired."

        setMessage(errorMessage)
        setIsSuccess(false)
      } finally {
        setIsLoading(false)
      }
    }

    handleConfirmEmail()
  }, [searchParams])

  const handleGoToLogin = () => router.push("/login")
  const handleResendEmail = () => router.push("/register")

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {isLoading ? (
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            ) : isSuccess ? (
              <CheckCircle className="h-12 w-12 text-green-500" />
            ) : (
              <XCircle className="h-12 w-12 text-red-500" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold">Email Confirmation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant={isSuccess === false ? "destructive" : "default"}>
            <AlertDescription className="text-center">{message}</AlertDescription>
          </Alert>

          <div className="flex flex-col gap-2">
            {isSuccess && (
              <Button onClick={handleGoToLogin} className="w-full">
                Go to Login
              </Button>
            )}

            {isSuccess === false && (
              <>
                <Button onClick={handleResendEmail} variant="outline" className="w-full">
                  Back to Register
                </Button>
                <Button onClick={handleGoToLogin} variant="ghost" className="w-full">
                  Try Login Instead
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
