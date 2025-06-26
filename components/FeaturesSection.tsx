"use client";
import React, { useState, useEffect } from "react";

import {
  Zap,
  Activity,
  Globe,
  Smartphone,
  TrendingUp,
  AlertTriangle,
  Webhook,
  BrainCog,
  BarChart3
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const features: Feature[] = [
  {
    name: "Session Tracking",
    desc: "Understand every user's journey — from login to logout with granular detail.",
    icon: Activity,
    color: "text-blue-500"
  },
  {
    name: "Geo-Location Logging",
    desc: "Tailor experiences and spot unusual logins instantly with precise location data.",
    icon: Globe,
    color: "text-emerald-500"
  },
  {
    name: "Device & Browser Fingerprinting",
    desc: "Identify devices and block suspicious access with advanced fingerprinting.",
    icon: Smartphone,
    color: "text-purple-500"
  },
  {
    name: "User Activity Monitoring",
    desc: "See exactly which pages, products, and features users love most.",
    icon: TrendingUp,
    color: "text-orange-500"
  },
  {
    name: "Suspicious Login Alerts",
    desc: "Stop threats before they damage your business with instant notifications.",
    icon: AlertTriangle,
    color: "text-red-500"
  },
  {
    name: "Webhook Notifications",
    desc: "Automate workflows with real-time event triggers and custom integrations.",
    icon: Webhook,
    color: "text-indigo-500"
  },
  {
    name: "API & SDK Integration",
    desc: "Get up and running quickly with flexible, developer-friendly integration.",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    name: "AI-Powered Analytics",
    desc: "Predict user behavior, detect anomalies, and surface insights to drive smarter decisions automatically.",
    icon: BrainCog,
    color: "text-cyan-500"
  },
  {
    name: "Business Analysis & Growth Suggestions",
    desc: "Get intelligent recommendations to boost sales, reduce churn, and grow smarter with AI-powered insights.",
    icon: BarChart3,
    color: "text-pink-500"
  },
];

const FeaturesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="features" className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-5xl font-bold mb-6 text-white">
            Core Features That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Power Your Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analytics and security features designed for modern businesses
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.name}
                  className="group bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400/60 animate-hologram-card hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Holographic shimmer effect */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 animate-tech-shimmer rounded-2xl" />
                  <CardContent className="p-8 relative z-10">
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-current/10 to-current/20 mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon
                        className={`
                          w-6 h-6 font-bold
                          transition-colors duration-300
                          ${feature.color}
                          group-hover:text-blue-500
                        `}
                      />
                    </div>
                    <h3
                      className={`
                        text-xl font-bold mb-4
                        transition-colors duration-300
                        ${feature.color}
                        group-hover:text-blue-500
                      `}
                    >
                      {feature.name}
                    </h3>
                    <p className="text-cyan-100/80 leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;