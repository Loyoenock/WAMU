import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Minus, Plus } from 'lucide-react';
import { FOCUS_RING_LIGHT, WAMU_PHONE_LINK, WAMU_WHATSAPP_NUMBER, waLink } from '../lib/siteConfig';

const FAQ_ITEMS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'What is WAMU?',
    a: 'WAMU (meaning “together” or “in one” in Luganda) is a WhatsApp-first financial services platform designed to bring everyday payments, personal and group savings, SACCO coordination, and event collections together in one familiar conversation.',
  },
  {
    q: 'How does WAMU work through WhatsApp?',
    a: 'You interact with WAMU Pay directly inside a WhatsApp chat. Guided menus let you pick what you need, enter or verify account details, review a clear summary, and receive confirmation messages inside the same conversation.',
  },
  {
    q: 'Do I need to download a separate application?',
    a: 'No. Everything is built to happen inside WhatsApp on the smartphone you already use, so there is no separate banking or group app to install.',
  },
  {
    q: 'What financial services are available through WAMU?',
    a: 'Everyday utility payments (UEDCL electricity, NWSC water and MTN/Airtel airtime) are set to launch by the second week of December. Alongside that launch, we are polishing personal and group savings, VSLA and SACCO coordination, and community event collections.',
  },
  {
    q: 'Can groups and SACCOs use WAMU?',
    a: 'Yes. We are currently polishing WAMU’s tools for VSLAs, SACCOs, merry-go-round circles, cooperatives, NGOs and community event collections ahead of rollout.',
  },
  {
    q: 'Can I pay utility bills through WAMU?',
    a: 'Yes. Everyday utility payments—including UEDCL electricity, NWSC water and MTN/Airtel airtime—are set to launch by the second week of December inside WAMU Pay’s WhatsApp flow.',
  },
  {
    q: 'How are transaction confirmations handled?',
    a: 'Before you approve an activity, WAMU displays a summary for you to review. Once completed, a clear confirmation message and reference receipt are delivered directly inside your WhatsApp conversation.',
  },
  {
    q: 'What happens if a transaction fails?',
    a: 'If a payment or request cannot be completed, you receive clear feedback in the WhatsApp chat so you know the status of the attempt and can retry or reach our support team without guesswork.',
  },
  {
    q: 'How can I get assistance?',
    a: (
      <>
        You can message WAMU directly on WhatsApp at{' '}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold text-[#0F6E56] underline underline-offset-2 hover:text-[#1D9E75] ${FOCUS_RING_LIGHT} rounded-sm`}
        >
          {WAMU_WHATSAPP_NUMBER}
        </a>
        , call{' '}
        <a
          href={WAMU_PHONE_LINK}
          className={`font-semibold text-[#0F6E56] underline underline-offset-2 hover:text-[#1D9E75] ${FOCUS_RING_LIGHT} rounded-sm`}
        >
          {WAMU_WHATSAPP_NUMBER}
        </a>
        , or use the{' '}
        <a
          href="#contact"
          className={`font-semibold text-[#0F6E56] underline underline-offset-2 hover:text-[#1D9E75] ${FOCUS_RING_LIGHT} rounded-sm`}
        >
          contact form below
        </a>{' '}
        to reach our team.
      </>
    ),
  },
];

export function FAQAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[#FFFFFF] px-4 py-14 min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1040px] 2xl:max-w-[1140px]">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-[540px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F6E56] sm:text-[11.5px]">
              NEED TO KNOW MORE?
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-[#0D1A12] min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
            >
              Frequently asked questions.
            </h2>
          </div>
          <a
            href="/faq"
            className={`inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0F6E56] hover:text-[#1D9E75] ${FOCUS_RING_LIGHT}`}
          >
            <span>Open full FAQ page</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Accessible Accordion Stack */}
        <div className="mt-8 divide-y divide-[#C3E8D6] rounded-[20px] border border-[#C3E8D6] bg-[#F7FAF8] sm:mt-10">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const btnId = `faq-trigger-${idx}`;
            return (
              <div key={item.q} className="px-4 py-4 min-[375px]:px-6 sm:px-8 sm:py-5">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className={`flex w-full items-center justify-between gap-3 text-left font-editorial text-[16.5px]/[24px] font-semibold text-[#0D1A12] transition-colors hover:text-[#0F6E56] min-[375px]:text-[18px]/[26px] ${FOCUS_RING_LIGHT} rounded-md`}
                  >
                    <span>{item.q}</span>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C3E8D6] bg-white text-[#0F6E56]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="mt-3 pr-2 text-[14.5px]/[23px] text-[#2D4A38] sm:pr-10 sm:text-[15px]/[24px]"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Supporting Authentic Human Photograph Frame */}
        <div className="mt-10 grid items-center gap-6 rounded-[24px] border border-[#C3E8D6] bg-[#EBF6F0] p-4 min-[375px]:p-6 sm:mt-12 sm:gap-8 sm:p-8 md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[18px] border border-[#C3E8D6] bg-[#0D1A12]">
            <img
              src="/images/how-it-works.webp"
              alt="A Ugandan customer using a smartphone at a local Mobile Money stall"
              width={1408}
              height={768}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-[220px] w-full object-cover min-[375px]:h-[250px] sm:h-[300px] lg:h-[320px]"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#0F6E56]">
              BUILT FOR EVERYDAY CONTEXTS
            </p>
            <h3 className="font-editorial text-[24px]/[31px] font-bold text-[#0D1A12]">
              Designed around how people already transact across Uganda.
            </h3>
            <p className="text-[14.5px]/[23px] text-[#2D4A38]">
              Whether settling utility bills on the go or keeping a savings group aligned, WAMU works
              inside the WhatsApp conversations communities already trust.
            </p>
            <a
              href={waLink('Hi WAMU, I have a question about how it works.')}
              target="_blank"
              rel="noopener noreferrer"
              className={`wamu-magie-btn-light group mt-1 inline-flex w-fit items-center gap-2.5 py-1.5 pl-5 pr-1.5 text-[14px] font-semibold hover:scale-[1.02] sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 ${FOCUS_RING_LIGHT}`}
            >
              <span>Ask a question on WhatsApp</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5]">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
