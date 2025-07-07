
"use client"
import { Suspense } from "react";
import ResetPassword from "@/components/auth/ResetPassword";

export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}