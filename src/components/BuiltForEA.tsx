import React from 'react';
import { Wheat, Landmark, TrendingUp, RefreshCw, type LucideIcon } from 'lucide-react';
import { WaMark } from './WaMark';

type Card = {
  key: string;
  dark?: boolean;
  tag: string;
  Icon: LucideIcon;
  name: string;
  full: string;
  body: string;
};

const CARDS: Card[] = [
  {
    key: 'vslas',
    dark: true,
    tag: 'Most common',
    Icon: Wheat,
    name: 'VSLAs',
    full: 'Village Savings & Loan Associations',
    body: 'Weekly or monthly contributions and annual share-outs tracked automatically. Every member can verify their own balance at any time, without waiting for the treasurer to open a notebook.',
  },
  {
    key: 'saccos',
    tag: 'Structured',
    Icon: Landmark,
    name: 'SACCOs',
    full: 'Savings & Credit Cooperatives',
    body: 'Share capital accounts, separate member savings, annual financial year cycles, AGM resolutions tied to each year, dividend distribution, and interest posting. The full mechanics of a registered cooperative, not just a shared pot.',
  },
  {
    key: 'investment',
    tag: 'Growth-focused',
    Icon: TrendingUp,
    name: 'Investment Clubs',
    full: 'Pooled Investment Groups',
    body: "Each member's contribution is tracked against the pooled total. Everyone sees their own stake and the group's overall position. No single person holds the figures everyone else has to trust.",
  },
  {
    key: 'mgr',
    tag: 'Discipline-first',
    Icon: RefreshCw,
    name: 'Merry-go-round',
    full: 'Rotating Savings Circle (Merry-go-round)',
    body: "Everyone commits to the same amount and schedule. Turn order is set up front. Members get WhatsApp reminders before each round, payouts go straight to the recipient's mobile wallet, and every contribution is logged in a permanent audit trail.",
  },
];

export function BuiltForEA() {
  return (
    <section
      id="who-we-serve"
      className="relative overflow-hidden bg-[#FFFFFF]"
    >
      <div className="relative z-0 mx-auto flex max-w-[1280px] flex-col items-start gap-[52px] px-6 py-16 md:px-12 md:py-[88px] lg:px-20">
        <div className="flex max-w-[600px] w-full flex-col items-start gap-[14px]">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
            WHO WE SERVE
          </span>
          <h2 className="w-full font-[Fraunces,ui-serif,Georgia,serif] font-bold text-[32px]/[38px] md:text-[42px]/[48px] text-[#0D2016]">
            WAMU savings products built for how your group actually works.
          </h2>
        </div>

        <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] border border-[#C3E8D6]/85 shadow-[0_14px_32px_-12px_rgba(27,67,50,0.1)] md:h-[320px]">
          <img
            src="/images/who-we-serve.webp"
            alt="Members of a Ugandan savings group meeting together"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="grid w-full grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div
              key={c.key}
              className={`flex flex-col items-start gap-[18px] rounded-[20px] p-[28px] transition-all duration-200 ease-out hover:-translate-y-1 ${
                c.dark
                  ? 'border border-[#5DCAA5]/25 bg-[#1A4029] hover:border-[#5DCAA5]/60 hover:shadow-[0_18px_36px_-14px_rgba(12,30,18,0.5)]'
                  : 'border border-[#C3E8D6]/85 bg-[#F4FBF7]/90 shadow-[0_12px_28px_-12px_rgba(27,67,50,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md hover:border-[#5DCAA5]/75 hover:bg-white/95 hover:shadow-[0_16px_32px_-12px_rgba(26,64,41,0.14)]'
              }`}
            >
              <span
                className={`w-fit rounded-[20px] p-[4px_10px] text-[11px] font-semibold ${
                  c.dark
                    ? 'border border-[#5DCAA5]/25 bg-[#1D9E75]/25 text-[#5DCAA5]'
                    : 'border border-[#C3E8D6] bg-[#E3F5EB] text-[#0F6E56]'
                }`}
              >
                {c.tag}
              </span>
              <c.Icon
                className={c.dark ? 'h-[30px] w-[30px] text-[#5DCAA5]' : 'h-[30px] w-[30px] text-[#0B6B45]'}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span
                className={`font-[Fraunces,ui-serif,Georgia,serif] text-[20px] font-bold ${
                  c.dark ? 'text-[#FFFFFF]' : 'text-[#0D2016]'
                }`}
              >
                {c.name}
              </span>
              <span
                className={`text-[12px] ${
                  c.dark ? 'text-[#9FBEAA]' : 'text-[#5A7A68]'
                }`}
              >
                {c.full}
              </span>
              <div
                className={`h-[1px] w-full ${
                  c.dark ? 'bg-[#2D5A3D]' : 'bg-[#C3E8D6]'
                }`}
              />
              <p
                className={`w-full text-[13px]/[21px] ${
                  c.dark ? 'text-[#C3E8D6]' : 'text-[#284E3A]'
                }`}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <WaMark tone="light" className="right-[40px] top-[40px] h-[132px] w-[132px] -z-0" />
      <WaMark tone="light" className="left-[24px] bottom-[48px] h-[104px] w-[104px] -z-0" />
    </section>
  );
}
