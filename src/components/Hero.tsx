import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
              <span className="w-2 h-2 rounded-full bg-brand-highlight"></span> East African Financial OS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] font-serif text-white mb-6 md:pr-10">
              Orchestrating the future of informal finance.
            </h1>
            <p className="text-base md:text-lg text-brand-moss leading-relaxed mb-8 md:mb-10 max-w-lg">
              WAMU is the intelligent infrastructure layer sitting atop existing mobile money rails. WhatsApp-native financial coordination for savings clubs, insurance, and utilities. No apps, no friction, absolute trust.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a 
                href="#wishlist" 
                onClick={(e) => smoothScroll(e, 'wishlist')}
                className="bg-brand-highlight hover:bg-brand-mist text-brand-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center group rounded-none shadow-[0_0_15px_rgba(93,202,165,0.2)] whitespace-nowrap"
              >
                Join Wishlist
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#platform" 
                onClick={(e) => smoothScroll(e, 'platform')}
                className="bg-transparent border border-brand-grove text-brand-moss hover:border-brand-highlight hover:text-brand-highlight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center rounded-none whitespace-nowrap"
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
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', damping: 20 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center z-20 shadow-lg shadow-brand-primary/50"
                >
                  <span className="font-serif text-white font-bold tracking-widest">WAMU</span>
                </motion.div>

                {/* Orbiting Elements */}
                {[
                  { label: "Mobile Money", color: "bg-yellow-500", angle: 0 },
                  { label: "WhatsApp", color: "bg-green-500", angle: 72 },
                  { label: "Insurance", color: "bg-blue-500", angle: 144 },
                  { label: "Savings Clubs", color: "bg-brand-highlight", angle: 216 },
                  { label: "Utilities", color: "bg-purple-500", angle: 288 },
                ].map((node, i) => (
                  <div
                    key={node.label}
                    className="absolute top-1/2 left-1/2 z-10"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateY(-140px) rotate(-${node.angle}deg)`,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className={`w-3 h-3 rounded-full ${node.color}`} />
                      <span className="text-xs text-brand-mist uppercase tracking-wider font-mono opacity-80 backdrop-blur px-2 py-1 bg-white/5 rounded whitespace-nowrap whitespace-nowrap">
                        {node.label}
                      </span>
                    </motion.div>
                  </div>
                ))}

                {/* Connecting Lines (Svg) */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" style={{ transformOrigin: 'center' }}>
                  <circle cx="50%" cy="50%" r="140" className="stroke-brand-grove/40 stroke-1 fill-none" />
                  <circle cx="50%" cy="50%" r="140" className="stroke-brand-highlight/20 stroke-[3] fill-none" strokeDasharray="4 20" />
                </svg>
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
