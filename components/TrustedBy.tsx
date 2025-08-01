"use client";
import React, { useState, useEffect } from "react";
import { Activity, Shield, TrendingUp } from 'lucide-react';

type Brand = {
  name: string;
  logo: string;
};

const brands: Brand[] = [
  { name: "TechCorp", logo: "TC" },
  { name: "DataFlow", logo: "DF" },
  { name: "SecureNet", logo: "SN" },
  { name: "CloudBase", logo: "CB" },
  { name: "InnovateLabs", logo: "IL" },
];

const statsData = [
  { value: "2.5M+", label: "Events Tracked Daily", icon: Activity },
  { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { value: "500+", label: "Companies Trust Us", icon: TrendingUp },
];

export const TrustedBy: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="px-2 sm:px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Brands Row */}
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-10 opacity-80 mb-10 sm:mb-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:opacity-100 opacity-70 hover:scale-105"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 flex items-center justify-center text-base sm:text-lg font-extrabold text-cyan-200 shadow-lg border border-cyan-700/30 animate-hologram-card">
                {brand.logo}
              </div>
              <span className="font-semibold text-base sm:text-lg text-cyan-100 font-mono tracking-wide">{brand.name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl shadow-cyan-500/10 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/60 animate-hologram-card hover:shadow-cyan-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 animate-tech-shimmer" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-center mb-3">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 animate-tech-icon" />
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-counter-glow font-mono">
                          {stat.value}
                        </div>
                        <div className="text-sm sm:text-base text-gray-400 font-mono">
                          {stat.label}
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="text-cyan-400 mt-10 mb-10 sm:mb-12 text-base sm:text-lg font-mono tracking-wide">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Trusted by forward-thinking teams around the globe
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </span>
        </p>
      </div>
    </section>
  );
};