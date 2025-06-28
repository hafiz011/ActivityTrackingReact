import React from 'react';
import {Card, CardContent} from "@/components/ui/card"
import { Zap, Activity, Globe, Smartphone, TrendingUp, AlertTriangle, Webhook, Users } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: "Is setup really that fast?",
    a: "Yes! Our SDK and API integration typically takes under 5 minutes. We provide comprehensive documentation and code examples for all major frameworks."
  },
  {
    q: "Does it work with React, Shopify, WordPress?",
    a: "Absolutely! We support all major platforms and frameworks. Dedicated plugins for popular CMS platforms are coming soon for even easier integration."
  },
  {
    q: "How secure is my user data?",
    a: "We use industry-grade AES-256 encryption, follow GDPR and CCPA compliance strictly, and undergo regular security audits. Your data privacy is our top priority."
  },
  {
    q: "What's next for Tracly?",
    a: "Our roadmap includes AI-powered predictive analytics, session replay functionality, advanced heatmaps, and machine learning-driven insights."
  },
];

const FAQ : React.FC = () => {
    return (
         <section id="faq" className="py-10 px-4 min-h-screemin-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-gray-200 text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-gray-300">
              Everything you need to know about Tracly
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black/60 dark:bg-black/40 rounded-2xl p-6 border border-cyan-500/20 shadow-xl flex flex-col items-center hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default FAQ;