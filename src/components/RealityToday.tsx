import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, FolderOpen, Smartphone } from 'lucide-react';

export function RealityToday() {
  const issues = [
    {
      icon: BookOpen,
      title: "Exercise Books & Pen",
      description: "Millions of savings groups rely on physical ledgers prone to damage, loss, and mathematical errors. Trust is bottlenecked by manual record keeping."
    },
    {
      icon: FolderOpen,
      title: "Fragmented Cash Boxes",
      description: "Communities pool physical cash, creating security risks and limiting the ability to instantly deploy funds to those in need or generate yield."
    },
    {
      icon: Smartphone,
      title: "Disconnected WhatsApp Sets",
      description: "Financial coordination happens in WhatsApp channels, but the actual money moves through disjointed USSD menus and siloed mobile wallets."
    }
  ];

  return (
    <section id="platform" className="py-24 bg-[#0A140F] border-b border-brand-grove/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-brand-highlight uppercase tracking-[0.2em] text-xs font-bold mb-4"
          >
            The Reality Today
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white leading-tight"
          >
            Informal finance is the backbone of East Africa, yet the infrastructure is analog.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
              className="group border-t border-brand-grove pt-6 hover:border-brand-highlight transition-colors flex flex-col"
            >
              <issue.icon className="w-8 h-8 text-brand-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-white mb-3 tracking-tight">{issue.title}</h3>
              <p className="text-brand-moss leading-relaxed text-sm md:text-base">{issue.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
