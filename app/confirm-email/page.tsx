import { Suspense } from "react"

export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <div>hello</div>
    </Suspense>
  )
}
