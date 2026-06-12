import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function WhyDifferent() {
  const comparison = [
    { feature: "App Download Required", wamu: false, traditional: true },
    { feature: "Account Creation & Passwords", wamu: false, traditional: true },
    { feature: "Operates Native in WhatsApp", wamu: true, traditional: false },
    { feature: "Voice Note Parsing Support", wamu: true, traditional: false },
    { feature: "Local Language Processing", wamu: true, traditional: false },
    { feature: "Mobile Money Abstraction Layer", wamu: true, traditional: false },
    { feature: "Automated Shared Ledgers", wamu: true, traditional: false },
  ];

  return (
    <section className="py-24 bg-[#0A140F] border-b border-brand-grove/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">A Paradigm Shift</h2>
          <p className="text-brand-moss">Why the app-centric model fails informal finance, and why WAMU succeeds.</p>
        </div>

        <div className="bg-[#0D1A12] border border-brand-grove/50 overflow-x-auto">
          <div className="min-w-[500px]">
            <div className="grid grid-cols-12 border-b border-brand-grove/50 bg-[#0A140F]">
              <div className="col-span-6 md:col-span-6 p-4 md:p-6 font-medium text-brand-moss uppercase tracking-widest text-xs">Capability</div>
              <div className="col-span-3 md:col-span-3 p-4 md:p-6 font-medium text-brand-highlight text-center uppercase tracking-widest text-[10px] border-l border-brand-grove/50 bg-brand-primary/10">WAMU</div>
              <div className="col-span-3 md:col-span-3 p-4 md:p-6 font-medium text-brand-moss text-center uppercase tracking-widest text-[10px] border-l border-brand-grove/50">Traditional Apps</div>
            </div>

            {comparison.map((row, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="grid grid-cols-12 border-b border-brand-grove/20 last:border-0 hover:bg-[#0A140F] transition-colors"
              >
                <div className="col-span-6 md:col-span-6 p-4 md:p-6 flex items-center">
                  <span className="text-brand-mist font-medium text-sm md:text-base">{row.feature}</span>
                </div>
                <div className="col-span-3 md:col-span-3 p-4 md:p-6 flex items-center justify-center border-l border-brand-grove/20 bg-brand-primary/5">
                  {row.wamu ? <Check className="text-brand-highlight w-5 h-5" /> : <X className="text-brand-grove w-5 h-5" />}
                </div>
                <div className="col-span-3 md:col-span-3 p-4 md:p-6 flex items-center justify-center border-l border-brand-grove/20">
                  {row.traditional ? <Check className="text-brand-moss w-5 h-5" /> : <X className="text-brand-grove w-5 h-5" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
