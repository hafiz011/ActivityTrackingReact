"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Zap, 
  Activity, 
  TrendingUp, 
  Users, 
  Star,
  Globe,
  Sparkles,
  Lock,
  Cpu,
  Radar,
  Binary,
  Terminal,
} from "lucide-react";
import Link from "next/link";

const statsData = [
  { value: "2.5M+", label: "Events Tracked Daily", icon: Activity },
  { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { value: "500+", label: "Companies Trust Us", icon: TrendingUp },
];

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
    <section className="min-h-screen flex items-center justify-center">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-10">
        <div className="text-center">
          {/* Holographic Badge */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-950 to-cyan-950 text-cyan-300 hover:from-cyan-700 hover:to-blue-700 border border-cyan-500/50 text-sm px-6 py-3 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm animate-hologram-badge">
              <Terminal className="w-4 h-4 mr-2 animate-tech-pulse" aria-label="Terminal" /> 
              🚀 NEURAL THREAT DETECTION v2.0 DEPLOYED
            </Badge>
          </div>

          {/* Cyberpunk Headline */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className="text-5xl sm:text-6xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="block mb-4 text-white animate-glitch-text">TRACK EVERY
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent animate-neon-glow text-shadow-neon"> DIGITAL PULSE</span>
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-4xl mt-6 text-cyan-300 animate-tech-fade-in font-mono">
                &gt; DETECT_EVERY_THREATS()
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-4xl mt-6 text-blue-300 animate-tech-fade-in font-mono">
                Grow Your Business Faster.
              </span>
            </h3>
          </div>

          {/* Tech Subtitle */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              {/* AI ENGINE ACTIVE */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl shadow-cyan-500/10 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/60 animate-hologram-card hover:shadow-cyan-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 animate-tech-shimmer" />
                <div className="relative z-10 flex flex-col items-center">
                  <Cpu className="w-8 h-8 text-cyan-400 animate-tech-pulse mb-3" />
                  <div className="font-mono text-cyan-400 text-base mb-1">[AI ENGINE ACTIVE]</div>
                  <div className="text-gray-300 text-sm text-center">Advanced AI is now watching.</div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
              </div>
              {/* SCANNING */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl shadow-blue-500/10 transition-all duration-300 border border-blue-500/30 hover:border-blue-400/60 animate-hologram-card hover:shadow-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 animate-tech-shimmer" />
                <div className="relative z-10 flex flex-col items-center">
                  <Radar className="w-8 h-8 text-blue-400 animate-tech-spin mb-3" />
                  <div className="font-mono text-blue-400 text-base mb-1">[SCANNING]</div>
                  <div className="text-gray-300 text-sm text-center">Every user, every click, every threat.</div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan-line" />
              </div>
              {/* SECURING */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl shadow-purple-500/10 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60 animate-hologram-card hover:shadow-purple-500/20 relative overflow-hidden">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                asChild 
                size="lg" 
                className="animate-hologram-card text-lg px-6 py-3 h-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-2xl shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 group animate-tech-button border border-cyan-400/50 backdrop-blur-sm"
              >
                <Link href="#" className="flex items-center gap-3 font-mono">
                  <Binary className="w-3 h-3 animate-tech-spin" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform animate-tech-arrow" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="animate-hologram-card text-lg px-10 py-6 h-auto border-2 border-cyan-400/50 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 group bg-black/60 text-cyan-300 hover:text-cyan-200 animate-tech-button-outline"
              >
                <Link href="#" className="flex items-center gap-3 font-mono">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform animate-tech-pulse" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Tech Trust Indicators */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 mb-16">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-cyan-500/20 shadow-cyan-500/10 shadow-sm hover:bg-cyan-950/30 hover:border-cyan-400/40 transition-all duration-300 animate-tech-badge font-mono text-sm text-gray-300 hover:text-cyan-200"
                >
                  <badge.icon className="w-5 h-5 text-cyan-400 animate-tech-pulse" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Holographic Stats */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              {statsData.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl shadow-cyan-500/10 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/60 animate-hologram-card hover:shadow-cyan-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 animate-tech-shimmer" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-3">
                        <stat.icon className="w-8 h-8 text-cyan-400 animate-tech-icon" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2 animate-counter-glow font-mono">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 font-mono">
                        {stat.label}
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cyberpunk Social Proof */}
          <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mt-16 pt-8 border-t border-cyan-500/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-base text-cyan-200 font-mono">
                <div className="flex items-center gap-2 animate-tech-social">
                  <Users className="w-5 h-5 text-cyan-400 animate-tech-pulse" />
                  <span className="font-semibold">500+</span>
                  <span className="text-cyan-300">SYSTEMS SECURED</span>
                </div>
                <div className="hidden sm:block w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <div className="flex items-center gap-2 animate-tech-social">
                  <Star className="w-5 h-5 fill-cyan-400 text-cyan-400 animate-tech-twinkle" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-blue-300">THREAT DETECTION SCORE</span>
                </div>
                <div className="hidden sm:block w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <div className="flex items-center gap-2 animate-tech-social">
                  <TrendingUp className="w-5 h-5 text-purple-400 animate-tech-trend" />
                  <span className="font-semibold">200%</span>
                  <span className="text-purple-300">EFFICIENCY BOOST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};