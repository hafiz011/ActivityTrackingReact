"use client"

export const runtime = 'edge';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ConfirmEmailClient = dynamic(() => import('@/components/auth/ConfirmEmailClient'), {
  ssr: false,
});
export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ConfirmEmailClient />
    </Suspense>
  )
}
