import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WaMark } from './WaMark';

const chips = [
  { label: 'MTN MoMo', dot: '#FFC403' },
  { label: 'Airtel Money', dot: '#ED1D24' },
  { label: 'Utilities first', dot: '#25D366' },
];

const USE_CASES = [
  { label: 'Airtime & Voice', href: '#utilities' },
  { label: 'Internet & Data', href: '#utilities' },
  { label: 'Electricity', href: '#utilities' },
  { label: 'Water', href: '#utilities' },
  { label: 'Taxes', href: '#utilities' },
  { label: 'Pay TV', href: '#utilities' },
  { label: 'Savings & groups', href: '#savings-and-groups' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FDFAF4] px-6 md:px-12 lg:px-20 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-[124px] lg:pb-[64px]">
      <WaMark tone="light" className="left-[30px] top-[96px] h-[92px] w-[92px] -z-0" />
      <WaMark tone="light" className="right-[24px] bottom-[48px] h-[104px] w-[104px] -z-0" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Copy */}
        <div className="flex w-full max-w-[660px] flex-col items-start gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#1A4029]">
            UTILITY PAYMENTS &amp; GROUP SAVINGS
          </p>

          <h1 className="flex flex-col font-[Fraunces,ui-serif,Georgia,serif] font-bold text-[34px]/[38px] md:text-[46px]/[50px] lg:text-[58px]/[64px]">
            <span className="text-[#0D2016]">Everyday payments,</span>
            <span className="text-[#1A4029] lg:leading-[61px]">right in WhatsApp.</span>
          </h1>

          <p className="max-w-[520px] text-[16px]/[26px] text-[#3C5A48]">
            Start with utilities, then manage the savings goals and groups that matter to you.
          </p>

          <div className="flex flex-wrap gap-[10px]">
            {chips.map((c) => (
              <span
                key={c.label}
                className="flex items-center gap-[7px] rounded-[20px] bg-[#0D2016] px-[14px] py-[7px] outline outline-1 -outline-offset-1 outline-[#1A4029]"
              >
                <span
                  className="h-[7px] w-[7px] shrink-0 rounded-full"
                  style={{ backgroundColor: c.dot }}
                  aria-hidden="true"
                />
                <span className="text-[12px] font-medium text-[#F7F4EE]">{c.label}</span>
              </span>
            ))}
            <span className="flex items-center gap-[7px] rounded-[20px] bg-[#0D2016] px-[14px] py-[7px] outline outline-1 -outline-offset-1 outline-[#1A4029]">
              <ShieldCheck className="w-[13px] shrink-0" style={{ color: '#D4A017' }} aria-hidden="true" />
              <span className="text-[12px] font-medium text-[#F7F4EE]">No app needed</span>
            </span>
          </div>

          <a
            href="#utilities"
            className="mt-1 inline-flex items-center gap-[10px] rounded-[8px] bg-[#1A4029] px-[32px] py-[17px] text-[15px] font-bold text-[#FDFAF4] transition-[background-color,transform] duration-200 hover:bg-[#0D2016] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366]" />
            Explore utilities
          </a>
        </div>

        {/* Photo */}
        <div className="relative aspect-[580/560] w-full max-w-[580px] shrink-0 overflow-hidden rounded-[24px] lg:h-[560px] lg:w-[580px]">
          <img
            src="/images/hero.webp"
            alt="A Ugandan savings group meeting"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[252px]"
            style={{ backgroundImage: 'linear-gradient(180deg, #0D201600 0%, #0D201680 100%)' }}
            aria-hidden="true"
          />
          <div className="absolute bottom-[28px] left-[28px] flex items-center gap-[8px] rounded-[8px] bg-[#D4A017] px-[16px] py-[10px]">
            <Check className="h-[14px] w-[14px] shrink-0 text-[#0C1E12]" strokeWidth={3} aria-hidden="true" />
            <span className="text-[12px] font-semibold text-[#0C1E12]">
              VSLAs, SACCOs, weddings &amp; funerals
            </span>
          </div>
        </div>
      </div>

      {/* Use-case strip: every group and occasion WAMU runs, one tap from the fold. */}
      <div className="relative mx-auto mt-12 flex max-w-[1280px] flex-col gap-[14px] border-t border-[#E8E2D8] pt-8 lg:mt-14 lg:flex-row lg:items-center lg:gap-[20px]">
        <span className="shrink-0 text-[11px] font-bold uppercase tracking-[2px] text-[#4B6A58]">
          EXPLORE WAMU
        </span>
        <div className="flex flex-row flex-wrap gap-[10px]">
          {USE_CASES.map((u) => (
            <a
              key={u.label}
              href={u.href}
              className="rounded-[20px] bg-[#F7F4EE] px-[16px] py-[8px] text-[13px] font-medium text-[#1A4029] outline outline-1 -outline-offset-1 outline-[#E8E2D8] transition-colors duration-200 hover:bg-[#EDF5EF] hover:outline-[#1A4029] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2"
            >
              {u.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
