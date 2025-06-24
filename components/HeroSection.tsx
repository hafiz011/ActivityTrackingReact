"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Zap, 
  Activity, 
  TrendingUp, 
  Users, 
  Star,
  CheckCircle,
  Globe,
  BarChart3,
  Sparkles,
  Target,
  Lock,
  Cpu,
  Database,
  Network,
  Radar,
  Binary,
  Code,
  Terminal,
  Wifi
} from "lucide-react";
import Link from "next/link";

const statsData = [
  { value: "2.5M+", label: "Events Tracked Daily", icon: Activity },
  { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { value: "500+", label: "Companies Trust Us", icon: TrendingUp },
];

const trustBadges = [
  { text: "Protect your app", icon: Shield },
  { text: "Delight your users", icon: Sparkles },
  { text: "Boost revenue", icon: TrendingUp },
  { text: "5-Min Setup", icon: Zap },
  { text: "24/7 Support", icon: Globe },
];

const TechParticle = ({ delay = 0, duration = 10, size = 2 }: { delay?: number, duration?: number, size?: number }) => (
  <div 
    className="absolute animate-tech-particle opacity-60"
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  >
    <div 
      className="bg-cyan-400 rounded-full animate-pulse-tech shadow-cyan-glow"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  </div>
);

const CircuitLine = ({ delay = 0 }: { delay?: number }) => (
  <div 
    className="absolute animate-circuit-flow opacity-30"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-data-flow" />
  </div>
);

const HologramElement = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <div 
    className="absolute animate-hologram opacity-40"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="relative">
      {children}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-scan-line" />
    </div>
  </div>
);

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [laserRows, setLaserRows] = useState<{animationDuration: number}[]>([]);
  const [laserCols, setLaserCols] = useState<{animationDuration: number}[]>([]);
  const [particles, setParticles] = useState<
    { delay: number; duration: number; size: number; left: number; top: number }[]
  >([]);

  
  useEffect(() => {
    setIsVisible(true);
    

  setLaserRows(
      Array.from({ length: 20 }, () => ({
        animationDuration: 3 + Math.random() * 2,
      }))
    );
    setLaserCols(
      Array.from({ length: 15 }, () => ({
        animationDuration: 4 + Math.random() * 2,
      }))
    );
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        delay: i * 0.3,
        duration: 8 + Math.random() * 4,
        size: 1 + Math.random() * 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );


    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const timer = setInterval(() => {
      setTime(prev => prev + 1);
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    
    // Canvas animation for neural network
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const nodes: Array<{x: number, y: number, vx: number, vy: number}> = [];
        for (let i = 0; i < 50; i++) {
          nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
          });
        }

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
          ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
          
          // Update and draw nodes
          nodes.forEach((node, i) => {
            node.x += node.vx;
            node.y += node.vy;
            
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            
            // Draw connections
            nodes.forEach((otherNode, j) => {
              if (i !== j) {
                const dx = node.x - otherNode.x;
                const dy = node.y - otherNode.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                  ctx.beginPath();
                  ctx.moveTo(node.x, node.y);
                  ctx.lineTo(otherNode.x, otherNode.y);
                  ctx.stroke();
                }
              }
            });
            
            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
            ctx.fill();
          });
          
          requestAnimationFrame(animate);
        };
        animate();
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Neural Network Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
      />

      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950" />
        <div className="absolute inset-0 bg-cyber-grid opacity-20 animate-grid-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Dynamic Laser Grid */}
      <div className="absolute inset-0 overflow-hidden">
        {laserRows.map((row, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-laser-sweep opacity-30"
            style={{
              top: `${(i * 5) + 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${row.animationDuration}s`
            }}
          />
        ))}
        {laserCols.map((col, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-laser-sweep-vertical opacity-20"
            style={{
              left: `${(i * 6) + 5}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${col.animationDuration}s`
            }}
          />
        ))}
      </div>

      {/* Holographic Elements */}
      <HologramElement delay={0}>
        <div className="top-20 left-10">
          <Cpu className="w-16 h-16 text-cyan-400 animate-tech-spin" />
        </div>
      </HologramElement>
      
      <HologramElement delay={2}>
        <div className="top-32 right-20">
          <Database className="w-12 h-12 text-blue-400 animate-tech-pulse" />
        </div>
      </HologramElement>
      
      <HologramElement delay={4}>
        <div className="bottom-40 left-1/4">
          <Network className="w-14 h-14 text-emerald-400 animate-tech-rotate" />
        </div>
      </HologramElement>
      
      <HologramElement delay={6}>
        <div className="top-1/2 right-1/3">
          <Radar className="w-10 h-10 text-purple-400 animate-radar-sweep" />
        </div>
      </HologramElement>

    {/* Tech Particles */}
      {particles.map((p, i) => (
        <TechParticle
          key={i}
          delay={p.delay}
          duration={p.duration}
          size={p.size}
          left={p.left}
          top={p.top}
        />
      ))}

      {/* Circuit Lines */}
      {[...Array(10)].map((_, i) => (
        <CircuitLine key={i} delay={i * 0.8} />
      ))}

      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 animate-glitch-overlay opacity-5" />

{/*

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-matrix-rain opacity-20 text-green-400 font-mono text-xs"
            style={{
              left: `${i * 7}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {Array.from({ length: 20 }, (_, j) => (
              <div key={j} className="mb-2">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div> 
      
      
      */}

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-cyan-400 animate-scan-horizontal opacity-30" />
        <div className="absolute h-full w-px bg-cyan-400 animate-scan-vertical opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Holographic Badge */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-950 to-cyan-950 text-cyan-300 hover:from-cyan-700 hover:to-blue-700 border border-cyan-500/50 text-sm px-6 py-3 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm animate-hologram-badge">
              <Terminal className="w-4 h-4 mr-2 animate-tech-pulse" />
              🚀 NEURAL THREAT DETECTION v2.0 DEPLOYED
            </Badge>
          </div>

          {/* Cyberpunk Headline */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className="text-4xl sm:text-6xl lg:text-4xl font-bold mb-8 leading-tight">
              <span className="block mb-4 text-white animate-glitch-text">TRACK EVERY
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent animate-neon-glow text-shadow-neon"> DIGITAL PULSE
                </span>
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-4xl mt-6 text-gray-300 animate-tech-fade-in font-mono">
                &gt; DETECT_EVERY_THREATS()
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-4xl mt-6 text-gray-300 animate-tech-fade-in font-mono">
                Grow Your Business Faster.
              </span>
            </h3>
          </div>

          {/* Tech Subtitle */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 text-gray-300 leading-relaxed font-mono animate-tech-type">
              <span className="text-cyan-400">[AI ENGINE ACTIVE]</span> Advanced AI is now watching. <br />
              <span className="text-blue-400">[SCANNING]</span> every user, every click, every threat. <br /> 
              <span className="text-purple-400">[SECURING]</span> Your digital ecosystem — in real time. <br />
               All in one simple, powerful dashboard.
            </p>
          </div>

          {/* Futuristic CTA Buttons */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                asChild 
                size="lg" 
                className="text-lg px-6 py-3 h-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-2xl shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 group animate-tech-button border border-cyan-400/50 backdrop-blur-sm"
              >
                <Link href="#" className="flex items-center gap-3 font-mono">
                  <Binary className="w-3 h-3 animate-tech-spin" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform animate-tech-arrow" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-6 h-auto border-2 border-cyan-400/50 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 group backdrop-blur-sm text-cyan-300 hover:text-cyan-200 animate-tech-button-outline"
              >
                <Link href="#" className="flex items-center gap-3 font-mono">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform animate-tech-pulse" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Holographic Stats */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              {statsData.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl shadow-cyan-500/10 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/60 animate-hologram-card hover:shadow-cyan-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 animate-tech-shimmer" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-3">
                        <stat.icon className="w-8 h-8 text-cyan-400 animate-tech-icon" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2 animate-counter-glow font-mono">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 font-mono">
                        {stat.label}
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Trust Indicators */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-300 transition-colors duration-300 animate-tech-badge font-mono">
                  <badge.icon className="w-4 h-4 text-cyan-400 animate-tech-pulse" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cyberpunk Social Proof */}
          <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mt-16 pt-8 border-t border-cyan-500/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 font-mono">
                <div className="flex items-center gap-2 animate-tech-social">
                  <Users className="w-4 h-4 animate-tech-pulse" />
                  <span>500+ SYSTEMS_SECURED</span>
                </div>
                <div className="hidden sm:block w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <div className="flex items-center gap-2 animate-tech-social">
                  <Star className="w-4 h-4 fill-cyan-400 text-cyan-400 animate-tech-twinkle" />
                  <span>4.9/5 THREAT_DETECTION_SCORE</span>
                </div>
                <div className="hidden sm:block w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <div className="flex items-center gap-2 animate-tech-social">
                  <TrendingUp className="w-4 h-4 text-cyan-400 animate-tech-trend" />
                  <span>200% EFFICIENCY_BOOST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};