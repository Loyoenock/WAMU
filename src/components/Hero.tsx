import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Smartphone, MessageCircle, Shield, Users, Zap } from 'lucide-react';

export function Hero() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ecosystemNodes = [
    { label: "Mobile Money", textColor: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30", icon: Smartphone, angle: 0, description: "Programmatic USSD parsing for instant funds movement." },
    { label: "WhatsApp", textColor: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30", icon: MessageCircle, angle: 72, description: "Frictionless financial interactions natively embedded in chat." },
    { label: "Insurance", textColor: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", icon: Shield, angle: 144, description: "Automated claims and micro-premiums with zero paperwork." },
    { label: "Savings Clubs", textColor: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/30", icon: Users, angle: 216, description: "Transparent, real-time shared ledgers for community capital." },
    { label: "Utilities", textColor: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", icon: Zap, angle: 288, description: "Unified programmable abstraction layer for instant settlement." },
  ];

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-[#0D1A12] border-b border-brand-grove/30">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#2D4A38 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-brand-highlight font-semibold text-sm uppercase tracking-widest">
              <motion.span 
                className="w-2 h-2 rounded-full bg-brand-highlight"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              /> East African Financial OS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-serif text-white mb-6 md:pr-10">
              Orchestrating the future of informal finance.
            </h1>
            <p className="text-base md:text-lg text-brand-moss leading-relaxed mb-8 md:mb-10 max-w-lg">
              WAMU is the intelligent infrastructure layer sitting atop existing mobile money rails. WhatsApp-native financial coordination for savings clubs, insurance, and utilities. No apps, no friction, absolute trust.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a 
                id="hero-wishlist-link"
                href="#wishlist" 
                onClick={(e) => smoothScroll(e, 'wishlist')}
                className="bg-brand-highlight hover:bg-brand-mist text-brand-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center group rounded-none shadow-[0_0_15px_rgba(93,202,165,0.2)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mist focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1A12]"
              >
                Join Wishlist
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a 
                id="hero-explore-link"
                href="#platform" 
                onClick={(e) => smoothScroll(e, 'platform')}
                className="bg-transparent border border-brand-grove text-brand-moss hover:border-brand-highlight hover:text-brand-highlight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center rounded-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1A12]"
              >
                Explore WAMU
              </a>
            </div>
          </motion.div>

          {/* Abstract Ecosystem Visualization instead of Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative h-[500px] w-full hidden md:block lg:col-span-5"
          >
            <div className="absolute inset-0 bg-brand-midnight rounded-2xl overflow-hidden p-8 shadow-2xl flex items-center justify-center">
              <div className="relative w-full h-full max-w-md mx-auto">
                {/* Center Node representing WAMU */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: hoveredNode ? 0.8 : 1,
                    opacity: hoveredNode ? 0 : 1
                  }}
                  transition={{ 
                    duration: 0.3,
                    type: hoveredNode ? 'tween' : 'spring',
                    damping: 20
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[68px] bg-brand-primary rounded-full flex items-center justify-center z-20 shadow-lg shadow-brand-primary/50 hover:shadow-[0_0_25px_rgba(15,110,86,0.6)] transition-shadow duration-300 overflow-hidden cursor-pointer"
                >
                  <img src="/wamu-logo-v1.png" alt="WAMU Logo" className="w-full h-full object-cover rounded-[100%]" />
                </motion.div>

                {/* Orbiting Elements */}
                {ecosystemNodes.map((node, i) => (
                  <button
                    key={node.label}
                    id={`hero-ecosystem-node-${i}`}
                    type="button"
                    aria-label={`View details for ${node.label}`}
                    aria-expanded={hoveredNode === node.label}
                    className="absolute top-1/2 left-1/2 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1A12] rounded-2xl"
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
                          className={`w-7 h-7 ${node.textColor} relative z-10`} 
                          strokeWidth={hoveredNode === node.label ? 2 : 1.5} 
                          style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.4))' }}
                        />
                      </motion.div>
                      <span className={`text-[10px] text-brand-mist/90 bg-brand-midnight/60 uppercase tracking-widest font-mono backdrop-blur-md px-3 py-1.5 border border-white/5 rounded shadow-lg whitespace-nowrap transition-all duration-300 ${hoveredNode ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                        {node.label}
                      </span>
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
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] p-4 bg-[#0D1A12]/90 backdrop-blur-md rounded-2xl border border-white/10 text-center z-40 shadow-2xl flex flex-col items-center justify-center"
                >
                  {hoveredNode && (
                    <>
                      <h3 className={`text-xs font-bold tracking-wider uppercase mb-2 ${ecosystemNodes.find(n => n.label === hoveredNode)?.textColor}`}>
                        {hoveredNode}
                      </h3>
                      <p className="text-brand-mist text-[10px] leading-relaxed max-w-[180px] mx-auto">
                        {ecosystemNodes.find(n => n.label === hoveredNode)?.description}
                      </p>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
            {/* Architectural Grid Background */}
            <div className="absolute -inset-10 -z-10 bg-[linear-gradient(to_right,#0D1A1208_1px,transparent_1px),linear-gradient(to_bottom,#0D1A1208_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
