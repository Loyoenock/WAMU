import React from 'react';
import { ArrowUpRight, Heart, Flower2, PartyPopper, BellRing, type LucideIcon } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WaMark } from './WaMark';

type Collection = {
  key: string;
  Icon: LucideIcon;
  tag: string;
  name: string;
  body: string;
  rows: string[];
};

const COLLECTIONS: Collection[] = [
  {
    key: 'wedding',
    Icon: Heart,
    tag: 'Goal · Kwanjula & wedding',
    name: 'Wedding collections',
    body:
      'Set the wedding budget as a goal and run the committee from one WhatsApp group. Pledges are recorded against the target, payments come in by MTN MoMo or Airtel Money, and the running total is visible to everyone instead of living in one person’s book.',
    rows: ['Pledge vs. paid, per person', 'Live total toward the budget', 'Meeting reminders to every member'],
  },
  {
    key: 'funeral',
    Icon: Flower2,
    tag: 'Goal · Burial & bereavement',
    name: 'Funeral collections',
    body:
      'When a family loses someone, money has to move in hours, not weeks. Open a goal, share the link, and contributions land in a single verified account with a receipt for every shilling. No one person can withdraw it alone.',
    rows: ['Open a goal in minutes', 'Every contribution receipted', 'Withdrawals need more than one approver'],
  },
  {
    key: 'events',
    Icon: PartyPopper,
    tag: 'Goal · Any occasion',
    name: 'Event collections',
    body:
      'Graduations, baby showers, church fundraisers, school fees drives, farewell parties. One goal each: a target, a deadline, automatic reminders, and one ledger nobody argues with.',
    rows: ['Set a target and a deadline', 'Invite by WhatsApp link', 'Payout to the organiser’s wallet'],
  },
];

export function Collections() {
  return (
    <section id="collections" className="relative overflow-hidden bg-[#0D1A12]">
      <WaMark tone="dark" className="right-[40px] top-[48px] h-[132px] w-[132px]" />
      <WaMark tone="dark" className="left-[24px] bottom-[40px] h-[104px] w-[104px]" />

      <div className="relative z-[1] mx-auto flex max-w-[1280px] flex-col items-start gap-10 px-4 py-14 min-[375px]:px-6 md:gap-14 md:px-10 md:py-22 lg:px-16 lg:py-24 2xl:max-w-[1340px]">
        <div className="flex w-full max-w-[680px] flex-col items-start gap-[14px]">
          <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#5DCAA5]">
            SAVINGS GOALS · COLLECTIONS
          </span>
          <h2 className="font-editorial w-full text-[27px]/[34px] font-bold tracking-[-0.015em] text-[#F4FBF7] min-[375px]:text-[30px]/[36px] md:text-[40px]/[46px] xl:text-[42px]/[48px]">
            Weddings, funerals and events. Collected on WhatsApp, counted correctly.
          </h2>
          <p className="max-w-[58ch] text-[14.5px]/[23px] text-[#9FBEAA] min-[375px]:text-[15px]/[24px] md:text-[16px]/[26px]">
            Ugandans already contribute for each other constantly. Every one of these is a WAMU
            savings goal: a target, a deadline, contributions by MTN MoMo or Airtel Money, and
            automatic reminders. Same goal, different occasion.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {COLLECTIONS.map((c) => (
            <div
              key={c.key}
              className="flex flex-col items-start gap-[14px] rounded-[20px] border border-[#5DCAA5]/20 bg-[#1A4029] p-5 shadow-[0_18px_36px_-14px_rgba(6,16,10,0.5)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#5DCAA5]/75 hover:shadow-[0_22px_42px_-14px_rgba(0,0,0,0.6)] min-[375px]:p-6 lg:gap-[16px] lg:p-8"
            >
              <span className="text-[11.5px]/[16px] font-semibold uppercase tracking-[0.06em] text-[#5DCAA5]">
                {c.tag}
              </span>
              <c.Icon className="h-[30px] w-[30px] text-[#5DCAA5]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-editorial text-[19px]/[25px] font-bold tracking-[-0.01em] text-[#FFFFFF] md:text-[20px]/[26px]">
                {c.name}
              </h3>
              <p className="w-full text-[14px]/[22px] text-[#9FBEAA]">{c.body}</p>
              <div className="h-[1px] w-full bg-[#2D5A3D]" />
              <div className="flex flex-col gap-[10px]">
                {c.rows.map((row) => (
                  <div key={row} className="flex flex-row items-center gap-[12px]">
                    <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#5DCAA5]" aria-hidden="true" />
                    <span className="text-[13.5px]/[20px] text-[#E3F5EB]">{row}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-5 rounded-[20px] border border-[#5DCAA5]/30 bg-[#1D9E75] p-5 shadow-[0_18px_38px_-14px_rgba(0,0,0,0.45)] min-[375px]:p-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-8">
          <div className="flex flex-row items-start gap-[14px] min-[375px]:gap-[16px] md:items-center">
            <BellRing className="mt-[2px] h-[26px] w-[26px] shrink-0 text-[#C3E8D6] sm:h-[28px] sm:w-[28px] md:mt-0" strokeWidth={1.5} aria-hidden="true" />
            <div className="flex flex-col gap-[4px]">
              <span className="font-editorial text-[18px]/[24px] font-bold tracking-[-0.01em] text-[#FFFFFF] sm:text-[19px]/[25px] md:text-[20px]/[26px]">
                Reminders do the chasing for you.
              </span>
              <span className="text-[13.5px]/[21px] text-[#EBF6F0] sm:text-[14px]/[22px]">
                Automatic WhatsApp reminders before every meeting, contribution date and deadline,
                to the people who have not paid yet. No group admin sending the same message twice.
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/256788003344?text=I%20want%20to%20start%20a%20collection%20on%20WAMU"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit shrink-0 items-center gap-2.5 rounded-full border border-white/35 bg-[#0D1A12]/90 py-1.5 pl-5 pr-1.5 text-[14px]/[20px] font-bold tracking-[-0.01em] text-[#FFFFFF] backdrop-blur-md shadow-[0_14px_28px_-10px_rgba(13,26,18,0.55),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-[1.02] hover:border-[#C3E8D6]/80 hover:bg-[#0D1A12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D9E75] sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 md:text-[15px]/[20px]"
          >
            <WhatsAppIcon className="h-[17px] w-[17px] text-[#5DCAA5]" />
            <span>Start a goal</span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] sm:h-10 sm:w-10">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
