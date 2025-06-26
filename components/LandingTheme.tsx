"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  Cpu,
  Database,
  Network,
  Radar,
} from "lucide-react";


// Enhanced TechParticle with more dynamic effects
const TechParticle = ({
  delay = 0,
  duration = 10,
  size = 2,
  left = 0,
  top = 0,
  color = 'bg-cyan-400',
}: { 
  delay?: number; 
  duration?: number; 
  size?: number; 
  left?: number; 
  top?: number;
  color?: string;
}) => (
  <div 
    className="absolute animate-tech-particle opacity-60"
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      left: `${left}%`,
      top: `${top}%`,
    }}
  >
    <div 
      className={`${color} rounded-full animate-pulse-tech shadow-cyan-glow`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  </div>
);

// Enhanced CircuitLine with better flow animation
const CircuitLine = ({ delay = 0, position = 'left-10' }: { delay?: number; position?: string }) => (
  <div 
    className={`absolute ${position} animate-circuit-flow opacity-40`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-px h-40 bg-gradient-to-b from-transparent via-cyan-400 via-blue-400 to-transparent animate-data-flow shadow-cyan-glow" />
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

export function LandingTheme({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const [laserRows, setLaserRows] = useState<{animationDuration: number}[]>([]);
  const [laserCols, setLaserCols] = useState<{animationDuration: number}[]>([]);
  const [particles, setParticles] = useState<
    { delay: number; duration: number; size: number; left: number; top: number; color: string }[]
  >([]);



  useEffect(() => {
    // Enhanced laser grid with more variety
    setLaserRows(
      Array.from({ length: 25 }, () => ({
        animationDuration: 4 + Math.random() * 4,
      }))
    );
    setLaserCols(
      Array.from({ length: 20 }, () => ({
        animationDuration: 5 + Math.random() * 3,
      }))
    );

     // Enhanced particles with color variety
    const colors = ['bg-cyan-400', 'bg-blue-400', 'bg-emerald-400', 'bg-purple-400', 'bg-pink-400'];
    setParticles(
      Array.from({ length: 300 }, (_, i) => ({
        delay: i * 0.05,
        duration: 10 + Math.random() * 6,
        size: 1 + Math.random() * 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
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

    // Enhanced Neural Network Canvas with better performance
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        const nodes: Array<{x: number, y: number, vx: number, vy: number, connections: number[]}> = [];
        const nodeCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 12000));
        
        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            connections: [],
          });
        }

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Update node positions
          nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges with slight randomization
            if (node.x < 0 || node.x > canvas.width) {
              node.vx *= -1;
              node.vx += (Math.random() - 0.5) * 0.1;
            }
            if (node.y < 0 || node.y > canvas.height) {
              node.vy *= -1;
              node.vy += (Math.random() - 0.5) * 0.1;
            }
            
            // Keep nodes in bounds
            node.x = Math.max(0, Math.min(canvas.width, node.x));
            node.y = Math.max(0, Math.min(canvas.height, node.y));
          });

          // Enhanced connection drawing with gradient effects
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
          ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
          ctx.lineWidth = 1;
          
          // Draw connections with distance-based opacity
          nodes.forEach((node, i) => {
            nodes.forEach((otherNode, j) => {
              if (i >= j) return;
              
              const dx = node.x - otherNode.x;
              const dy = node.y - otherNode.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 140) {
                const opacity = (140 - distance) / 140;
                const gradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y);
                gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity * 0.3})`);
                gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.2})`);
                gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity * 0.3})`);
                
                ctx.strokeStyle = gradient;
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(otherNode.x, otherNode.y);
                ctx.stroke();
              }
            });
            
            // Enhanced node drawing with glow effect
            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 4);
            gradient.addColorStop(0, 'rgba(6, 182, 212, 0.8)');
            gradient.addColorStop(1, 'rgba(6, 182, 212, 0.2)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
            ctx.fill();
          });
          
          animationRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
          window.removeEventListener('resize', resizeCanvas);
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        };
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
    {/* Enhanced Neural Network Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 opacity-30 animate-neural-pulse"
        style={{ zIndex: 1 }}
      />


      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950" />
        <div className="absolute inset-0 bg-cyber-grid opacity-20 animate-grid-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Mouse-following gradient effect */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20 transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 3,
        }}
      />

      {/* Enhanced Dynamic Laser Grid */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 4 }}>
        {laserRows.map((row, i) => (
          <div
            key={`row-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 via-blue-400 to-transparent animate-laser-sweep opacity-40 shadow-cyan-glow"
            style={{
              top: `${(i * 4) + 5}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${row.animationDuration}s`
            }}
          />
        ))}
        {laserCols.map((col, i) => (
          <div
            key={`col-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 via-purple-400 to-transparent animate-laser-sweep-vertical opacity-25 shadow-blue-glow"
            style={{
              left: `${(i * 5) + 2}%`,
              animationDelay: `${i * 0.4}s`,
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

 {/* Enhanced Tech Particles */}
      <div className="absolute inset-0" style={{ zIndex: 6 }}>
        {particles.map((p, i) => (
          <TechParticle
            key={i}
            delay={p.delay}
            duration={p.duration}
            size={p.size}
            left={p.left}
            top={p.top}
            color={p.color}
          />
        ))}
      </div>

      {/* Enhanced Circuit Lines */}
      <div className="absolute inset-0" style={{ zIndex: 7 }}>
        {[...Array(15)].map((_, i) => (
          <CircuitLine 
            key={i} 
            delay={i * 0.6} 
            position={`${i % 2 === 0 ? 'left' : 'right'}-${10 + (i * 5)}%`}
          />
        ))}
      </div>

      {/* Enhanced Glitch Effect Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none animate-glitch-overlay"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255, 0, 255, 0.1) 50%, transparent 70%)',
          zIndex: 8,
        }}
      />

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-px bg-cyan-400 animate-scan-horizontal opacity-30" />
        <div className="absolute h-full w-px bg-cyan-400 animate-scan-vertical opacity-20" />
      </div>

            {/* Additional atmospheric effects */}
      <div className="absolute inset-0" style={{ zIndex: 10 }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse" />
      </div>

      {/* Render children inside the theme */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}