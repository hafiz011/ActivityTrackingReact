import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Check } from "lucide-react";

const AIAnalytics: React.FC = () => {
  return (
    <section className="py-10 px-4 min-h-screemin-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-200">
          Track Smarter —{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let AI Guide Your Growth
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-14 leading-relaxed max-w-3xl mx-auto">
          Trackly’s AI doesn’t just analyze — it anticipates. Predict churn, detect fraud, and uncover hidden opportunities — all without lifting a finger.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Predictive Insights Card */}
          <Card className="group bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-purple-500/10 border border-purple-400/30 hover:border-pink-400/60 animate-hologram-card hover:shadow-pink-500/20 transition-all duration-300 relative overflow-hidden">
            {/* Holographic shimmer effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-purple-400/10 via-transparent to-pink-500/10 rounded-2xl" />
            <CardContent className="p-8 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-500" />
                Predictive Insights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Predict who’s about to leave or convert</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Automatically segment users by behavior & intent</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Reveal high-value patterns that drive growth</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Threat Detection Card */}
          <Card className="group text-left bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-red-500/10 border border-red-400/30 hover:border-orange-400/60 animate-hologram-card hover:shadow-orange-500/20 transition-all duration-300 relative overflow-hidden">
            {/* Holographic shimmer effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-red-400/10 via-transparent to-orange-500/10 rounded-2xl" />
            <CardContent className="p-8 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                Real-Time Threat Detection
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Flag unusual, risky behaviors instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Reveal friction points killing your conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Get prioritized, easy-to-act insights</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          Trackly turns behavior noise into AI-driven guidance — so you can protect users, boost revenue, and scale with confidence.
        </p>
      </div>
    </section>
  );
};

export default AIAnalytics;