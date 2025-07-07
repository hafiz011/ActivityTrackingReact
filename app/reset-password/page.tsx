// // /app/reset-password/page.tsx

// "use client";
// import ResetPassword from "@/components/auth/ResetPassword";
// export const dynamic = "force-dynamic"

// export default function Page() {
//   return <ResetPassword />; // import from your component or inline here
// }


import { Suspense } from "react";
import ResetPassword from "@/components/auth/ResetPassword";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
