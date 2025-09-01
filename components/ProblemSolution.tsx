"use client";
import React from 'react';
import { Shield, AlertTriangle, BarChart3, BrainCircuit, Zap, TrendingUp, Eye } from "lucide-react";

const features = [
  {
    icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
    title: "No More Blind Spots",
    desc: "Get instant alerts for suspicious activity, drop-offs, and hesitation—never miss a critical moment.",
    gradient: "from-red-500/20 to-orange-500/20",
    iconBg: "from-red-500 to-orange-500",
    accentColor: "text-red-400"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    title: "Actionable Insights",
    desc: "See not just what happened, but why. BizAgent reveals the story behind every user journey.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "from-blue-500 to-cyan-500",
    accentColor: "text-blue-400"
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-emerald-400" />,
    title: "AI Recommendations",
    desc: "Let our AI suggest the next best steps to boost engagement, recover revenue, and protect your platform.",
    gradient: "from-emerald-500/20 to-green-500/20",
    iconBg: "from-emerald-500 to-green-500",
    accentColor: "text-emerald-400"
  }
];

const stats = [
  { icon: <TrendingUp className="w-5 h-5" />, value: "87%", label: "Revenue Recovery" },
  { icon: <Eye className="w-5 h-5" />, value: "3.2x", label: "Faster Detection" },
  { icon: <Zap className="w-5 h-5" />, value: "24/7", label: "Real-time Monitoring" }
];

const ProblemSolution: React.FC = () => {
  return (
    <section className="relative px-4 min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main Headline */}
        <div className="mb-1">
          <h3 className="text-5xl md:text-5xl font-bold mb-8 text-balance leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Are You Losing Users
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
              Without Knowing Why?
            </span>
          </h3>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed text-balance max-w-4xl mx-auto">
            Most analytics platforms give you charts and numbers — but no real answers.
            They miss the <em className="text-cyan-300 font-semibold">why</em> behind user drop-offs, product hesitation, and suspicious activity.
          </p>
        </div>

        {/* Promise Section */}
        <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-900/30 via-transparent rounded-3xl p-12 border border-cyan-500/20 shadow-2xl mb-16 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 group overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 text-white shadow-2xl border border-cyan-400/30 group-hover:scale-110 transition-all duration-500">
              <Shield className="w-10 h-10 animate-pulse" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Our Promise
            </h3>
            
            <div className="space-y-8 text-gray-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              <p className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                <strong className="text-cyan-300 font-bold text-2xl">BizAgent doesn't just show you what users do — we tell you what to do next.</strong>
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Our smart analytics engine analyzes user behavior, product interest, drop-off patterns,
                and platform trends — then recommends steps to boost engagement, increase sales, and reduce churn.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                BizAgent bridges the gap with real-time session tracking, <br />
                <span className="text-emerald-400 font-semibold mx-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  AI-powered threat detection
                </span>
                and intelligent recommendations — so you can protect users, recover lost revenue, and grow confidently.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5 md:py-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`flex items-center justify-center w-16 h-16 mx-auto ${feature.iconBg}`}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <h4 className={`font-bold text-xl mb-4 ${feature.accentColor} group-hover:text-white transition-colors duration-300`}>
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;