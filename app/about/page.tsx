'use client';

import React from 'react';
import { 
  Target,  
  Shield,  
  BarChart3,
  ShoppingCart,
  Monitor,
  Lock,
  TestTube,
  Zap,
  ArrowRight,
  Heart,
  Sparkles,
    Activity,
    Globe,
    Smartphone,
    TrendingUp,
    AlertTriangle,
    Webhook,
    BrainCog
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { LandingTheme } from '@/components/LandingTheme';
import {HeaderSection} from '@/components/headerSection';
import Footer from '@/components/Footer';

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


import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200); // delay for animation
    return () => clearTimeout(timeout);
  }, []);
    
 return (
<LandingTheme>
  <HeaderSection />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              About BizAgent
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-300 mb-6 leading-tight">
              Empowering Smarter Decisions with <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                User Behavior Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              At BizAgent, we believe that deeply understanding your users is the key to business growth, security, and retention. 
              Our mission is to turn raw session data into actionable insights — fast.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To help digital businesses grow intelligently by capturing real-time user behavior, 
              detecting threats, and delivering AI-powered insights that drive results.
            </p>
          </div>
        </div>
      </section>
 

      {/* Who We Serve Section */}
      <section className="py-18 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprise, we help diverse teams make data-driven decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-500 mb-3">eCommerce Brands</h3>
              <p className="text-gray-300">Optimize conversion funnels, reduce cart abandonment, and improve customer journeys</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">SaaS & Web Apps</h3>
              <p className="text-gray-300">Understand feature engagement, retention trends, and user workflows</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">Security Teams</h3>
              <p className="text-gray-300">Detect and respond to suspicious logins, location anomalies, and unauthorized access</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <TestTube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">Product Teams</h3>
              <p className="text-gray-300">Analyze UX, behavior flows, and feedback loops to prioritize features that matter</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern teams who need intelligence, not just data
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.name}
                  className="group bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400/60 animate-hologram-card hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Holographic shimmer effect */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 animate-tech-shimmer rounded-2xl" />
                  <CardContent className="p-5 xs:p-6 sm:p-8 relative z-10">
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
                        text-lg xs:text-xl font-bold mb-4
                        transition-colors duration-300
                        ${feature.color}
                        group-hover:text-blue-500
                      `}
                    >
                      {feature.name}
                    </h3>
                    <p className="text-cyan-100/80 leading-relaxed text-sm xs:text-base">
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


      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            To become the intelligence layer for every digital platform — unlocking user behavior insights 
            that lead to smarter decisions, better products, and safer systems.
          </p>
        </div>
      </section>

      {/* Why Users Love Us Section */}
      <section className="py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6">
              <Heart className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">Why Users Love Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Fast to Integrate", description: "JavaScript SDK, REST API, and Webhook support" },
              { icon: BarChart3, title: "Intuitive UI", description: "No analytics degree needed" },
              { icon: Shield, title: "Enterprise-Grade Security", description: "Built with security at its core" },
              { icon: Target, title: "Modular & Flexible", description: "Use only what you need" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-xl mb-4 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-gray-300 group-hover:text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-500 mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Grow Together</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Whether you're building a lean startup or securing an enterprise-grade system, 
            BizAgent is your partner in understanding and scaling user behavior — intelligently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  <Footer />
</LandingTheme>
  );
}