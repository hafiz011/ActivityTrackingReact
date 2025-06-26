import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingPlan {
  plan: string;
  price: string;
  priceDetail: string;
  sessions: string;
  features: string[];
  popular: boolean;
}

const pricing: PricingPlan[] = [
  {
    plan: "Starter",
    price: "Free",
    priceDetail: "Forever",
    sessions: "5,000 / month",
    features: ["Basic Analytics", "API Access", "Community Support", "Standard Reporting"],
    popular: false,
  },
  {
    plan: "Pro",
    price: "$29",
    priceDetail: "per month",
    sessions: "50,000 / month",
    features: ["Advanced Analytics", "Suspicious Alerts", "Multi-Tenant Support", "Priority Email Support", "Custom Webhooks"],
    popular: true,
  },
  {
    plan: "Enterprise",
    price: "Custom",
    priceDetail: "pricing",
    sessions: "Unlimited",
    features: ["Everything in Pro", "Dedicated Support", "Custom Integrations", "SLA Guarantee", "Advanced Security"],
    popular: false,
  },
];

const PricingPlans: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl text-white md:text-5xl font-bold mb-6">
            Pricing That{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Grows With You
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free, scale seamlessly, cancel anytime
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {pricing.map((plan) => (
            <div
              key={plan.plan}
              className={`relative group transition-all duration-300 overflow-hidden rounded-2xl
                ${plan.popular
                  ? "ring-2 shadow-2xl scale-105 bg-gradient-to-b from-red-400/10 via-transparent to-orange-500/10 border-blue-400/60 hover:shadow-cyan-500/20"
                  : "bg-black/60 border border-cyan-500/30 hover:border-cyan-400/60 shadow-xl hover:shadow-cyan-500/20"
                }
              `}
            >
              {plan.popular && (
                <Badge className="absolute left-1/2 transform -translate-x-1/2 bg-black/60  bg-gradient-to-r from-blue-900 to-blue-900 text-white z-10">
                  Most Popular
                </Badge>
              )}
              {/* Holographic shimmer effect */}
              <div className={`absolute inset-0 pointer-events-none rounded-2xl ${plan.popular
                ? "bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-500/10 rounded-2xl"
                : "bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 rounded-2xl"
              }`} />
              <div className="p-6 sm:p-8 text-white relative z-10 flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/{plan.priceDetail}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.sessions}</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full mt-auto ${plan.popular ? 'bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-600' : 'bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-700 hover:to-blue-600'}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;