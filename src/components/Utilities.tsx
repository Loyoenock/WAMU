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
          <h2 className="font-[Fraunces,ui-serif,Georgia,serif] text-[32px]/[38px] font-bold text-[#0C1E12] md:text-[42px]/[48px]">
            Start with the payment in front of you.
          </h2>
          <p className="text-[16px]/[26px] text-[#3C5A48]">
            WAMU is putting everyday utility payments first, inside the WhatsApp chat you already know. Choose a service, confirm the details, then pay by Mobile Money.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.12fr_.88fr]">
          <article className="flex min-h-[330px] flex-col justify-between rounded-[20px] bg-[#1A4029] p-7 md:p-10">
            <div className="flex flex-col gap-5">
              <span className="w-fit rounded-full bg-[#D4A017] px-3 py-1 text-[11px] font-bold text-[#0C1E12]">STARTING WITH</span>
              <div className="flex flex-col gap-3">
                <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[36px] font-bold text-white md:text-[38px]/[44px]">Airtime &amp; Voice</h3>
                <p className="max-w-[480px] text-[16px]/[26px] text-[#B4CDBE]">
                  Buy airtime for yourself or another number. Review the amount first, then approve the Mobile Money payment from your phone.
                </p>
              </div>
            </div>
            <a href="https://wa.me/256788003344?text=I%20want%20to%20ask%20about%20WAMU%20utilities" className="mt-8 inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#D4A017] px-5 py-3 text-[14px] font-bold text-[#0C1E12] transition-[background-color,transform] duration-200 hover:bg-[#E8A020] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A4029]">
              <WhatsAppIcon className="h-4 w-4" />
              Ask about utilities
            </a>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <article className="flex min-h-[155px] flex-col justify-between rounded-[20px] bg-[#F7F4EE] p-7 outline outline-1 -outline-offset-1 outline-[#E4DED2]">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold tracking-[1.5px] text-[#1A4029]">NEXT</span>
                <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[24px] font-bold text-[#0C1E12]">Internet &amp; Data</h3>
                <p className="text-[14px]/[22px] text-[#4B6A58]">Choose a bundle for your own number or someone else&apos;s.</p>
              </div>
            </article>
            <article className="flex min-h-[155px] flex-col justify-between rounded-[20px] bg-[#D4A017] p-7">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold tracking-[1.5px] text-[#5A3A00]">IN PROGRESS</span>
                <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[24px] font-bold text-[#0C1E12]">Electricity</h3>
                <p className="text-[14px]/[22px] text-[#5A3A00]">Enter your meter details, check the payment, and receive your result in WhatsApp.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="rounded-[20px] border border-[#E4DED2] bg-[#FDFAF4] px-7 py-2 md:px-10">
          {SUPPORTING_SERVICES.map((service) => (
            <div key={service.name} className="grid gap-3 border-b border-[#E4DED2] py-6 last:border-b-0 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-6">
              <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[21px] font-bold text-[#0C1E12]">{service.name}</h3>
              <p className="text-[14px]/[22px] text-[#4B6A58]">{service.body}</p>
              <span className="w-fit rounded-full bg-[#EDF5EF] px-3 py-1 text-[11px] font-semibold text-[#1A4029]">{service.status}</span>
            </div>
          ))}
        </div>

        <div id="how-it-works" className="grid gap-5 pt-2 md:grid-cols-3">
          <div className="border-t-2 border-[#1A4029] pt-5">
            <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[22px] font-bold text-[#0C1E12]">Choose</h3>
            <p className="mt-2 text-[14px]/[22px] text-[#4B6A58]">Pick the utility you need from the WAMU WhatsApp menu.</p>
          </div>
          <div className="border-t-2 border-[#D4A017] pt-5">
            <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[22px] font-bold text-[#0C1E12]">Confirm</h3>
            <p className="mt-2 text-[14px]/[22px] text-[#4B6A58]">Check the recipient, account, amount, and total before you pay.</p>
          </div>
          <div className="border-t-2 border-[#1A4029] pt-5">
            <h3 className="font-[Fraunces,ui-serif,Georgia,serif] text-[22px] font-bold text-[#0C1E12]">Pay</h3>
            <p className="mt-2 text-[14px]/[22px] text-[#4B6A58]">Approve the Mobile Money prompt and receive your update in WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
