"use client"

import type React from "react"
import { useState } from "react"
import { register } from "../../services/authService"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { HeaderSection } from "@/components/headerSection"
import { LandingTheme } from "@/components/LandingTheme"

export default function Register() {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: {
      address: "",
      City: "",
      Country: "",
    },
    Password: "",
  })
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name in form.Address) {
      setForm((prev) => ({
        ...prev,
        Address: { ...prev.Address, [name]: value },
      }))
    } else if (name === "ConfirmPassword") {
      setConfirmPassword(value)
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (form.Password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setIsLoading(true)
    try {
      await register(form)
      setShowSuccess(true)
    } catch (err: any) {
      const apiMessage =
        err?.response?.data?.Message ||
        err?.response?.data?.message ||
        "Registration failed. Please check your details."
      setError(apiMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClosePopup = () => {
    setShowSuccess(false)
    router.push("/login")
  }

  return (
  <>
  <LandingTheme>
    <HeaderSection />
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md mt-20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Register</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="FirstName"
                placeholder="First Name"
                value={form.FirstName}
                onChange={handleChange}
                required
              />
              <Input name="LastName" placeholder="Last Name" value={form.LastName} onChange={handleChange} required />
            </div>

            <Input name="Email" type="email" placeholder="Email" value={form.Email} onChange={handleChange} required />

            <Input name="Phone" placeholder="Phone" value={form.Phone} onChange={handleChange} required />

            <Input
              name="address"
              placeholder="Street Address"
              value={form.Address.address}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <Input name="City" placeholder="City" value={form.Address.City} onChange={handleChange} required />
              <Input
                name="Country"
                placeholder="Country"
                value={form.Address.Country}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              name="Password"
              type="password"
              placeholder="Password"
              value={form.Password}
              onChange={handleChange}
              required
            />

            <Input
              name="ConfirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChange}
              required
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registration Successful!</DialogTitle>
            <DialogDescription>Please check your email and confirm your account.</DialogDescription>
          </DialogHeader>
          <Button onClick={handleClosePopup} className="w-full">
            OK
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  </LandingTheme>
  </>
  )
}
