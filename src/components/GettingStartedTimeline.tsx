import React from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare, ListChecks } from 'lucide-react';
import { FOCUS_RING_DARK, WAMU_WHATSAPP_NUMBER, waLink } from '../lib/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export function GettingStartedTimeline() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="getting-started-heading"
      className="relative overflow-hidden bg-[#0D1A12] px-4 py-14 text-white min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-28"
    >
      {/* Subtle radial canopy glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[540px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(15,110,86,0.22)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[920px] 2xl:max-w-[1000px]">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5DCAA5] sm:text-[11.5px]">
            GETTING STARTED
          </p>
          <h2
            id="getting-started-heading"
            className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-white min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
            style={{ textWrap: 'balance' }}
          >
            It&apos;s simple to get started with WAMU.
          </h2>
          <p className="mt-3 text-[15px]/[24px] text-[#C3E8D6] md:text-[16.5px]/[26px]">
            Access relevant financial services through a familiar WhatsApp conversation.
          </p>
          <div className="mt-7">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`wamu-magie-btn-dark group inline-flex w-fit items-center gap-2.5 py-1.5 pl-5 pr-1.5 text-[14px] font-semibold hover:scale-[1.02] sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14.5px] ${FOCUS_RING_DARK}`}
            >
              <WhatsAppIcon className="h-4 w-4 text-[#5DCAA5]" />
              <span>Start on WhatsApp</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5]">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        {/* Vertically Connected 3-Step Timeline */}
        <div className="relative mx-auto mt-12 max-w-[660px] pl-10 min-[375px]:pl-11 sm:mt-14 sm:pl-14">
          {/* Vertical connecting spine */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[15px] top-6 w-px bg-gradient-to-b from-[#5DCAA5] via-[#1D9E75]/60 to-[#5DCAA5]/20 min-[375px]:left-[17px] sm:left-[19px]"
          />

          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Step 01 */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#5DCAA5]/60 bg-[#0D1A12] text-[11px] font-bold text-[#5DCAA5] shadow-[0_0_0_4px_#0D1A12] min-[375px]:-left-11 sm:-left-14 sm:h-10 sm:w-10 sm:text-[12px]"
              >
                01
              </span>
              <article className="rounded-[20px] border border-[#5DCAA5]/25 bg-[#12261B]/90 p-5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.65)] transition-colors hover:border-[#5DCAA5]/50 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#5DCAA5]">
                    Step 01
                  </span>
                  <MessageSquare className="h-4 w-4 text-[#5DCAA5]" aria-hidden="true" />
                </div>
                <h3 className="mt-2 font-editorial text-[21px]/[28px] font-bold text-white">
                  Start a conversation
                </h3>
                <p className="mt-2 text-[14.5px]/[22px] text-[#C3E8D6]">
                  Message WAMU Pay directly on WhatsApp at{' '}
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold text-[#5DCAA5] underline underline-offset-2 hover:text-white ${FOCUS_RING_DARK} rounded-sm`}
                  >
                    {WAMU_WHATSAPP_NUMBER}
                  </a>
                  —no separate app to install or new account workflow to learn.
                </p>

                {/* Mini WhatsApp Opening Chat Preview */}
                <div className="mt-4 space-y-2 rounded-[14px] border border-white/10 bg-[#0B1710] p-3.5 text-[12.5px]">
                  <div className="flex justify-end">
                    <span className="rounded-[12px] rounded-tr-[3px] bg-[#1A4029] px-3 py-1.5 text-[#F7FAF8]">
                      Hello WAMU.
                    </span>
                  </div>
                  <div className="flex justify-start">
                    <span className="rounded-[12px] rounded-tl-[3px] border border-white/10 bg-[#13261B] px-3 py-1.5 text-[#C3E8D6]">
                      Welcome! How can we help you today?
                    </span>
                  </div>
                </div>
              </article>
            </div>

            {/* Step 02 */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#5DCAA5]/60 bg-[#0D1A12] text-[11px] font-bold text-[#5DCAA5] shadow-[0_0_0_4px_#0D1A12] min-[375px]:-left-11 sm:-left-14 sm:h-10 sm:w-10 sm:text-[12px]"
              >
                02
              </span>
              <article className="rounded-[20px] border border-[#5DCAA5]/25 bg-[#12261B]/90 p-5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.65)] transition-colors hover:border-[#5DCAA5]/50 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#5DCAA5]">
                    Step 02
                  </span>
                  <ListChecks className="h-4 w-4 text-[#5DCAA5]" aria-hidden="true" />
                </div>
                <h3 className="mt-2 font-editorial text-[21px]/[28px] font-bold text-white">
                  Choose your service
                </h3>
                <p className="mt-2 text-[14.5px]/[22px] text-[#C3E8D6]">
                  Select what you need from WAMU&apos;s guided WhatsApp menu—whether paying a bill, saving, or coordinating a group.
                </p>

                {/* Mini Service Selection Preview */}
                <div className="mt-4 rounded-[14px] border border-white/10 bg-[#0B1710] p-3.5 text-[12px] text-[#EBF6F0]">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9FBEAA]">
                    WAMU Pay Options
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Pay a bill',
                      'Buy airtime',
                      'Manage savings',
                      'Group contributions',
                      'Explore financial services',
                    ].map((opt, idx) => (
                      <span
                        key={opt}
                        className={`rounded-md border px-2.5 py-1 ${
                          idx === 0
                            ? 'border-[#5DCAA5]/60 bg-[#1A4029] text-white'
                            : 'border-white/10 bg-[#13261B] text-[#C3E8D6]'
                        }`}
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            {/* Step 03 */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#5DCAA5]/60 bg-[#1D9E75] text-[11px] font-bold text-white shadow-[0_0_0_4px_#0D1A12] min-[375px]:-left-11 sm:-left-14 sm:h-10 sm:w-10 sm:text-[12px]"
              >
                03
              </span>
              <article className="rounded-[20px] border border-[#5DCAA5]/35 bg-[#12261B]/90 p-5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.65)] transition-colors hover:border-[#5DCAA5]/60 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#5DCAA5]">
                    Step 03
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-[#5DCAA5]" aria-hidden="true" />
                </div>
                <h3 className="mt-2 font-editorial text-[21px]/[28px] font-bold text-white">
                  Complete your activity
                </h3>
                <p className="mt-2 text-[14.5px]/[22px] text-[#C3E8D6]">
                  Review the summary details, approve via Mobile Money where required, and receive confirmation in chat.
                </p>

                {/* Mini Summary & Confirmation Preview */}
                <div className="mt-4 rounded-[14px] border border-[#5DCAA5]/25 bg-[#0B1710] p-3.5 text-[12px]">
                  <div className="flex items-center justify-between text-[#C3E8D6]">
                    <span>Transaction summary reviewed</span>
                    <span className="font-semibold text-[#5DCAA5]">Confirmed</span>
                  </div>
                  <p className="mt-1.5 text-[#9FBEAA]">
                    Digital receipt and updated record saved inside your conversation.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
