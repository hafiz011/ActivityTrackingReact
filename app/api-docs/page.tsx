
"use client"
import { Suspense } from "react";
import { LandingTheme } from '@/components/LandingTheme';
import {HeaderSection} from '@/components/headerSection';
import APIExample from "@/components/API-docs";
import Footer from '@/components/Footer';
export default function Page() {
  return (
  <>
  <LandingTheme>
    <HeaderSection />
    <APIExample />
    <Footer />
  </LandingTheme>
  </>
  );
}