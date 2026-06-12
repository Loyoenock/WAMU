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
    <section id="ecosystem" className="py-24 bg-[#0A140F] border-b border-brand-grove/30 relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(to right, #2D4A38 1px, transparent 1px), linear-gradient(to bottom, #2D4A38 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-serif text-4xl text-white mb-6">Connecting the Ecosystem</h2>
        <p className="text-xl text-brand-moss max-w-2xl mx-auto mb-20">
          We do not replace the players; we connect them. WAMU acts as the universal translator between fragmented institutional APIs and human conversation.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
            {nodes.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0D1A12] border border-brand-grove/50 p-6 flex flex-col items-center justify-center text-center h-32 hover:border-brand-highlight transition-colors group"
              >
                <span className="font-bold tracking-tight text-brand-mist group-hover:text-white transition-colors">{node}</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-moss mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Integrated</span>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-0 opacity-20 hidden md:block">
            <svg className="w-full h-full" overflow="visible">
               <line x1="12.5%" y1="50%" x2="50%" y2="50%" stroke="currentColor" className="text-brand-highlight" strokeWidth="1" />
               <line x1="37.5%" y1="50%" x2="50%" y2="50%" stroke="currentColor" className="text-brand-highlight" strokeWidth="1" />
               <line x1="62.5%" y1="50%" x2="50%" y2="50%" stroke="currentColor" className="text-brand-highlight" strokeWidth="1" />
               <line x1="87.5%" y1="50%" x2="50%" y2="50%" stroke="currentColor" className="text-brand-highlight" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-20 h-20 bg-brand-primary border-4 border-[#0D1A12] shadow-xl shadow-brand-highlight/20">
             <span className="font-serif text-white font-bold tracking-wider">WAMU</span>
          </div>

        </div>
      </div>
    </section>
  );
}
