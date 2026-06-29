import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, FolderOpen, Smartphone } from 'lucide-react';

const WHATSAPP_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

function WhatsAppAnimation() {
  const dotCount = 60;
  
  // Create static positions for dots to avoid hydration mismatch
  const dots = Array.from({ length: dotCount }).map((_, i) => {
    // Generate deterministic pseudo-random values based on index
    const seed1 = (i * 137.5) % 360;
    const seed2 = (i * 93.7) % 100;
    const seed3 = (i * 27.1) % 10;
    
    const angle = (seed1 * Math.PI) / 180;
    const dist = 80 + seed2;
    return {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      size: 2 + (seed3 / 10) * 3
    };
  });

  return (
    <div className="relative w-64 h-64 flex items-center justify-center scale-[1.3]">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute bg-brand-highlight rounded-full"
          style={{ width: dot.size, height: dot.size }}
          initial={{ x: dot.x, y: dot.y, opacity: 0 }}
          animate={{
            x: [dot.x, dot.x * 0.5, 0, 0, dot.x * 0.5, dot.x * 1.5],
            y: [dot.y, dot.y * 0.5, 0, 0, dot.y * 0.5, dot.y * 1.5],
            opacity: [0, 1, 0, 0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.125, 0.25, 0.75, 0.875, 1],
            delay: (i % 5) * 0.05 // subtle stagger
          }}
        />
      ))}
      <svg viewBox="0 0 24 24" className="w-32 h-32 absolute text-brand-highlight fill-transparent stroke-current" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d={WHATSAPP_PATH}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 0, 1, 1, 0, 0],
            opacity: [0, 0, 1, 1, 0, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.45, 0.6, 0.75, 1]
          }}
        />
      </svg>
    </div>
  );
}

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
    <section id="platform" className="py-24 bg-brand-logo-bg border-b border-brand-grove/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-pattern-lines opacity-40 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
          <div className="max-w-3xl lg:w-2/3">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-brand-highlight uppercase tracking-[0.25em] text-sm md:text-base font-bold mb-4"
            >
              The Reality Today
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-light-1 leading-tight font-medium"
            >
              Informal finance is the backbone of East Africa, yet the infrastructure is analog.
            </motion.h2>
          </div>
          <div className="lg:w-1/3 flex justify-center items-center h-64 w-full">
            <WhatsAppAnimation />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
              className="group border-t-2 border-brand-light-1/30 pt-8 hover:border-brand-highlight transition-colors flex flex-col"
            >
              <issue.icon className="w-10 h-10 md:w-12 md:h-12 text-brand-highlight mb-6" strokeWidth={2} aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-semibold text-brand-light-1 mb-4 tracking-tight leading-tight">{issue.title}</h3>
              <p className="text-brand-mist leading-relaxed text-lg md:text-xl font-medium">{issue.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
