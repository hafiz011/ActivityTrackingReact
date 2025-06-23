"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export const HeaderSection: React.FC = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        {/* Logo & Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-sm">
            T
          </div>
          <span className="font-bold text-xl tracking-tight">Trackly</span>
          <Badge variant="secondary" className="hidden md:inline-flex ml-2 text-xs">
            v2.0
          </Badge>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">
            How It Works
          </Link>
          <Link href="/live-demo" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Live Demo
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Docs
          </Link>
          <Link href="/login" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Login
          </Link>

          {/* CTA Button */}
          <Button asChild className="ml-2 text-sm px-4 py-2">
            <Link href="/start-free-trial">Start Free Trial</Link>
          </Button>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
