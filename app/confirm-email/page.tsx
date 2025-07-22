"use client";

import { Suspense } from "react";
import ConfirmEmailClient from "@/components/auth/ConfirmEmailClient";
import { LandingTheme } from '@/components/LandingTheme';
import {HeaderSection} from '@/components/headerSection';
import Footer from '@/components/Footer';
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
    <LandingTheme>
      <HeaderSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ConfirmEmailClient />
      </Suspense>
      <Footer />
    </LandingTheme>
    </>
  );
}
