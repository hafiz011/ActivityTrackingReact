import React from 'react';
import {Card, CardContent, } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, Check} from "lucide-react";





const AIAnalytics: React.FC = () => {
    return (
          <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            From Data Overload to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Smart Decisions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Tracly's AI doesn't just analyze — it anticipates. Predict churn, detect fraud, and uncover hidden opportunities automatically.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="text-left bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10 border-purple-200/50 dark:border-purple-800/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  Predictive Insights
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Predict who's about to leave or convert</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automatically segment users by behavior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Identify high-value user patterns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-left bg-gradient-to-br from-red-50/50 to-orange-50/30 dark:from-red-950/20 dark:to-orange-950/10 border-red-200/50 dark:border-red-800/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  Threat Detection
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Flag unusual behaviors immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reveal friction points killing conversions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Get prioritized, actionable alerts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            Turn data noise into crystal-clear signals that drive growth.
          </p>
        </div>
      </section>
    );
};

export default AIAnalytics;