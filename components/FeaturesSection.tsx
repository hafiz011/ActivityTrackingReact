import React from 'react';
import {Card, CardContent} from "@/components/ui/card"
import { Zap, Activity, Globe, Smartphone, TrendingUp, AlertTriangle, Webhook, Users } from "lucide-react";

interface Feature {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}


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
    name: "Multi-Tenant Support",
    desc: "Scale securely with segmented data architecture for each client.",
    icon: Users,
    color: "text-teal-500"
  },
  {
    name: "API & SDK Integration",
    desc: "Get up and running quickly with flexible, developer-friendly integration.",
    icon: Zap,
    color: "text-yellow-500"
  },
];

const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="py-24 px-4 bg-gradient-to-b from-transparent to-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core Features That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Power Your Success
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analytics and security features designed for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.name} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-current/10 to-current/20 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default FeaturesSection;