"use client";

import { Suspense } from "react";
import ConfirmEmailClient from "@/components/auth/ConfirmEmailClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ConfirmEmailClient />
      </Suspense>
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
