"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const HeaderSection: React.FC = () => {
  const router = useRouter();

  return (
    <header
      className="sticky top-0 z-50 w-full bg-black/50 via-transparent dark:bg-black/50"
    >
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl text-white">
        {/* Logo & Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-sm">
            T
          </div>
          <span className="font-bold text-xl tracking-tight">Tracly</span>
          <Badge variant="secondary" className="hidden md:inline-flex ml-2 text-xs">
            v2.0
          </Badge>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-cyan-300 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-cyan-300 transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-cyan-300 transition-colors">
            FAQ
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:text-cyan-300 transition-colors">
            How It Works
          </Link>
          <Link href="/live-demo" className="text-sm font-medium hover:text-cyan-300 transition-colors">
            Live Demo
          </Link>
          <Link href="/docs" className="text-sm font-medium hover:text-cyan-300 transition-colors">
            Docs
          </Link>
          <Link href="/login" className="text-sm font-medium hover:text-cyan-300 transition-colors">
            Login
          </Link>
          <Button asChild size="sm" className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow">
            <Link href="/register">
              Register
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};