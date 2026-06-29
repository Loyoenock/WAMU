import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Smartphone, MessageCircle, Shield, Users, Zap } from 'lucide-react';

export function Hero() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize mouse position between -1 and 1
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleHeroMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;

      constructor() {
        const width = canvas.width;
        const height = canvas.height;
        let x = 0;
        let y = 0;
        let accepted = false;
        const maxMinDistToEdge = Math.min(width / 2, height / 2);

        while (!accepted) {
          x = Math.random() * width;
          y = Math.random() * height;
          const minDistX = Math.min(x, width - x);
          const minDistY = Math.min(y, height - y);
          const minDistToEdge = Math.min(minDistX, minDistY);
          const normalizedEdgeDist = 1 - (minDistToEdge / maxMinDistToEdge);

          if (Math.random() < Math.pow(normalizedEdgeDist, 4) + 0.02) {
            accepted = true;
          }
        }

        this.x = x;
        this.y = y;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.density = (Math.random() * 30) + 1;
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 150;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = '#0B6B45';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 5000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ecosystemNodes = [
    { label: "Mobile Money", textColor: "text-yellow-500", bg: "bg-yellow-500", border: "border-yellow-500/30", icon: Smartphone, angle: 0, description: "Programmatic USSD parsing for instant funds movement." },
    { label: "WhatsApp", textColor: "text-green-500", bg: "bg-green-500", border: "border-green-500/30", icon: MessageCircle, angle: 72, description: "Frictionless financial interactions natively embedded in chat." },
    { label: "Insurance", textColor: "text-blue-500", bg: "bg-blue-500", border: "border-blue-500/30", icon: Shield, angle: 144, description: "Automated claims and micro-premiums with zero paperwork." },
    { label: "Savings Clubs", textColor: "text-teal-500", bg: "bg-teal-500", border: "border-teal-500/30", icon: Users, angle: 216, description: "Transparent, real-time shared ledgers for community capital." },
    { label: "Utilities", textColor: "text-purple-500", bg: "bg-purple-500", border: "border-purple-500/30", icon: Zap, angle: 288, description: "Unified programmable abstraction layer for instant settlement." },
  ];

  return (
    <section 
      className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden border-b border-brand-grove/30"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-light-1 via-[#e4f2eb] to-[#c5e0d4] -z-20"></div>
      <div className="absolute inset-0 bg-pattern-lines mix-blend-multiply opacity-50 -z-10"></div>
      <div className="absolute inset-0 opacity-20 -z-10" style={{ backgroundImage: "radial-gradient(#2D4A38 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.8 }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 text-brand-primary font-semibold text-sm uppercase tracking-widest">
              <motion.span 
                className="w-2 h-2 rounded-full bg-brand-highlight"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              /> East African Financial OS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-serif text-brand-text-dark mb-6 md:pr-10">
              Orchestrating the future of informal finance.
            </h1>
            <p className="text-base md:text-lg text-brand-primary leading-relaxed mb-8 md:mb-10 max-w-lg">
              WAMU is the intelligent infrastructure layer sitting atop existing mobile money rails. WhatsApp-native financial coordination for savings clubs, insurance, and utilities. No apps, no friction, absolute trust.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a 
                id="hero-wishlist-link"
                href="#wishlist" 
                onClick={(e) => smoothScroll(e, 'wishlist')}
                className="bg-brand-highlight hover:bg-brand-mist text-brand-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center group rounded-none shadow-[0_0_15px_rgba(93,202,165,0.2)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mist focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light-1"
              >
                Join Wishlist
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a 
                id="hero-explore-link"
                href="#platform" 
                onClick={(e) => smoothScroll(e, 'platform')}
                className="bg-transparent border border-brand-grove text-brand-primary hover:border-brand-primary hover:text-brand-text-dark px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center rounded-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light-1"
              >
                Explore WAMU
              </a>
            </div>
          </div>

          {/* Abstract Ecosystem Visualization instead of Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative h-[500px] w-full hidden md:block lg:col-span-5"
          >
            <div className="absolute inset-0 bg-brand-light-2 bg-pattern-dots rounded-2xl overflow-hidden p-8 shadow-2xl flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto">
                {/* Connecting Lines */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none z-0" viewBox="-150 -150 300 300">
                  <g className="text-brand-highlight stroke-current" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
                    {ecosystemNodes.map((node, i) => {
                      const nextNode = ecosystemNodes[(i + 1) % ecosystemNodes.length];
                      
                      const getX = (angle: number) => Math.sin(angle * Math.PI / 180) * 140;
                      const getY = (angle: number) => -Math.cos(angle * Math.PI / 180) * 140;
                      
                      return (
                        <React.Fragment key={`line-${i}`}>
                          <line x1="0" y1="0" x2={getX(node.angle)} y2={getY(node.angle)} />
                          <line x1={getX(node.angle)} y1={getY(node.angle)} x2={getX(nextNode.angle)} y2={getY(nextNode.angle)} />
                        </React.Fragment>
                      );
                    })}
                  </g>
                </svg>

                {/* Center Node representing WAMU */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    style={{
                      x: useTransform(springX, [-1, 1], [-15, 15]),
                      y: useTransform(springY, [-1, 1], [-15, 15]),
                    }}
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: hoveredNode ? 0.8 : 1,
                        opacity: hoveredNode ? 0 : 1,
                        y: hoveredNode ? 0 : [0, -8, 0]
                      }}
                      transition={{ 
                        scale: { duration: 0.3, type: hoveredNode ? 'tween' : 'spring', damping: 20 },
                        opacity: { duration: 0.3 },
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                      }}
                      className="w-[68px] h-[68px] bg-brand-primary rounded-full flex items-center justify-center shadow-lg shadow-brand-primary/50 hover:shadow-[0_0_25px_rgba(15,110,86,0.6)] transition-shadow duration-300 overflow-hidden cursor-pointer"
                    >
                      <img src="/wamu-logo-v1.png" alt="WAMU Logo" className="w-full h-full object-cover rounded-[100%]" fetchPriority="high" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Orbiting Elements */}
                {ecosystemNodes.map((node, i) => (
                  <button
                    key={node.label}
                    id={`hero-ecosystem-node-${i}`}
                    type="button"
                    aria-label={`View details for ${node.label}`}
                    aria-expanded={hoveredNode === node.label}
                    className="absolute top-1/2 left-1/2 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-brand-light-1 rounded-2xl"
                    onMouseEnter={() => setHoveredNode(node.label)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onFocus={() => setHoveredNode(node.label)}
                    onBlur={() => setHoveredNode(null)}
                    style={{
                      transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateY(-140px) rotate(-${node.angle}deg)`,
                      perspective: "1000px"
                    }}
                  >
                    <motion.div
                      style={{
                        x: useTransform(springX, [-1, 1], [-25 + i * 3, 25 - i * 3]),
                        y: useTransform(springY, [-1, 1], [-25 + i * 3, 25 - i * 3]),
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: hoveredNode === null || hoveredNode === node.label ? 1 : 0.1,
                          scale: hoveredNode === node.label ? 1.15 : 1
                        }}
                        transition={{ 
                          opacity: { duration: 0.3 },
                          scale: { duration: 0.3 },
                          default: { delay: 0.8 + i * 0.1, duration: 0.6 }
                        }}
                        className="flex flex-col items-center gap-3 transition-transform"
                        aria-hidden="true"
                      >
                        <motion.div
                          animate={hoveredNode === node.label ? { y: 0 } : { y: [0, -10, 0] }}
                          transition={{ 
                            repeat: hoveredNode === node.label ? 0 : Infinity, 
                            duration: 3.5 + (i * 0.5), 
                            ease: "easeInOut" 
                          }}
                          className={`p-4 rounded-2xl ${node.bg} backdrop-blur-xl border ${node.border} flex items-center justify-center relative overflow-hidden`}
                          style={{
                            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 10px 20px rgba(0,0,0,0.3)',
                          }}
                        >
                          {/* 3D Glass shine effect */}
                          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
                          
                          <node.icon 
                            className={`w-9 h-9 text-white relative z-10`} 
                            strokeWidth={hoveredNode === node.label ? 2 : 1.5} 
                            style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.4))' }}
                          />
                        </motion.div>
                        <span className={`text-sm text-brand-text-dark bg-brand-light-1/90 uppercase tracking-widest font-mono backdrop-blur-md px-3 py-1.5 border border-brand-primary/20 rounded shadow-lg whitespace-nowrap transition-all duration-300 ${hoveredNode ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                          {node.label}
                        </span>
                      </motion.div>
                    </motion.div>
                  </button>
                ))}

                {/* Connecting Lines (Svg) */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" style={{ transformOrigin: 'center' }} aria-hidden="true">
                  <circle cx="50%" cy="50%" r="140" className="stroke-brand-grove/40 stroke-1 fill-none" />
                  <circle cx="50%" cy="50%" r="140" className="stroke-brand-highlight/20 stroke-[3] fill-none" strokeDasharray="4 20" />
                </svg>

                {/* Hover Description Popup */}
                <motion.div
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                  initial={false}
                  animate={{ 
                    opacity: hoveredNode ? 1 : 0, 
                    scale: hoveredNode ? 1 : 0.9,
                    pointerEvents: hoveredNode ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] p-6 bg-brand-light-1 bg-pattern-lines/90 backdrop-blur-md rounded-2xl border border-white/10 text-center z-40 shadow-2xl flex flex-col items-center justify-center"
                >
                  {hoveredNode && (
                    <>
                      <h3 className={`text-base font-bold tracking-wider uppercase mb-2 ${ecosystemNodes.find(n => n.label === hoveredNode)?.textColor}`}>
                        {hoveredNode}
                      </h3>
                      <p className="text-brand-grove text-sm leading-relaxed max-w-[240px] mx-auto">
                        {ecosystemNodes.find(n => n.label === hoveredNode)?.description}
                      </p>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
            {/* Architectural Grid Background */}
            <div className="absolute -inset-10 -z-10 bg-[linear-gradient(to_right,#0F6E5611_1px,transparent_1px),linear-gradient(to_bottom,#0F6E5611_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
