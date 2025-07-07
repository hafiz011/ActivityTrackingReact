"use client";

import { Suspense } from "react";
import ConfirmEmailClient from "@/components/auth/ConfirmEmailClient";
import { LandingTheme } from "@/components/LandingTheme";
import { HeaderSection } from "@/components/headerSection";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
    <LandingTheme>
      <HeaderSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ConfirmEmailClient />
      </Suspense>
    </LandingTheme>
    </>
  );
}


// // app/confirm-email/page.tsx
// import { Suspense } from "react"
// import ConfirmEmailClient from "@/components/auth/ConfirmEmailClient"

// export default function ConfirmEmailPage() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <ConfirmEmailClient />
//     </Suspense>
//   )
// }
