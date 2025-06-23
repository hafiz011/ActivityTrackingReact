"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge, ArrowRight, Play, Shield, Zap, Activity } from "lucide-react";
import Link from "next/link";



export const HeroSection: React.FC = () => {
  return (
    <section className="py-24 text-center bg-background from-blue-50 to-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-emerald-50/30 dark:from-blue-950/20 dark:to-emerald-950/10" />
        
        <div className="relative max-w-5xl mx-auto">
          <Badge className="mb-6 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
            🚀 New: AI-Powered Analytics Coming Soon
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Track Every Click.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Detect Every Threat.
            </span>
            <br />
            <span className="text-4xl md:text-6xl">Grow Your Business Faster.</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-muted-foreground leading-relaxed">
            Get crystal-clear visibility into who your users are, what they do, and when suspicious activity strikes — all from one powerful dashboard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="#" className="flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-2 hover:bg-accent/50 transition-all duration-300">
              <Link href="#" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>5-Minute Setup</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500" />
              <span>Real-time Insights</span>
            </div>
          </div>
        </div>
    </section>
  );
};
