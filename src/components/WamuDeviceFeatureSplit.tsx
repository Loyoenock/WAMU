import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const HIGHLIGHTS = [
  'Instant UEDCL token & NWSC water receipts in chat',
  'Automated VSLA, SACCO & merry-go-round ledgers',
  'Direct MTN MoMo & Airtel Money mobile prompts',
];

export function WamuDeviceFeatureSplit() {
  return (
    <section
      aria-labelledby="wamu-device-split-heading"
      className="relative overflow-hidden bg-[#D9F0E3] px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      {/* Subtle ambient light diffusion behind the split layout */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#5DCAA5]/25 blur-[90px]"
      />

      <div className="relative z-[1] mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Side: Clean Text Content (Headline + Short Description + Highlights + CTA) */}
        <div className="flex flex-col items-start lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/75 bg-[#F4FBF7]/85 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.8px] text-[#0F6E56] shadow-[0_4px_12px_-4px_rgba(27,67,50,0.08)] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#1D9E75]" aria-hidden="true" />
            WHATSAPP-FIRST FINTECH
          </span>

          <h2
            id="wamu-device-split-heading"
            className="mt-5 font-[Fraunces,ui-serif,Georgia,serif] text-[32px]/[38px] font-bold text-[#0D2016] md:text-[42px]/[48px] lg:text-[46px]/[52px]"
          >
            Pay utilities and run your savings group from one chat.
          </h2>

          <p className="mt-4 max-w-[520px] text-[16px]/[26px] text-[#1B4332]">
            No new app to download and no paper ledger to reconcile. Whether you are clearing an
            electricity bill in seconds or collecting monthly SACCO contributions, WAMU handles the
            math, reminders, and receipts right inside WhatsApp.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[14.5px] font-medium text-[#0D2016]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B6B45]/12 text-[#0B6B45]">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/256788003344"
              className="wamu-nav-cta-btn inline-flex items-center gap-2.5 rounded-full bg-[#0B6B45] px-7 py-4 text-[15px] font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] text-white" />
              Start on WhatsApp
            </a>
            <a
              href="#how-it-works"
              className="wamu-liquid-btn-light inline-flex items-center rounded-full px-6 py-4 text-[14.5px] font-semibold text-[#0D2016] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] focus-visible:ring-offset-2"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Right Side: High-Quality Smartphone Mockup with Realistic Depth & Soft Multi-Layer Shadow */}
        <div className="relative flex items-center justify-center lg:col-span-6">
          {/* Soft pedestals & ambient depth rings */}
          <div className="relative flex w-full max-w-[520px] items-center justify-center rounded-[32px] border border-white/75 bg-gradient-to-br from-[#F4FBF7]/90 via-[#E5F6EC]/75 to-[#C8E6C9]/65 p-6 shadow-[0_28px_60px_-18px_rgba(27,67,50,0.16),0_10px_24px_-8px_rgba(27,67,50,0.08),inset_0_1.5px_0_rgba(255,255,255,0.92)] backdrop-blur-xl sm:p-10">
            {/* Inner soft mint glow behind phone */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-10 rounded-full bg-[#1D9E75]/18 blur-[48px]"
            />

            {/* Smartphone Device Frame with Realistic Depth & Multi-Layer Drop Shadow */}
            <div className="relative z-[1] w-[280px] sm:w-[308px] rounded-[36px] bg-[#0D2016] p-2.5 shadow-[0_34px_68px_-16px_rgba(13,32,22,0.42),0_14px_28px_-8px_rgba(13,32,22,0.26),inset_0_1px_1px_rgba(255,255,255,0.28)]">
              <div className="overflow-hidden rounded-[28px] bg-[#ECE5DD]">
                <img
                  src="/images/wamu-feature-savings.webp"
                  alt="Smartphone displaying a WAMU Pay WhatsApp conversation for utilities and group savings"
                  width={300}
                  height={450}
                  loading="lazy"
                  className="block h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Subtle Floating Frosted-Glass Status Card overlapping bottom-left of device stage */}
            <div className="wamu-status-bubble absolute bottom-5 left-4 z-[2] hidden max-w-[215px] items-center gap-3 px-4 py-3 sm:flex">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B6B45] text-white">
                <CheckCircle2 className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0F6E56]">
                  LIVE LEDGER
                </span>
                <span className="text-[12.5px] font-semibold text-[#0D2016]">
                  Updated in real time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
