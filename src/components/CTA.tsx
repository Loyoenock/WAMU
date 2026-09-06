import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WaMark } from './WaMark';

export function CTA() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0C1E12] px-6 py-24 md:px-12 lg:h-[360px] lg:py-0">
      <WaMark tone="dark" className="left-[50px] top-[24px] h-[130px] w-[130px]" />
      <WaMark tone="dark" className="right-[56px] bottom-[28px] h-[104px] w-[104px]" />

      <div className="relative flex flex-col items-center gap-[28px]">
        <h2 className="max-w-[680px] text-center font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[36px] font-bold text-white md:text-[38px]/[44px] lg:text-[46px]/[53px]">
          Ready to bring your group online?
        </h2>
        <p className="max-w-[580px] text-center text-[15px]/[24px] text-[#7AAA8A] md:text-[16px]/[26px]">
          Start with the group you already have. No new app, no restructuring, no complicated onboarding.
          <br />
          Message WAMU on WhatsApp and set up in one sitting.
        </p>
        <a
          href="https://wa.me/256788003344"
          className="inline-flex items-center gap-[10px] rounded-[10px] bg-[#D4A017] p-[18px_36px] text-[16px] font-bold text-[#0C1E12] transition-[opacity,transform] duration-200 hover:opacity-90 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="h-[18px] w-[18px] text-[#1A4029]" />
          Message WAMU on WhatsApp
        </a>
        <p className="text-[13px] text-[#3D7A52]">
          No commitment required. Ask us a question before you sign up.
        </p>
      </div>
    </section>
  );
}
