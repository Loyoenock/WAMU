import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Network, ShieldCheck, Receipt, Landmark, RefreshCw } from 'lucide-react';

const capabilities = [
  {
    id: "savings",
    title: "Savings Groups",
    icon: Network,
    description: "Digitize Chamas and VSLAs instantly. WAMU acts as the automated treasurer, coordinating contributions, calculating dividends, and enforcing lending rules directly in your existing WhatsApp group.",
    stat: "100% automated ledgers"
  },
  {
    id: "insurance",
    title: "Motor & Health Insurance",
    icon: ShieldCheck,
    description: "Purchase, renew, and coordinate micro-insurance via conversational agents. We interface with underwriters to instantly issue certificates in WhatsApp, minimizing lapse rates.",
    stat: "Instant digital certificates"
  },
  {
    id: "bills",
    title: "Utility Payments",
    icon: Receipt,
    description: "Pay water and electricity bills without USSD menus. Just send a text with the meter number. WAMU processes the transaction against your mobile wallet and replies with the token.",
    stat: "Voice & text enabled"
  },
  {
    id: "nssf",
    title: "NSSF Contributions",
    icon: Landmark,
    description: "Bridge the gap between informal workers and state social security. Submit NSSF savings natively through WhatsApp snippets, generating verifiable contribution receipts.",
    stat: "Direct institutional integration"
  },
  {
    id: "transfers",
    title: "Coordinated Transfers",
    icon: RefreshCw,
    description: "Route money efficiently across networks (MTN, Airtel) for group events, welfare, or family support. WAMU monitors fulfillment and updates shared ledgers in real-time.",
    stat: "Cross-network interoperability"
  }
];

export function WhatChanges() {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);

  return (
    <section className="py-24 bg-[#0D1A12] border-b border-brand-grove/30 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="mb-4 inline-flex items-center gap-2 text-brand-highlight font-semibold text-sm uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-highlight"></span> Dynamic Connectivity
            </div>
            <h2 className="font-serif text-4xl mb-8 leading-tight text-white">
              A unified intelligence layer over fragmented rails.
            </h2>
            <div className="space-y-0 border-y border-brand-grove/30" role="tablist" aria-label="WAMU Capabilities">
              {capabilities.map((cap) => (
                <button
                  key={cap.id}
                  id={`tab-${cap.id}`}
                  role="tab"
                  aria-selected={activeTab === cap.id}
                  aria-controls={`panel-${cap.id}`}
                  onClick={() => setActiveTab(cap.id)}
                  className={cn(
                    "w-full text-left px-4 py-6 transition-all duration-300 flex items-center justify-between group rounded-none border-b border-brand-grove/30 last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-highlight",
                    activeTab === cap.id 
                      ? "bg-brand-grove/10" 
                      : "text-brand-moss hover:text-white hover:bg-brand-mist/5"
                  )}
                >
                  <span className="text-sm uppercase tracking-widest font-bold font-sans">{cap.title}</span>
                  <cap.icon 
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      activeTab === cap.id ? "text-brand-highlight" : "text-brand-moss group-hover:text-brand-mist -rotate-12"
                    )} 
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0A140F] border border-brand-grove/30 p-8 md:p-12 min-h-[400px] flex items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[60px] md:blur-[100px] pointer-events-none transform-gpu will-change-transform" aria-hidden="true" />
            
            <AnimatePresence mode="wait">
              {capabilities.map((cap) => 
                activeTab === cap.id && (
                  <motion.div
                    key={cap.id}
                    id={`panel-${cap.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${cap.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 w-full"
                  >
                    <div className="inline-flex items-center space-x-2 bg-brand-grove/20 border border-brand-grove/50 px-3 py-1 mb-6 text-brand-highlight text-xs font-mono tracking-[0.1em] uppercase">
                      <span className="w-1.5 h-1.5 bg-brand-highlight rounded-full animate-pulse" />
                      <span>{cap.stat}</span>
                    </div>
                    
                    <h3 className="text-3xl font-serif text-white mb-6">
                      {cap.title}
                    </h3>
                    <p className="text-lg text-brand-moss leading-relaxed max-w-xl">
                      {cap.description}
                    </p>
                    
                    {/* Simulated Abstract UI line for visual anchor */}
                    <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-brand-grove to-transparent relative">
                      <motion.div 
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-[2px] bg-brand-highlight shadow-[0_0_10px_2px_#5DCAA5]"
                      />
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
