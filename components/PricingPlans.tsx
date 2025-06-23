import React from 'react';
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
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


const PricingPlans : React.FC = () => {
    return (
         <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-accent/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing That{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Grows With You
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, scale seamlessly, cancel anytime
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={plan.plan} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'hover:shadow-xl'} transition-all duration-300 ${plan.popular ? 'bg-gradient-to-b from-blue-50/50 to-blue-100/30 dark:from-blue-950/30 dark:to-blue-900/20' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">/{plan.priceDetail}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.sessions}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    );
};

export default PricingPlans ;