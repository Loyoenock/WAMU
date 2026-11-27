import React from 'react';
import { CreditCard, Layers } from 'lucide-react';
import { NwscBadge } from './PaymentBrandBadges';
import { IncomingBubble, OutgoingBubble, WhatsAppChatShell } from './WhatsAppMockups';

export function ConnectedExperienceSection() {
  return (
    <section
      aria-labelledby="connected-experience-heading"
      className="bg-[#FFFFFF] px-4 py-14 min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] 2xl:max-w-[1340px]">
        {/* Left-Aligned Header + Two Principal Feature Rows */}
        <div className="max-w-[660px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F6E56] sm:text-[11.5px]">
            A MORE CONNECTED EXPERIENCE
          </p>
          <h2
            id="connected-experience-heading"
            className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-[#0D1A12] min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
            style={{ textWrap: 'balance' }}
          >
            Everyday financial activities. One familiar conversation.
          </h2>
          <p className="mt-3 text-[15px]/[24px] text-[#2D4A38] md:text-[16.5px]/[26px]">
            Explore how WAMU brings different financial activities closer through WhatsApp.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-[#C3E8D6] bg-[#EBF6F0] text-[#0F6E56]">
                <CreditCard className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-editorial text-[19px]/[25px] font-bold text-[#0D1A12]">
                  Everyday payments
                </h3>
                <p className="mt-1 text-[14.5px]/[23px] text-[#2D4A38]">
                  Access supported payment services, including electricity, water and airtime,
                  through WAMU&apos;s WhatsApp-first experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-[#C3E8D6] bg-[#EBF6F0] text-[#0F6E56]">
                <Layers className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-editorial text-[19px]/[25px] font-bold text-[#0D1A12]">
                  Connected financial activities
                </h3>
                <p className="mt-1 text-[14.5px]/[23px] text-[#2D4A38]">
                  Discover savings, group finance and other relevant financial services within the
                  WAMU ecosystem without juggling multiple apps.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetrical Layered Visual Composition */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-12">
          {/* Feature A Visual Area: Phone utility summary + payment confirmation */}
          <div className="flex flex-col justify-between rounded-[24px] border border-[#C3E8D6] bg-[#F7FAF8] p-4 min-[375px]:p-5 sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F6E56]">
                  Feature A · Utility Conversation
                </p>
                <h3 className="mt-1 font-editorial text-[20px] font-bold text-[#0D1A12]">
                  Guided Summary Before You Pay
                </h3>
              </div>
            </div>

            <div className="mt-6">
              <WhatsAppChatShell title="WAMU Pay" subtitle="Utility & Bill Flow">
                <OutgoingBubble text="Pay NWSC water bill · Ref 00123456789" time="10:14 AM" />
                <IncomingBubble time="10:14 AM">
                  <div className="flex items-center gap-2">
                    <NwscBadge size="sm" />
                    <p className="font-semibold text-[#0D1A12]">Payment summary</p>
                  </div>
                  <p className="mt-1 text-[#2D4A38]">
                    Service: NWSC Water · Customer verified before approval
                  </p>
                  <p className="mt-1 font-medium text-[#0F6E56]">
                    Reply Confirm to approve via MTN MoMo or Airtel Money.
                  </p>
                </IncomingBubble>
                <OutgoingBubble text="Confirm" time="10:15 AM" />
                <IncomingBubble time="10:15 AM">
                  <p className="font-semibold text-[#0F6E56]">Confirmation recorded</p>
                  <p className="mt-0.5 text-[#2D4A38]">
                    Receipt saved in chat so you always have proof of payment.
                  </p>
                </IncomingBubble>
              </WhatsAppChatShell>
            </div>
          </div>

          {/* Feature B Visual Area: Layered Group, Savings & Service Inquiry Cards + real WAMU device shot */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            <div className="flex flex-col justify-between rounded-[24px] border border-[#C3E8D6] bg-[#EBF6F0] p-5 sm:p-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F6E56]">
                  Feature B · Connected Services
                </p>
                <h3 className="mt-1.5 font-editorial text-[19px]/[25px] font-bold text-[#0D1A12]">
                  Savings &amp; Group Ledgers
                </h3>
                <p className="mt-2 text-[13.5px]/[21px] text-[#2D4A38]">
                  Savings goals, merry-go-round schedules, and SACCO share tracking in one menu.
                </p>
              </div>
              <div className="mt-5 overflow-hidden rounded-[18px] border border-[#C3E8D6] bg-[#0D1A12] shadow-md">
                <img
                  src="/images/wamu-feature-sacco.webp"
                  alt="WAMU Pay on WhatsApp displaying Savings Goals, Merry-Go-Round, My Funds and SACCO Shares menu"
                  width={300}
                  height={450}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="mx-auto h-[260px] w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5">
              {/* Savings Goal Mini Card */}
              <div className="rounded-[20px] border border-[#C3E8D6] bg-white p-5 shadow-[0_12px_28px_-14px_rgba(13,26,18,0.08)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F6E56]">
                  Savings &amp; Goals
                </p>
                <p className="mt-1.5 font-editorial text-[17px] font-bold text-[#0D1A12]">
                  Personal &amp; Community Targets
                </p>
                <p className="mt-1.5 text-[13px]/[20px] text-[#2D4A38]">
                  Create goals for weddings, school fees, or personal milestones with automatic WhatsApp reminders.
                </p>
              </div>

              {/* Group Contribution Mini Card */}
              <div className="rounded-[20px] border border-[#5DCAA5]/30 bg-[#0D1A12] p-5 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5DCAA5]">
                  Group Coordination
                </p>
                <p className="mt-1.5 font-editorial text-[17px] font-bold text-white">
                  Shared Group Accountability
                </p>
                <p className="mt-1.5 text-[13px]/[20px] text-[#C3E8D6]">
                  Members track pledges vs. paid contributions without relying on a single paper notebook.
                </p>
              </div>

              {/* Financial Service Inquiry Mini Card */}
              <div className="rounded-[20px] border border-[#C3E8D6] bg-[#F7FAF8] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F6E56]">
                  Financial Services
                </p>
                <p className="mt-1.5 font-editorial text-[17px] font-bold text-[#0D1A12]">
                  Insurance, Loans &amp; Investments
                </p>
                <p className="mt-1.5 text-[13px]/[20px] text-[#2D4A38]">
                  Guided WhatsApp inquiries connecting clients to insurance and broader financial services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
