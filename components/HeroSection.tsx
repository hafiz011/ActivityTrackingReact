"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Play, 
  Brain, 
  Zap, 
  TrendingUp, 
  BarChart3,
  Sparkles,
  Eye,
  Activity,
  Target,
  Database,
  Terminal,
} from "lucide-react";
import Link from "next/link";

const trustBadges = [
  { text: "Real-time insights", icon: Activity },
  { text: "Smart recommendations", icon: Brain },
  { text: "ROI optimization", icon: TrendingUp },
  { text: "1-Click integration", icon: Zap },
  { text: "Expert support", icon: Target },
];

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center mt-24 px-2 sm:px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-2 sm:px-4">
        <div className="text-center">
          {/* AI Badge */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Badge className="mb-6 bg-gradient-to-r from-emerald-950 to-blue-950 text-emerald-300 hover:from-emerald-700 hover:to-blue-700 border border-emerald-500/50 text-sm px-4 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-emerald-500/20 backdrop-blur-sm animate-hologram-badge">
              <Brain
                className="w-4 h-4 mr-2 animate-tech-pulse"
                aria-hidden="true"
              />
              🧠 HUMAN-LIKE AI ANALYST ONLINE
            </Badge>
          </div>

          {/* Main Headline */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="block mb-4 text-white animate-glitch-text">
                YOUR AI BUSINESS
                <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent animate-neon-glow text-shadow-neon">
                  {" "}
                  ANALYST
                </span>
              </span>
              <span className="block text-xl xs:text-2xl sm:text-3xl lg:text-4xl mt-6 text-emerald-300 animate-tech-fade-in font-mono">
                &gt; Watches every log, every pattern
              </span>
              <span className="block text-xl xs:text-2xl sm:text-3xl lg:text-4xl mt-6 text-blue-300 animate-tech-fade-in font-mono">
                Delivers instant business insights.
              </span>
            </h1>
          </div>

          {/* AI Status Cards */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
              {/* ANALYZING */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl shadow-emerald-500/10 transition-all duration-300 border border-emerald-500/30 hover:border-emerald-400/60 animate-hologram-card hover:shadow-emerald-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 animate-tech-shimmer" />
                <div className="relative z-10 flex flex-col items-center">
                  <Eye
                    className="w-8 h-8 text-emerald-400 animate-tech-pulse mb-3"
                    aria-hidden="true"
                  />
                  <div className="font-mono text-emerald-400 text-base mb-1">
                    [ANALYZING]
                  </div>
                  <div className="text-gray-300 text-sm text-center">
                    Every user interaction, transaction, behavior pattern.
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan-line" />
              </div>

              {/* PROCESSING */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl shadow-blue-500/10 transition-all duration-300 border border-blue-500/30 hover:border-blue-400/60 animate-hologram-card hover:shadow-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 animate-tech-shimmer" />
                <div className="relative z-10 flex flex-col items-center">
                  <Database
                    className="w-8 h-8 text-blue-400 animate-tech-spin mb-3"
                    aria-hidden="true"
                  />
                  <div className="font-mono text-blue-400 text-base mb-1">
                    [PROCESSING]
                  </div>
                  <div className="text-gray-300 text-sm text-center">
                    Millions of data points into actionable insights.
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-line" />
              </div>

              {/* RECOMMENDING */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl shadow-cyan-500/10 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/60 animate-hologram-card hover:shadow-cyan-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 animate-tech-shimmer" />
                <div className="relative z-10 flex flex-col items-center">
                  <BarChart3
                    className="w-8 h-8 text-cyan-400 animate-tech-pulse mb-3"
                    aria-hidden="true"
                  />
                  <div className="font-mono text-cyan-400 text-base mb-1">
                    [RECOMMENDING]
                  </div>
                  <div className="text-gray-300 text-sm text-center">
                    Strategic decisions for maximum growth.
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 w-full">
              <Button
                asChild
                size="lg"
                className="animate-hologram-card text-lg px-6 py-3 h-auto bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 shadow-2xl shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 group animate-tech-button border border-emerald-400/50 backdrop-blur-sm w-full sm:w-auto"
              >
                <Link
                  href="/trial"
                  className="flex items-center gap-3 font-mono justify-center"
                >
                  <Brain
                    className="w-5 h-5 animate-tech-pulse"
                    aria-hidden="true"
                  />
                  Deploy AI Analyst
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform animate-tech-arrow"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="animate-hologram-card text-lg px-10 py-6 h-auto border-2 border-emerald-400/50 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 group bg-black/60 text-emerald-300 hover:text-emerald-200 animate-tech-button-outline w-full sm:w-auto"
              >
                <Link
                  href="/demo"
                  className="flex items-center gap-3 font-mono justify-center"
                >
                  <Play
                    className="w-5 h-5 group-hover:scale-110 transition-transform animate-tech-pulse"
                    aria-hidden="true"
                  />
                  See AI in Action
                </Link>
              </Button>
            </div>
          </div>

          {/* Business Trust Indicators */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10 mb-12 sm:mb-16">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-black/40 border border-emerald-500/20 shadow-emerald-500/10 shadow-sm hover:bg-emerald-950/30 hover:border-emerald-400/40 transition-all duration-300 animate-tech-badge font-mono text-xs sm:text-sm text-gray-300 hover:text-emerald-200"
                  >
                    <Icon
                      className="w-5 h-5 text-emerald-400 animate-tech-pulse"
                      aria-hidden="true"
                    />
                    <span className="font-medium">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};