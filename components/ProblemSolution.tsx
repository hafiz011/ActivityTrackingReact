import React from 'react';
import { Shield, AlertTriangle, BarChart3, BrainCircuit } from "lucide-react";

const features = [
  {
    icon: <AlertTriangle className="w-7 h-7 text-red-400 animate-pulse" />,
    title: "No More Blind Spots",
    desc: "Get instant alerts for suspicious activity, drop-offs, and hesitation—never miss a critical moment."
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-blue-400 animate-tech-pulse" />,
    title: "Actionable Insights",
    desc: "See not just what happened, but why. Trackly reveals the story behind every user journey."
  },
  {
    icon: <BrainCircuit className="w-7 h-7 text-emerald-400 animate-tech-spin" />,
    title: "AI Recommendations",
    desc: "Let our AI suggest the next best steps to boost engagement, recover revenue, and protect your platform."
  }
];

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-10 px-4 min-h-screemin-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-5xl md:text-5xl font-bold mb-8 text-balance text-gray-200">
          Are You Losing Users <span className="text-red-500">Without Knowing Why?</span>
        </h3>

        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed text-balance">
          Most analytics platforms give you charts and numbers — but no real answers.
          They miss the <em>why</em> behind user drop-offs, product hesitation, and suspicious activity.
          No alerts. No context. Just noise.
        </p>

        <div className="relative bg-gradient-to-br from-blue-900/60 via-black/70 to-cyan-900/40 rounded-2xl p-8 border border-cyan-500/30 shadow-2xl flex flex-col items-center hover:border-cyan-400/70 transition-all duration-300 overflow-hidden mb-12">
          {/* Holographic shimmer effect */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 rounded-2xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 text-white shadow-lg border-2 border-cyan-400/40">
              <Shield className="w-8 h-8 animate-tech-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-200">Our Promise</h3>
            <div className="space-y-6 text-cyan-100/90 text-lg md:text-xl leading-relaxed text-balance font-mono">
              <p>
                <strong className="text-cyan-300">Trackly doesn’t just show you what users do — we tell you what to do next.</strong> <br />
                Our smart analytics engine analyzes user behavior, product interest, drop-off patterns,
                and platform trends — then recommends steps to boost engagement, increase sales, and reduce churn.
              </p>
              <p>
                Trackly bridges the gap with real-time session tracking, <span className="text-emerald-400 font-semibold">AI-powered threat detection</span>,
                and intelligent recommendations — so you can protect users, recover lost revenue, and grow confidently.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-black/60 dark:bg-black/40 rounded-2xl p-6 border border-cyan-500/20 shadow-xl flex flex-col items-center hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <div className="font-bold text-lg text-cyan-200 mb-2">{feature.title}</div>
              <div className="text-gray-300 text-base">{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;