import React from 'react';

interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    num: '01',
    title: 'Choose',
    description:
      'Pick the utility, savings group contribution, or community goal you need directly from the WAMU WhatsApp menu.',
  },
  {
    num: '02',
    title: 'Confirm',
    description:
      'Review the meter or account details, recipient name, and exact amount in the chat before approving anything.',
  },
  {
    num: '03',
    title: 'Pay',
    description:
      'Approve the MTN MoMo or Airtel Money prompt on your phone—no app switching or manual account numbers.',
  },
  {
    num: '04',
    title: 'Track',
    description:
      'Receive your instant receipt or token in WhatsApp while group ledgers and collection totals update automatically.',
  },
];

export function WamuNumberedProcess() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="wamu-process-heading"
      className="relative overflow-hidden border-y border-[#C3E8D6]/80 bg-[#E0F3E8] px-6 py-16 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-[560px]">
            <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
              HOW IT WORKS
            </span>
            <h2
              id="wamu-process-heading"
              className="mt-2.5 font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[36px] font-bold tracking-[-0.015em] text-[#0D2016] md:text-[40px]/[46px]"
            >
              Four simple steps inside WhatsApp.
            </h2>
          </div>
          <p className="max-w-[400px] text-[15px]/[24px] text-[#2D4A38] md:text-[16px]/[26px]">
            From everyday bills to group contributions, every transaction follows the same clear, verifiable flow.
          </p>
        </div>

        {/* 4-Step Numbered Grid (Magie-inspired clean numbered layout with desktop progression rail) */}
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Subtle desktop horizontal progression cue behind the 4 cards */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-12 right-12 top-[56px] hidden h-px bg-gradient-to-r from-[#5DCAA5]/20 via-[#1D9E75]/35 to-[#5DCAA5]/20 lg:block"
          />

          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.num}
              className="group relative z-10 flex flex-col justify-between rounded-[20px] border border-white/85 bg-[#F4FBF7]/90 p-7 shadow-[0_12px_28px_-10px_rgba(13,32,22,0.08),0_2px_8px_-2px_rgba(13,32,22,0.04),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#5DCAA5]/75 hover:bg-white hover:shadow-[0_18px_36px_-12px_rgba(13,32,22,0.14)]"
            >
              <div>
                {/* Top Hairline & Large Bold Number */}
                <div className="flex items-baseline justify-between border-b border-[#C3E8D6] pb-5 transition-colors duration-200 group-hover:border-[#5DCAA5]/75">
                  <span className="font-[Fraunces,ui-serif,Georgia,serif] text-[52px]/[52px] font-bold tracking-[-0.03em] text-[#1D9E75] transition-colors duration-200 group-hover:text-[#0B6B45] md:text-[58px]/[58px]">
                    {step.num}
                  </span>
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    {index < PROCESS_STEPS.length - 1 && (
                      <span className="hidden h-px w-5 bg-[#C3E8D6] transition-all duration-200 group-hover:w-7 group-hover:bg-[#5DCAA5] lg:inline-block" />
                    )}
                    <span className="h-2 w-2 rounded-full bg-[#5DCAA5] transition-transform duration-200 group-hover:scale-125 group-hover:bg-[#0B6B45]" />
                  </div>
                </div>

                {/* Clear Title Under Number */}
                <h3 className="mt-6 font-[Fraunces,ui-serif,Georgia,serif] text-[19px]/[25px] font-bold tracking-[-0.01em] text-[#0D2016] md:text-[22px]/[28px]">
                  {step.title}
                </h3>

                {/* Short Supporting Text */}
                <p className="mt-2.5 text-[14px]/[22px] text-[#2D4A38]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
