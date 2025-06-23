import React from 'react';
import { Shield } from "lucide-react";
import {Card, CardContent} from "@/components/ui/card"


const ProblemSolution: React.FC = () => {
    return (
        <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Are You Losing Users{" "}
            <span className="text-red-500">Without Knowing Why?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Most analytics tools give you numbers — but miss the why behind user behavior. They don't alert you when threats happen, leaving you blind to risks that can cost revenue and trust.
          </p>
          
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50/50 to-emerald-50/30 dark:from-blue-950/20 dark:to-emerald-950/10 border-blue-200/50 dark:border-blue-800/50 shadow-xl backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 text-white">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tracly closes the gap with real-time behavior tracking, AI-driven threat detection, and actionable insights — so you can keep users safe and grow faster than ever before.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
};

export default ProblemSolution;