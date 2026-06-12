import React from 'react';
import { motion } from 'motion/react';

export function Roadmap() {
  const timeline = [
    {
      period: "Phase 1 / Active",
      title: "Uganda Launch & Chamas",
      description: "Establishing base infrastructure in Uganda. Focus on digitizing internal ledgers for Village Savings and Loan Associations (VSLAs) and informal investment clubs via WhatsApp."
    },
    {
      period: "Phase 2",
      title: "Automated Fulfillment",
      description: "Direct MTN Mobile Money integration. Moving from manual ledger logging to direct programmatic movement of funds within WhatsApp channels."
    },
    {
      period: "Phase 3",
      title: "Insurance & Institutional APIs",
      description: "Onboarding motor, medical, and agricultural insurance underwriters. Enabling direct premium payments and NSSF welfare contributions via conversational flows."
    },
    {
      period: "Phase 4",
      title: "Regional Expansion",
      description: "Expanding the agent network protocol into Kenya (M-Pesa) and surrounding East African corridors, creating cross-border informal finance interoperability."
    }
  ];

  return (
    <section className="py-24 bg-[#0A140F] border-b border-brand-grove/30 relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#2D4A38 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-16 text-center">Development Roadmap</h2>
        
        <div className="relative border-l border-brand-grove pl-8 space-y-16">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              <div className="absolute -left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-brand-primary border-4 border-[#0A140F] box-content transition-colors group-hover:bg-brand-highlight" />
              <div className="text-[10px] font-bold tracking-[0.2em] text-brand-highlight uppercase mb-2">{item.period}</div>
              <h3 className="text-2xl font-serif text-white mb-3">{item.title}</h3>
              <p className="text-brand-moss leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
