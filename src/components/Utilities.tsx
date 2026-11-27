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
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 px-6 py-16 md:px-12 md:py-[88px] lg:gap-16 lg:px-20">
        <div className="flex max-w-[650px] flex-col items-start gap-4">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
            EVERYDAY UTILITIES
          </span>
          <h2 className="font-[Fraunces,ui-serif,Georgia,serif] text-[32px]/[38px] font-bold text-[#0D2016] md:text-[42px]/[48px]">
            Start with the payment in front of you.
          </h2>
          <p className="text-[16px]/[26px] text-[#2D4A38]">
            WAMU is putting everyday utility payments first, inside the WhatsApp chat you already know. Choose a service, confirm the details, then pay by Mobile Money.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.12fr_.88fr]">
          <article className="flex min-h-[330px] flex-col justify-between rounded-[20px] border border-[#5DCAA5]/20 bg-[#1A4029] p-7 shadow-[0_18px_38px_-14px_rgba(13,32,22,0.35)] md:p-10">
            <div className="flex flex-col gap-5">
              <span className="w-fit rounded-full bg-[#1D9E75] px-3 py-1 text-[11px] font-bold text-[#C3E8D6]">STARTING WITH</span>
              <div className="flex flex-col gap-3">
                <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[36px] font-bold text-white md:text-[38px]/[44px]">Airtime &amp; Voice</h3>
                <p className="max-w-[480px] text-[16px]/[26px] text-[#C3E8D6]">
                  Buy airtime for yourself or another number. Review the amount first, then approve the Mobile Money payment from your phone.
                </p>
              </div>
            </div>
            <a href="https://wa.me/256788003344?text=I%20want%20to%20ask%20about%20WAMU%20utilities" className="wamu-liquid-btn-glass-dark mt-8 inline-flex w-fit items-center gap-2.5 rounded-full px-6 py-3.5 text-[14px] font-bold text-[#0D2016] hover:-translate-y-0.5 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A4029]">
              <WhatsAppIcon className="h-4 w-4 text-[#0B6B45]" />
              Ask about utilities
            </a>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <article className="flex min-h-[155px] flex-col justify-between rounded-[20px] border border-[#C3E8D6]/85 bg-[#F4FBF7]/90 p-7 shadow-[0_12px_28px_-12px_rgba(27,67,50,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold tracking-[1.5px] text-[#0F6E56]">NEXT</span>
                <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[24px] font-bold text-[#0D2016]">Internet &amp; Data</h3>
                <p className="text-[14px]/[22px] text-[#284E3A]">Choose a bundle for your own number or someone else&apos;s.</p>
              </div>
            </article>
            <article className="flex min-h-[155px] flex-col justify-between rounded-[20px] bg-[#1D9E75] p-7">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold tracking-[1.5px] text-[#C3E8D6]">IN PROGRESS</span>
                <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[24px] font-bold text-[#C3E8D6]">Electricity</h3>
                <p className="text-[14px]/[22px] text-[#C3E8D6]">Enter your meter details, check the payment, and receive your result in WhatsApp.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="rounded-[20px] border border-[#C3E8D6]/85 bg-[#F4FBF7]/90 px-7 py-2 shadow-[0_12px_28px_-12px_rgba(27,67,50,0.07),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md md:px-10">
          {SUPPORTING_SERVICES.map((service) => (
            <div key={service.name} className="grid gap-3 border-b border-[#C3E8D6]/75 py-6 last:border-b-0 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-6">
              <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[21px] font-bold text-[#0D2016]">{service.name}</h3>
              <p className="text-[14px]/[22px] text-[#284E3A]">{service.body}</p>
              <span className="w-fit rounded-full border border-[#C3E8D6] bg-[#E3F5EB] px-3 py-1 text-[11px] font-semibold text-[#0F6E56]">{service.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
