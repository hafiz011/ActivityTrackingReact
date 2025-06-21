"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Globe,
  Smartphone,
  Activity,
  AlertTriangle,
  Webhook,
  Users,
  Zap,
  Star,
  Check,
  ArrowRight,
  Play,
  TrendingUp
} from "lucide-react";

// Types
interface Brand {
  name: string;
  logo: string;
}

interface Feature {
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface PricingPlan {
  plan: string;
  price: string;
  priceDetail: string;
  sessions: string;
  features: string[];
  popular: boolean;
}

interface FAQ {
  q: string;
  a: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const brands: Brand[] = [
  { name: "TechCorp", logo: "TC" },
  { name: "DataFlow", logo: "DF" },
  { name: "SecureNet", logo: "SN" },
  { name: "CloudBase", logo: "CB" },
  { name: "InnovateLabs", logo: "IL" },
];

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

const testimonials: Testimonial[] = [
  {
    quote: "Tracly uncovered $2,000+ in abandoned carts for us in the first week — pure gold! The insights helped us optimize our checkout flow.",
    author: "Aisha R.",
    role: "eCommerce Founder",
    company: "StyleHub",
    rating: 5
  },
  {
    quote: "The suspicious login alerts saved us from several attacks. I trust Tracly daily to keep our platform secure and our users protected.",
    author: "Imran H.",
    role: "Security Lead",
    company: "TechFlow",
    rating: 5
  },
  {
    quote: "The real-time analytics and user behavior insights have transformed how we make product decisions. Highly recommend!",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "InnovateApp",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-sm">
              T
            </div>
            <span className="font-bold text-xl tracking-tight">Tracly</span>
            <Badge variant="secondary" className="hidden md:inline-flex ml-2 text-xs">
              v2.0
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-emerald-50/30 dark:from-blue-950/20 dark:to-emerald-950/10" />
        
        <div className="relative max-w-5xl mx-auto">
          <Badge className="mb-6 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800">
            🚀 New: AI-Powered Analytics Coming Soon
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Track Every Click.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Detect Every Threat.
            </span>
            <br />
            <span className="text-4xl md:text-6xl">Grow Your Business Faster.</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-muted-foreground leading-relaxed">
            Get crystal-clear visibility into who your users are, what they do, and when suspicious activity strikes — all from one powerful dashboard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="#" className="flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-2 hover:bg-accent/50 transition-all duration-300">
              <Link href="#" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>5-Minute Setup</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500" />
              <span>Real-time Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Brands */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-12 text-lg">
            Trusted by forward-thinking teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center gap-3 transition-opacity hover:opacity-100">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-sm font-bold">
                  {brand.logo}
                </div>
                <span className="font-semibold text-lg">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
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

      {/* Core Features */}
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

      {/* AI-Powered Analytics */}
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

      {/* Pricing Plans */}
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

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-accent/5 hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-emerald-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Track Smarter?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Know your users. Detect threats instantly. Convert more.<br />
            Start with Tracly today — setup takes just 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href="#" className="flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-2 hover:bg-accent/50 transition-all duration-300">
              <Link href="#" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Tracly
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-background to-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-background to-accent/10 border-t py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold">
                  T
                </div>
                <span className="font-bold text-2xl">Tracly</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The most comprehensive user analytics and security platform for modern businesses. Track smarter, grow faster, stay secure.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-500" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">API Reference</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tracly. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}