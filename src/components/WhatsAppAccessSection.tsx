import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FOCUS_RING_DARK, waLink } from '../lib/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export function WhatsAppAccessSection() {
  return (
    <section
      aria-labelledby="whatsapp-access-heading"
      className="relative overflow-hidden bg-[#0D1A12] px-4 py-14 text-white min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.22)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1060px] 2xl:max-w-[1180px]">
        <div className="mx-auto max-w-[660px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5DCAA5] sm:text-[11.5px]">
            YOUR FINANCIAL WORLD, MORE CONNECTED
          </p>
          <h2
            id="whatsapp-access-heading"
            className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-white min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
            style={{ textWrap: 'balance' }}
          >
            Your financial activities, closer through WhatsApp.
          </h2>
          <p className="mt-4 text-[15px]/[24px] text-[#C3E8D6] md:text-[16.5px]/[26px]">
            Discover a more familiar way to access payments, savings, group finance and other
            financial services through WAMU—with no separate app to download.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`wamu-magie-btn-dark group inline-flex w-fit items-center gap-2.5 whitespace-nowrap py-1.5 pl-5 pr-1.5 text-[14px] font-semibold hover:scale-[1.02] sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14.5px] ${FOCUS_RING_DARK}`}
            >
              <WhatsAppIcon className="h-4 w-4 text-[#5DCAA5]" />
              <span>Join WAMU</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] sm:h-10 sm:w-10">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
            <a
              href="#contact"
              className={`wamu-magie-btn-dark-secondary group inline-flex w-fit items-center gap-2.5 whitespace-nowrap py-1.5 pl-5 pr-1.5 text-[14px] font-semibold hover:scale-[1.02] sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14.5px] ${FOCUS_RING_DARK}`}
            >
              <span>Talk to Our Team</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#5DCAA5]/30 bg-[#1A4029] text-[#5DCAA5] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] group-hover:text-[#0D1A12] sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        {/* Prominent Dark WhatsApp Smartphone Visual (2-col balanced on Tablet Portrait, 3-col on Laptop/Desktop) */}
        <div className="mx-auto mt-12 grid max-w-[920px] items-center gap-5 rounded-[24px] border border-[#5DCAA5]/20 bg-gradient-to-b from-[#13291C] to-[#0A140E] p-4 min-[375px]:p-6 sm:mt-14 sm:rounded-[28px] sm:p-8 md:grid-cols-2 lg:max-w-[980px] lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:p-10">
          <div className="space-y-3 text-left lg:order-1">
            <div className="wamu-glass-dark rounded-[16px] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
                Payments
              </p>
              <p className="mt-1 text-[13.5px]/[20px] text-[#EBF6F0]">
                Electricity, water, airtime &amp; school fees in one chat thread.
              </p>
            </div>
            <div className="wamu-glass-dark rounded-[16px] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
                Savings
              </p>
              <p className="mt-1 text-[13.5px]/[20px] text-[#EBF6F0]">
                Personal &amp; community targets with automatic WhatsApp reminders.
              </p>
            </div>
          </div>

          <div className="mx-auto w-[220px] overflow-hidden rounded-[24px] border border-[#5DCAA5]/30 bg-[#0D1A12] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.75)] min-[375px]:w-[250px] md:order-3 md:col-span-2 lg:order-2 lg:col-span-1 lg:w-[260px] xl:w-[275px]">
            <img
              src="/images/wamu-feature-savings.webp"
              alt="WAMU Pay WhatsApp menu showing savings goals, active goals and payout accounts"
              width={300}
              height={450}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="space-y-3 text-left lg:order-3">
            <div className="wamu-glass-dark rounded-[16px] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
                Groups &amp; SACCOs
              </p>
              <p className="mt-1 text-[13.5px]/[20px] text-[#EBF6F0]">
                Transparent contributions, rotation tracking &amp; share ledgers.
              </p>
            </div>
            <div className="wamu-glass-dark rounded-[16px] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
                Financial Services
              </p>
              <p className="mt-1 text-[13.5px]/[20px] text-[#EBF6F0]">
                Insurance inquiries, loans &amp; investment options through WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
