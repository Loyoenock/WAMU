import React from 'react';
import { ArrowRight } from 'lucide-react';
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
              className={`wamu-btn-primary inline-flex items-center gap-2.5 whitespace-nowrap px-7 py-3.5 text-[14.5px] font-semibold ${FOCUS_RING_DARK}`}
            >
              <WhatsAppIcon className="h-[17px] w-[17px] text-white" />
              <span>Join WAMU</span>
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#5DCAA5]/35 bg-[#1A4029]/70 px-7 py-3.5 text-[14.5px] font-semibold text-[#EBF6F0] transition-colors hover:border-[#5DCAA5]/70 hover:bg-[#1A4029] ${FOCUS_RING_DARK}`}
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="h-4 w-4 text-[#5DCAA5]" aria-hidden="true" />
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
