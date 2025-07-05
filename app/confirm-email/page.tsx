import { Suspense } from "react";
import ConfirmEmailClient from "@/components/auth/ConfirmEmailClient";

export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ConfirmEmailClient />
    </Suspense>
  );
}
