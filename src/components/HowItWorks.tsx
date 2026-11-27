import React from 'react';
import { WaMark } from './WaMark';

type Step = {
  num: string;
  title: string;
  body: string;
  highlight: boolean;
};

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Register your group',
    body: 'Message WAMU on WhatsApp, select your group type (VSLA, SACCO, investment club, or merry-go-round) and set your contribution rules.',
    highlight: false,
  },
  {
    num: '02',
    title: 'Verify and add members',
    body: 'Each member is linked to their phone number and identity-verified before they can send or receive funds. No anonymous transactions.',
    highlight: false,
  },
  {
    num: '03',
    title: 'Contribute via mobile money',
    body: 'On contribution day, members pay through MTN MoMo or Airtel Money directly from the WhatsApp chat. The ledger updates instantly.',
    highlight: true,
  },
  {
    num: '04',
    title: 'Track everything in real time',
    body: "Any member can check their balance, their turn in the rotation, or the group's total position at any moment, without waiting for a meeting.",
    highlight: false,
  },
];

export function HowItWorks() {
  return (
    <section
      id="savings-and-groups"
      className="relative overflow-hidden bg-[#FFFFFF]"
    >
      <WaMark tone="light" className="left-[40px] top-[50px] h-[150px] w-[150px] -z-0" />
      <WaMark tone="light" className="right-[56px] bottom-[72px] h-[128px] w-[128px] -z-0" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 px-6 py-16 md:gap-16 md:px-12 md:py-24 lg:px-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex w-full max-w-[520px] flex-col items-start gap-[14px]">
            <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
              SAVINGS &amp; GROUPS
            </span>
            <h2 className="font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[36px] font-bold tracking-[-0.015em] text-[#0D2016] md:text-[42px]/[48px]">
              Keep your group records in one place.
            </h2>
          </div>
          <p className="w-full text-[15px]/[24px] text-[#2D4A38] md:w-[380px] md:shrink-0 md:text-[16px]/[26px]">
            No tech background needed. If your treasurer can send a voice note on WhatsApp, they
            can run your group's finances on WAMU.
          </p>
        </div>

        <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] border border-[#C3E8D6]/80 shadow-[0_14px_32px_-12px_rgba(27,67,50,0.1)] md:h-[320px]">
          <img
            src="/images/how-it-works.webp"
            alt="A savings group treasurer using WhatsApp on a phone during a group meeting"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[#0D2016]/10"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className={`flex flex-col gap-[20px] rounded-[20px] p-8 transition-all duration-200 ease-out hover:-translate-y-1 ${
                step.highlight
                  ? 'border border-[#5DCAA5]/20 bg-[#1A4029] shadow-[0_18px_36px_-14px_rgba(6,16,10,0.5)] hover:border-[#5DCAA5]/75'
                  : 'border border-[#C3E8D6]/80 bg-[#F4FBF7]/90 shadow-[0_12px_28px_-10px_rgba(13,32,22,0.08),0_2px_8px_-2px_rgba(13,32,22,0.04)] backdrop-blur-md hover:border-[#5DCAA5]/75 hover:bg-white'
              }`}
            >
              <div className="flex flex-row items-center justify-between">
                <span
                  className={`text-[13px] font-bold tracking-[1px] ${
                    step.highlight ? 'text-[#5DCAA5]' : 'text-[#0F6E56]'
                  }`}
                >
                  {step.num}
                </span>
                <span
                  className={`h-[8px] w-[8px] rounded-full ${
                    step.highlight ? 'bg-[#5DCAA5]' : 'bg-[#1D9E75]/60'
                  }`}
                  aria-hidden="true"
                />
              </div>
              <h3
                className={`font-[Fraunces,ui-serif,Georgia,serif] text-[19px]/[25px] font-bold tracking-[-0.01em] md:text-[20px]/[26px] ${
                  step.highlight ? 'text-[#FFFFFF]' : 'text-[#0D2016]'
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-[14px]/[22px] ${
                  step.highlight ? 'text-[#C3E8D6]' : 'text-[#2D4A38]'
                }`}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
