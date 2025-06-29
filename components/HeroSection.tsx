"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Zap, 
  TrendingUp, 
  Globe,
  Sparkles,
  Lock,
  Cpu,
  Radar,
  Binary,
  Terminal,
} from "lucide-react";
import Link from "next/link";

const trustBadges = [
  { text: "Protect your app", icon: Shield },
  { text: "Delight your users", icon: Sparkles },
  { text: "Boost revenue", icon: TrendingUp },
  { text: "5-Min Setup", icon: Zap },
  { text: "24/7 Support", icon: Globe },
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
          {/* Holographic Badge */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-950 to-cyan-950 text-cyan-300 hover:from-cyan-700 hover:to-blue-700 border border-cyan-500/50 text-sm px-4 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm animate-hologram-badge">
              <Terminal className="w-4 h-4 mr-2 animate-tech-pulse" aria-label="Terminal" /> 
              🚀 NEURAL THREAT DETECTION v2.0 DEPLOYED
            </Badge>
          </div>

          {/* Cyberpunk Headline */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="block mb-4 text-white animate-glitch-text">
                TRACK EVERY
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent animate-neon-glow text-shadow-neon"> DIGITAL PULSE</span>
              </span>
              <span className="block text-xl xs:text-2xl sm:text-3xl lg:text-4xl mt-6 text-cyan-300 animate-tech-fade-in font-mono">
                &gt; DETECT_EVERY_THREATS()
              </span>
              <span className="block text-xl xs:text-2xl sm:text-3xl lg:text-4xl mt-6 text-blue-300 animate-tech-fade-in font-mono">
                Grow Your Business Faster.
              </span>
            </h3>
          </div>

          {/* Tech Subtitle */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
              {/* AI ENGINE ACTIVE */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl shadow-cyan-500/10 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/60 animate-hologram-card hover:shadow-cyan-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 animate-tech-shimmer" />
                <div className="relative z-10 flex flex-col items-center">
                  <Cpu className="w-8 h-8 text-cyan-400 animate-tech-pulse mb-3" />
                  <div className="font-mono text-cyan-400 text-base mb-1">[AI ENGINE ACTIVE]</div>
                  <div className="text-gray-300 text-sm text-center">Advanced AI is now watching.</div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
              </div>
              {/* SCANNING */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl shadow-blue-500/10 transition-all duration-300 border border-blue-500/30 hover:border-blue-400/60 animate-hologram-card hover:shadow-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 animate-tech-shimmer" />
                <div className="relative z-10 flex flex-col items-center">
                  <Radar className="w-8 h-8 text-blue-400 animate-tech-spin mb-3" />
                  <div className="font-mono text-blue-400 text-base mb-1">[SCANNING]</div>
                  <div className="text-gray-300 text-sm text-center">Every user, every click, every threat.</div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-line" />
              </div>
              {/* SECURING */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl shadow-purple-500/10 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60 animate-hologram-card hover:shadow-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 animate-tech-shimmer" />
                <div className="relative z-10 flex flex-col items-center">
                  <Lock className="w-8 h-8 text-purple-400 animate-tech-pulse mb-3" />
                  <div className="font-mono text-purple-400 text-base mb-1">[SECURING]</div>
                  <div className="text-gray-300 text-sm text-center">Your digital ecosystem — in real time.</div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-scan-line" />
              </div>
            </div>
          </div>

          {/* Futuristic CTA Buttons */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 w-full">
              <Button 
                asChild 
                size="lg" 
                className="animate-hologram-card text-lg px-6 py-3 h-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-2xl shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 group animate-tech-button border border-cyan-400/50 backdrop-blur-sm w-full sm:w-auto"
              >
                <Link href="#" className="flex items-center gap-3 font-mono justify-center">
                  <Binary className="w-3 h-3 animate-tech-spin" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform animate-tech-arrow" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="animate-hologram-card text-lg px-10 py-6 h-auto border-2 border-cyan-400/50 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 group bg-black/60 text-cyan-300 hover:text-cyan-200 animate-tech-button-outline w-full sm:w-auto"
              >
                <Link href="#" className="flex items-center gap-3 font-mono justify-center">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform animate-tech-pulse" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Tech Trust Indicators */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10 mb-12 sm:mb-16">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-black/40 border border-cyan-500/20 shadow-cyan-500/10 shadow-sm hover:bg-cyan-950/30 hover:border-cyan-400/40 transition-all duration-300 animate-tech-badge font-mono text-xs sm:text-sm text-gray-300 hover:text-cyan-200"
                >
                  <badge.icon className="w-5 h-5 text-cyan-400 animate-tech-pulse" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};