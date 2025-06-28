import { Suspense } from "react"
import ConfirmEmail from "@/components/auth/ConfirmEmail"

export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ConfirmEmail />
    </Suspense>
  )
}
