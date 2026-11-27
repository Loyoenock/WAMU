import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Users } from 'lucide-react';
import { FOCUS_RING_LIGHT } from '../lib/siteConfig';
import { AirtelBadge, MtnBadge, NwscBadge, UedclBadge } from './PaymentBrandBadges';

interface ExperienceSlide {
  audience: string;
  context: string;
  headline: string;
  summary: string;
}

const EXPERIENCE_SCENARIOS: ExperienceSlide[] = [
  {
    audience: 'Individuals & Households',
    context: 'Utility & Airtime Flow',
    headline: 'Settling electricity, water and airtime without leaving WhatsApp.',
    summary:
      'Enter your UEDCL meter, NWSC reference or phone number directly in chat, review the confirmation summary, and keep every receipt in one conversation.',
  },
  {
    audience: 'Savings Groups & SACCOs',
    context: 'Shared Group Ledgers',
    headline: 'Replacing manual notebooks with records every member can check.',
    summary:
      'VSLAs, SACCOs and merry-go-rounds track contributions, rotation turns and share capital transparently without waiting for a physical meeting.',
  },
  {
    audience: 'Community Collections',
    context: 'Weddings, Funerals & Events',
    headline: 'Running group contributions with automatic reminders and accountability.',
    summary:
      'Track pledges against payments, send gentle WhatsApp reminders to members who have not yet contributed, and keep totals visible to the whole committee.',
  },
  {
    audience: 'SMEs, NGOs & Organisations',
    context: 'Connected Operations',
    headline: 'One familiar communication channel for payments, collections and group coordination.',
    summary:
      'From everyday utility payments to mobile money collections and group records, WAMU connects everyday operations into one cohesive WhatsApp experience.',
  },
];

export function TrustExperienceSection() {
  const [active, setActive] = useState(0);
  const current = EXPERIENCE_SCENARIOS[active];

  const prev = () => setActive((i) => (i - 1 + EXPERIENCE_SCENARIOS.length) % EXPERIENCE_SCENARIOS.length);
  const next = () => setActive((i) => (i + 1) % EXPERIENCE_SCENARIOS.length);

  return (
    <section
      id="security"
      aria-labelledby="trust-experience-heading"
      className="border-y border-[#C3E8D6]/70 bg-[#F7FAF8] px-4 py-14 min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1120px] 2xl:max-w-[1260px]">
        {/* Supported Payment Rails & Everyday Services Strip (verified channels only, no fabricated logos) */}
        <div className="flex flex-col items-center gap-4 border-b border-[#C3E8D6] pb-10 sm:pb-12">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5A7A68] sm:text-[11.5px] sm:tracking-[0.16em]">
            SUPPORTED PAYMENT RAILS &amp; EVERYDAY SERVICES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-2 rounded-xl border border-[#C3E8D6] bg-white px-3 py-2 text-[12.5px] font-semibold text-[#0D1A12] sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-[13.5px]">
              <MtnBadge size="sm" />
              <span>MTN Mobile Money</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[#C3E8D6] bg-white px-3 py-2 text-[12.5px] font-semibold text-[#0D1A12] sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-[13.5px]">
              <AirtelBadge size="sm" />
              <span>Airtel Money</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[#C3E8D6] bg-white px-3 py-2 text-[12.5px] font-semibold text-[#0D1A12] sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-[13.5px]">
              <UedclBadge size="sm" />
              <span>UEDCL Electricity</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[#C3E8D6] bg-white px-3 py-2 text-[12.5px] font-semibold text-[#0D1A12] sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-[13.5px]">
              <NwscBadge size="sm" />
              <span>NWSC Water</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-[#C3E8D6] bg-white px-3 py-2 text-[12.5px] font-semibold text-[#0D1A12] sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-[13.5px]">
              <Users className="h-4 w-4 text-[#0F6E56]" aria-hidden="true" />
              <span>VSLAs &amp; SACCOs</span>
            </div>
          </div>
        </div>

        {/* Non-Testimonial Product Experience Area (preserving Finanex Section 09 composition honestly) */}
        <div className="mt-10 sm:mt-14">
          <div className="max-w-[620px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F6E56] sm:text-[11.5px]">
              BUILT AROUND CONNECTED EXPERIENCES
            </p>
            <h2
              id="trust-experience-heading"
              className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-[#0D1A12] min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
              style={{ textWrap: 'balance' }}
            >
              Financial services should feel simple and accessible.
            </h2>
          </div>

          <div className="mt-8 rounded-[20px] border border-[#C3E8D6] bg-white p-5 shadow-[0_14px_34px_-14px_rgba(13,26,18,0.08)] min-[375px]:p-6 sm:mt-10 sm:rounded-[24px] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EBF6F0] pb-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EBF6F0] text-[#0F6E56]">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[15px] font-bold text-[#0D1A12]">{current.audience}</p>
                  <p className="text-[12.5px] text-[#5A7A68]">{current.context}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {EXPERIENCE_SCENARIOS.map((s, idx) => (
                  <button
                    key={s.audience}
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`View experience ${idx + 1}: ${s.audience}`}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === active ? 'w-7 bg-[#0F6E56]' : 'w-2.5 bg-[#C3E8D6] hover:bg-[#5DCAA5]'
                    } ${FOCUS_RING_LIGHT}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-editorial text-[22px]/[30px] font-bold text-[#0D1A12] md:text-[26px]/[34px]">
                &ldquo;{current.headline}&rdquo;
              </h3>
              <p className="mt-3 max-w-[68ch] text-[15px]/[25px] text-[#2D4A38]">
                {current.summary}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 sm:mt-8">
              <p className="text-[12px] font-medium text-[#5A7A68]">
                Illustrative WAMU product experience · {active + 1} of {EXPERIENCE_SCENARIOS.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous experience"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#C3E8D6] bg-[#F7FAF8] text-[#0D1A12] transition-colors hover:border-[#0F6E56] hover:bg-[#EBF6F0] ${FOCUS_RING_LIGHT}`}
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next experience"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#C3E8D6] bg-[#F7FAF8] text-[#0D1A12] transition-colors hover:border-[#0F6E56] hover:bg-[#EBF6F0] ${FOCUS_RING_LIGHT}`}
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
