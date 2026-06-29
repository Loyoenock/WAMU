import React from 'react';
import { motion } from 'motion/react';
import { Share2 } from 'lucide-react';

export function Ecosystem() {
  const nodes = [
    "MTN Mobile Money",
    "Airtel Money",
    "NSSF Uganda",
    "NWSC",
    "UMEME",
    "Insurance Underwriters",
    "Savings Groups",
    "Farmers Cooperatives"
  ];

  return (
    <section id="ecosystem" className="py-24 bg-brand-light-2 border-b border-brand-grove/30 relative">
      <div className="absolute inset-0 bg-pattern-dots opacity-80 pointer-events-none" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(to right, #2D4A38 1px, transparent 1px), linear-gradient(to bottom, #2D4A38 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-serif text-4xl text-brand-text-dark mb-6">Connecting the Ecosystem</h2>
        <p className="text-xl text-brand-primary max-w-2xl mx-auto mb-20">
          We do not replace the players; we connect them. WAMU acts as the universal translator between fragmented institutional APIs and human conversation.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { 
                opacity: 1, 
                transition: { 
                  staggerChildren: 0.1 
                } 
              },
              hidden: { 
                opacity: 0 
              }
            }}
          >
            {nodes.map((node, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                }}
                className="bg-brand-highlight border border-brand-grove/20 p-6 flex flex-col items-center justify-center text-center h-32 hover:bg-brand-light-1 transition-all group cursor-none shadow-[0_0_15px_rgba(93,202,165,0.2)]"
              >
                <span className="text-lg md:text-xl font-bold tracking-tight text-brand-light-1 group-hover:text-brand-text-dark/80 transition-colors">{node}</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-text-dark/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Integrated</span>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-0 opacity-20 hidden md:block">
            <svg className="w-full h-full" overflow="visible" aria-hidden="true">
               <line x1="12.5%" y1="50%" x2="50%" y2="50%" stroke="currentColor" className="text-brand-primary" strokeWidth="1" />
               <line x1="37.5%" y1="50%" x2="50%" y2="50%" stroke="currentColor" className="text-brand-primary" strokeWidth="1" />
               <line x1="62.5%" y1="50%" x2="50%" y2="50%" stroke="currentColor" className="text-brand-primary" strokeWidth="1" />
               <line x1="87.5%" y1="50%" x2="50%" y2="50%" stroke="currentColor" className="text-brand-primary" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-20 h-20 bg-brand-logo-bg border-4 border-brand-light-2 shadow-xl shadow-brand-highlight/20">
             <span className="font-serif text-white font-bold tracking-wider">WAMU</span>
          </div>

        </div>
      </div>
    </section>
  );
}
