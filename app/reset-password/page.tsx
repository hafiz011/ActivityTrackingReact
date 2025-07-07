
"use client"
import { Suspense } from "react";
import ResetPassword from "@/components/auth/ResetPassword";
import { LandingTheme } from "@/components/LandingTheme";
import { HeaderSection } from "@/components/headerSection";

export const dynamic = "force-dynamic"

export default function Page() {
  return (
  <>
    <LandingTheme>
    <HeaderSection />
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
    </LandingTheme>
  </>
  );
}