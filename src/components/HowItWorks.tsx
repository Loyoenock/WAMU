import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareText, Cpu, CheckCircle2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquareText,
      title: "Natural Language Input",
      description: "A group member sends a simple text or voice note in WhatsApp. E.g., 'I am sending my 50k weekly contribution.'",
    },
    {
      icon: Cpu,
      title: "Contextual Intelligence",
      description: "WAMU parses the entity, intent, and amount. It bridges the request to the underlying mobile money USSD gateway programmatically.",
    },
    {
      icon: CheckCircle2,
      title: "Automated Reconciliation",
      description: "The transaction executes securely. WAMU immediately updates the group ledger and broadcasts a digital receipt back to the chat.",
    }
  ];

  return (
    <section className="py-32 bg-brand-logo-bg border-b border-brand-grove/30 relative">
      {/* Add subtle background pattern overlay if desired, or keep it clean. We'll use a subtle pattern */}
      <div className="absolute inset-0 bg-pattern-lines mix-blend-multiply opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="font-serif text-4xl text-white mb-6">Invisible Infrastructure.</h2>
          <p className="text-xl text-brand-mist">
            No downloads. No passwords. No learning curve. We handle the complexity of distributed ledgers and mobile network operator APIs behind a conversational interface.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-brand-highlight/20 z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-brand-grove/80 backdrop-blur-sm border border-brand-moss flex items-center justify-center mb-8 relative transition-colors group-hover:border-brand-highlight">
                  <step.icon className="w-8 h-8 text-brand-highlight group-hover:text-brand-highlight transition-colors" strokeWidth={1.5} aria-hidden="true" />
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-brand-light-1 text-brand-logo-bg text-[10px] font-bold flex items-center justify-center">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-brand-mist leading-relaxed max-w-xs text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
