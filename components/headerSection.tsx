"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Menu, ChevronRight, Sparkles } from "lucide-react";

export const HeaderSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/api-docs", label: "Docs" },
    { href: "/about", label: "About" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
        isScrolled
          ? 'text-gray-50 backdrop-blur-xl shadow-2xl border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-6 mx-auto max-w-7xl">
        {/* Logo & Branding */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white font-bold text-xl shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-sm">
                T
              </span>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`font-bold text-3xl tracking-tight transition-all duration-500 ${
              isScrolled 
                ? 'text-gray-100 group-hover:text-blue-600' 
                : 'text-white group-hover:text-cyan-100'
            }`}>
              Tech Ciph
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 group ${
                isScrolled 
                  ? 'text-gray-100 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50' 
                  : 'text-gray-100 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
              isScrolled
                ? 'text-gray-100 hover:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50'
                : 'text-gray-100 hover:text-gray-300 hover:bg-white/10 hover:backdrop-blur-sm'
            }`}
          >
            Login
          </Link>
          <Button 
            asChild 
            size="lg" 
            className="px-8 py-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-800 text-white font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 border-0 rounded-xl relative overflow-hidden group"
          >
            <Link href="/register" className="relative z-10 flex items-center gap-2">
              Get Started
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="lg"
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50' 
                  : 'text-white hover:bg-white/10 hover:backdrop-blur-sm'
              }`}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-gradient-to-br from-white via-gray-50 to-white border-l border-gray-200/50 backdrop-blur-xl">
            <SheetHeader className="text-left pb-8 border-b border-gradient-to-r from-gray-100 to-gray-200">
              <SheetTitle className="text-2xl font-bold text-gray-900 flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white font-bold text-lg shadow-lg">
                  <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                    T
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  Tracly
                  <Badge variant="secondary" className="text-xs font-semibold bg-gradient-to-r from-cyan-50 to-blue-50 text-blue-700 border border-blue-200/50">
                    <Sparkles className="w-3 h-3 mr-1" />
                    v2.0
                  </Badge>
                </div>
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex flex-col gap-2 py-8">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all duration-300 font-semibold group hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-100 via-gray-50 to-transparent border-t border-gray-200/50 backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-6 py-4 text-center text-gray-700 font-semibold hover:text-blue-600 hover:bg-white rounded-xl transition-all duration-300 hover:scale-105 border border-gray-200/50"
                >
                  Login
                </Link>
                <Button 
                  asChild 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-800 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/register" className="flex items-center justify-center gap-2">
                    Get Started
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};