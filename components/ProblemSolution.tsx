import React from 'react';
import { Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
          Are You Losing Users <span className="text-red-500">Without Knowing Why?</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
          Most analytics platforms give you charts and numbers — but no real answers.
          They miss the <em>why</em> behind user drop-offs, product hesitation, and suspicious activity.
          No alerts. No context. Just noise.
        </p>

        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50/50 to-emerald-50/30 dark:from-blue-950/20 dark:to-emerald-950/10 border-blue-200/50 dark:border-blue-800/50 shadow-xl backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 text-white">
              <Shield className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold mb-4">Our Promise</h3>

            <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed text-balance">
              <p>
                <strong>Trackly doesn’t just show you what users do — we tell you what to do next.</strong> <br />
                Our smart analytics engine analyzes user behavior, product interest, drop-off patterns,
                and platform trends — then recommends steps to boost engagement, increase sales, and reduce churn.
              </p>

              <p>
                Trackly bridges the gap with real-time session tracking, AI-powered threat detection,
                and intelligent recommendations — so you can protect users, recover lost revenue, and grow confidently.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProblemSolution;
