import React from "react";

import {HeaderSection} from "@/components/headerSection"
import { HeroSection } from "@/components/HeroSection"
import { TrustedBy } from "@/components/TrustedBy"
import ProblemSolution from "@/components/ProblemSolution"
import FeaturesSection from "@/components/FeaturesSection"
import AIAnalytics from "@/components/AIAnalytics"
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { LandingTheme } from "@/components/LandingTheme";



export default function Home() {
  return (
    <>
      <LandingTheme>
      <HeaderSection />
      <HeroSection />
      <ProblemSolution />
      <FeaturesSection />
      <AIAnalytics />
      <PricingPlans />
      <Testimonials />
      <TrustedBy />
      <FAQ />
      <Footer />
      </LandingTheme>
    </>
  );
}
