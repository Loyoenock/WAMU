import React from 'react';

export function StatementSection() {
  return (
    <section
      aria-label="WAMU Statement"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#E0F5E9] to-[#C8E6C9] px-6 py-28 md:px-12 md:py-40 lg:px-20 lg:py-48"
    >
      {/* Subtle deep-forest micro-dot background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(#0F6E56 0.85px, transparent 0.85px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-[1] mx-auto flex max-w-[980px] items-center justify-center">
        <h2 className="text-center font-[Fraunces,ui-serif,Georgia,serif] text-[36px]/[44px] font-bold tracking-[-0.02em] text-[#0D2016] sm:text-[48px]/[56px] md:text-[60px]/[68px] lg:text-[72px]/[80px]">
          Savings groups run on trust.
          <span className="mt-1 block text-[#1B4332]">Not systems.</span>
        </h2>
      </div>
    </section>
  );
}
