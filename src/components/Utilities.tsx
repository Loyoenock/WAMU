import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WaMark } from './WaMark';

const SUPPORTING_SERVICES = [
  { name: 'Water', body: 'Use your meter details to review a water payment before you approve it.', status: 'In progress' },
  { name: 'Taxes', body: 'Pay a PRN from the same WhatsApp conversation you already use every day.', status: 'In progress' },
  { name: 'Pay TV', body: 'Keep a subscription active without switching between apps and payment channels.', status: 'In progress' },
];

export function Utilities() {
  return (
    <section id="utilities" className="relative overflow-hidden bg-[#FFFFFF]">
      <WaMark tone="light" className="left-[40px] top-[48px] h-[116px] w-[116px] -z-0" />
      <WaMark tone="light" className="right-[32px] bottom-[44px] h-[96px] w-[96px] -z-0" />
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 px-6 py-16 md:gap-16 md:px-12 md:py-24 lg:px-20">
        <div className="flex max-w-[650px] flex-col items-start gap-4">
          <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
            EVERYDAY UTILITIES
          </span>
          <h2 className="font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[36px] font-bold tracking-[-0.015em] text-[#0D2016] md:text-[42px]/[48px]">
            Start with the payment in front of you.
          </h2>
          <p className="max-w-[58ch] text-[15px]/[24px] text-[#2D4A38] md:text-[16px]/[26px]">
            WAMU is putting everyday utility payments first, inside the WhatsApp chat you already know. Choose a service, confirm the details, then pay by Mobile Money.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.12fr_.88fr] lg:gap-6">
          <article className="flex min-h-[330px] flex-col justify-between rounded-[20px] border border-[#5DCAA5]/20 bg-[#1A4029] p-8 shadow-[0_18px_36px_-14px_rgba(6,16,10,0.5)] md:p-10">
            <div className="flex flex-col gap-5">
              <span className="w-fit rounded-full bg-[#1D9E75] px-3 py-1 text-[11.5px]/[16px] font-semibold tracking-[-0.01em] text-[#C3E8D6] md:text-[12px]/[16px]">STARTING WITH</span>
              <div className="flex flex-col gap-3">
                <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[26px]/[32px] font-bold tracking-[-0.01em] text-white md:text-[32px]/[38px]">Airtime &amp; Voice</h3>
                <p className="max-w-[480px] text-[15px]/[24px] text-[#C3E8D6] md:text-[16px]/[26px]">
                  Buy airtime for yourself or another number. Review the amount first, then approve the Mobile Money payment from your phone.
                </p>
              </div>
            </div>
            <a href="https://wa.me/256788003344?text=I%20want%20to%20ask%20about%20WAMU%20utilities" className="wamu-liquid-btn-glass-dark mt-8 inline-flex w-fit items-center gap-2.5 rounded-full px-6 py-3.5 text-[14.5px]/[20px] font-bold tracking-[-0.01em] text-[#0D2016] hover:-translate-y-0.5 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A4029] md:text-[15px]/[20px]">
              <WhatsAppIcon className="h-4 w-4 text-[#0B6B45]" />
              Ask about utilities
            </a>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            <article className="flex min-h-[155px] flex-col justify-between rounded-[20px] border border-[#C3E8D6]/80 bg-[#F4FBF7]/90 p-8 shadow-[0_12px_28px_-10px_rgba(13,32,22,0.08),0_2px_8px_-2px_rgba(13,32,22,0.04)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#5DCAA5]/75">
              <div className="flex flex-col gap-2">
                <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#0F6E56]">NEXT</span>
                <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[19px]/[25px] font-bold tracking-[-0.01em] text-[#0D2016] md:text-[22px]/[28px]">Internet &amp; Data</h3>
                <p className="text-[14px]/[22px] text-[#2D4A38]">Choose a bundle for your own number or someone else&apos;s.</p>
              </div>
            </article>
            <article className="flex min-h-[155px] flex-col justify-between rounded-[20px] border border-[#5DCAA5]/25 bg-[#1D9E75] p-8 shadow-[0_18px_36px_-14px_rgba(13,32,22,0.22)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#C3E8D6]/75">
              <div className="flex flex-col gap-2">
                <span className="text-[11px]/[16px] font-bold uppercase tracking-[2px] text-[#C3E8D6]">IN PROGRESS</span>
                <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[19px]/[25px] font-bold tracking-[-0.01em] text-[#C3E8D6] md:text-[22px]/[28px]">Electricity</h3>
                <p className="text-[14px]/[22px] text-[#C3E8D6]">Enter your meter details, check the payment, and receive your result in WhatsApp.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="rounded-[20px] border border-[#C3E8D6]/80 bg-[#F4FBF7]/90 px-8 py-2 shadow-[0_12px_28px_-10px_rgba(13,32,22,0.08),0_2px_8px_-2px_rgba(13,32,22,0.04)] md:px-10">
          {SUPPORTING_SERVICES.map((service) => (
            <div key={service.name} className="grid gap-3 border-b border-[#C3E8D6]/75 py-6 last:border-b-0 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-6">
              <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[19px]/[25px] font-bold tracking-[-0.01em] text-[#0D2016] md:text-[21px]/[27px]">{service.name}</h3>
              <p className="text-[14px]/[22px] text-[#2D4A38]">{service.body}</p>
              <span className="w-fit rounded-full border border-[#C3E8D6] bg-[#E3F5EB] px-3 py-1 text-[11.5px]/[16px] font-semibold tracking-[-0.01em] text-[#0F6E56] md:text-[12px]/[16px]">{service.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
