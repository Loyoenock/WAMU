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

      <div className="relative flex flex-col gap-[60px] px-6 md:px-12 lg:px-[120px] py-16 md:py-[88px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div className="flex flex-col gap-[14px] items-start max-w-[520px] w-full">
            <span className="text-[11px] font-bold tracking-[2px] text-[#1A4029]">
              SAVINGS &amp; GROUPS
            </span>
            <h2 className="font-[Fraunces,ui-serif,Georgia,serif] font-bold text-[34px]/[40px] md:text-[42px]/[48px] text-[#0C1E12]">
              Keep your group records in one place.
            </h2>
          </div>
          <p className="text-[15px]/[25px] text-[#4B6A58] w-full md:w-[380px] md:shrink-0">
            No tech background needed. If your treasurer can send a voice note on WhatsApp, they
            can run your group's finances on WAMU.
          </p>
        </div>

        <div className="w-full h-[240px] rounded-[20px] overflow-hidden relative">
          <img
            src="/images/how-it-works.webp"
            alt="A savings group treasurer using WhatsApp on a phone during a group meeting"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className={`flex flex-col gap-[20px] p-[32px] rounded-[20px] transition-all duration-200 ease-out hover:-translate-y-1 ${
                step.highlight
                  ? 'border border-[#5DCAA5]/25 bg-[#1A4029] hover:shadow-[0_18px_36px_-14px_rgba(12,30,18,0.5)]'
                  : 'border border-[#C3E8D6]/85 bg-[#F4FBF7]/90 shadow-[0_12px_28px_-12px_rgba(27,67,50,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md hover:border-[#5DCAA5]/75 hover:bg-white/95 hover:shadow-[0_16px_32px_-12px_rgba(26,64,41,0.14)]'
              }`}
            >
              <div className="flex flex-row justify-between items-center">
                <span
                  className={`text-[13px] font-bold tracking-[1px] ${
                    step.highlight ? 'text-[#5DCAA5]' : 'text-[#0F6E56]'
                  }`}
                >
                  {step.num}
                </span>
                <span
                  className={`w-[8px] h-[8px] rounded-full ${
                    step.highlight ? 'bg-[#5DCAA5]' : 'bg-[#1D9E75]/60'
                  }`}
                  aria-hidden="true"
                />
              </div>
              <h3
                className={`font-[Fraunces,ui-serif,Georgia,serif] font-bold text-[20px] ${
                  step.highlight ? 'text-[#FFFFFF]' : 'text-[#0D2016]'
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-[14px]/[23px] ${
                  step.highlight ? 'text-[#C3E8D6]' : 'text-[#284E3A]'
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
