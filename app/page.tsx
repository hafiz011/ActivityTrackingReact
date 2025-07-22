import React from "react";
import { HeroSection } from "@/components/HeroSection"
import { TrustedBy } from "@/components/TrustedBy"
import ProblemSolution from "@/components/ProblemSolution"
import FeaturesSection from "@/components/FeaturesSection"
import AIAnalytics from "@/components/AIAnalytics"
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <FeaturesSection />
      <AIAnalytics />
      <PricingPlans />
      <Testimonials />
      <TrustedBy />
      <FAQ />
    </>
  );
}
