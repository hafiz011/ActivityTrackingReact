// // /app/reset-password/page.tsx

// "use client";
// import ResetPassword from "@/components/auth/ResetPassword";
// export const dynamic = "force-dynamic"

// export default function Page() {
//   return <ResetPassword />; // import from your component or inline here
// }


"use client";
// /app/reset-password/page.tsx
import dynamic from "next/dynamic";

// Force disable SSR (prevents Suspense errors)
const ResetPassword = dynamic(() => import("@/components/auth/ResetPassword"), {
  ssr: false,
});

export default function Page() {
  return <ResetPassword />;
}
