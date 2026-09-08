import React from 'react';
import { Heart, Flower2, PartyPopper, BellRing, type LucideIcon } from 'lucide-react';
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
      'When a family loses someone, money has to move in hours, not weeks. Open a goal, share the link, and contributions land in a single verified account with a receipt for every shilling.',
    rows: ['Open a collection in minutes', 'Every contribution receipted', 'Clean statement for the family'],
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
    <section id="collections" className="relative overflow-hidden bg-[#0D2016]">
      <WaMark tone="dark" className="right-[40px] top-[48px] h-[132px] w-[132px]" />
      <WaMark tone="dark" className="left-[24px] bottom-[40px] h-[104px] w-[104px]" />

      <div className="relative z-[1] flex flex-col items-start gap-[48px] px-6 py-16 md:px-12 md:py-[88px] lg:px-[120px]">
        <div className="flex w-full max-w-[680px] flex-col items-start gap-[14px]">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#D4A017]">
            SAVINGS GOALS · COLLECTIONS
          </span>
          <h2 className="w-full font-[Fraunces,ui-serif,Georgia,serif] text-[32px]/[38px] font-bold text-[#FDFAF4] md:text-[42px]/[48px]">
            Weddings, funerals and events. Collected on WhatsApp, counted correctly.
          </h2>
          <p className="text-[16px]/[26px] text-[#7AAA8A]">
            Ugandans already contribute for each other constantly. Every one of these is a WAMU
            savings goal: a target, a deadline, contributions by MTN MoMo or Airtel Money, and
            automatic reminders. Same goal, different occasion.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[20px] md:grid-cols-3">
          {COLLECTIONS.map((c) => (
            <div
              key={c.key}
              className="flex flex-col items-start gap-[16px] rounded-[16px] bg-[#1A4029] p-[28px] transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.55)]"
            >
              <span className="w-fit rounded-[20px] bg-[#D4A01730] p-[4px_10px] text-[11px] font-semibold text-[#D4A017]">
                {c.tag}
              </span>
              <c.Icon className="h-[30px] w-[30px] text-[#D4A017]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[20px] font-bold text-[#FFFFFF]">
                {c.name}
              </h3>
              <p className="w-full text-[13px]/[21px] text-[#7AAA8A]">{c.body}</p>
              <div className="h-[1px] w-full bg-[#2D5A3D]" />
              <div className="flex flex-col gap-[10px]">
                {c.rows.map((row) => (
                  <div key={row} className="flex flex-row items-center gap-[12px]">
                    <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#D4A017]" aria-hidden="true" />
                    <span className="text-[13px] text-[#F7F4EE]">{row}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-[20px] rounded-[16px] bg-[#D4A017] p-[28px] md:flex-row md:items-center md:justify-between md:p-[32px_40px]">
          <div className="flex flex-row items-start gap-[16px] md:items-center">
            <BellRing className="mt-[2px] h-[28px] w-[28px] shrink-0 text-[#0C1E12] md:mt-0" strokeWidth={1.5} aria-hidden="true" />
            <div className="flex flex-col gap-[4px]">
              <span className="font-[Fraunces,ui-serif,Georgia,serif] text-[20px] font-bold text-[#0C1E12]">
                Reminders do the chasing for you.
              </span>
              <span className="text-[14px]/[22px] text-[#5A3A00]">
                Automatic WhatsApp reminders before every meeting, contribution date and deadline,
                to the people who have not paid yet. No group admin sending the same message twice.
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/256788003344"
            className="inline-flex shrink-0 items-center gap-[10px] rounded-[8px] bg-[#0D2016] px-[26px] py-[15px] text-[15px] font-bold text-[#FDFAF4] transition-[background-color,transform] duration-200 hover:bg-[#1A4029] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D2016] focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366]" />
            Start a goal
          </a>
        </div>
      </div>
    </section>
  );
}
