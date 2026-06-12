import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function BuiltForEA() {
  return (
    <section id="infrastructure" className="py-32 bg-[#0D1A12] border-b border-brand-grove/30 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-grove/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Engineered for<br/>East Africa.</h2>
            <p className="text-lg lg:text-xl text-brand-moss max-w-md">
              A foundational identity and transaction layer built specifically for the operational realities of the region.
            </p>
          </div>
          <div className="flex gap-8 lg:gap-12 lg:justify-end pb-2 overflow-hidden flex-wrap">
            <div>
              <div className="text-3xl lg:text-4xl font-serif text-brand-highlight mb-2">Uganda</div>
              <div className="text-[10px] text-brand-highlight uppercase tracking-[0.2em] font-bold">Launch Node</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-serif text-white mb-2">Kenya</div>
              <div className="text-[10px] text-brand-moss uppercase tracking-[0.2em] font-bold">Expansion Net</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
