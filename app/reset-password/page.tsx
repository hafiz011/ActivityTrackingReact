// // /app/reset-password/page.tsx

// "use client";
// import ResetPassword from "@/components/auth/ResetPassword";
// export const dynamic = "force-dynamic"

// export default function Page() {
//   return <ResetPassword />; // import from your component or inline here
// }

"use client"

import ResetPassword from "@/components/auth/ResetPassword";

export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <ResetPassword />
  );
}
