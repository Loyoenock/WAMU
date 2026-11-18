import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WaMark } from './WaMark';

export function CTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const slotRef = useRef<HTMLDivElement | null>(null);
  const [scrollStage, setScrollStage] = useState<'before' | 'floating-before-cta' | 'docked' | 'floating-after-cta'>('before');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let rafId = 0;

    const evaluateScroll = () => {
      const savingsEl = document.getElementById('savings-and-groups');
      const sectionEl = sectionRef.current;
      const slotEl = slotRef.current;

      if (!sectionEl || !slotEl) return;

      const vh = window.innerHeight;
      const savingsRect = savingsEl ? savingsEl.getBoundingClientRect() : null;
      const sectionRect = sectionEl.getBoundingClientRect();
      const slotRect = slotEl.getBoundingClientRect();

      // 1. Check if the user has passed the Savings & groups section
      const passedSavings = savingsRect ? savingsRect.bottom <= vh * 0.72 : false;

      if (!passedSavings) {
        setScrollStage('before');
        return;
      }

      // 2. The floating button rests at 24px from the bottom of the viewport (bottom = vh - 24).
      // As soon as the inline slot's bottom edge reaches vh - 24, the floating button is at the exact same
      // screen position as its inline slot inside "Ready to bring your group online?" and docks seamlessly.
      const reachedSlot = slotRect.bottom <= vh - 24;

      // 3. Once the user scrolls past the "Ready to bring your group online?" section into the Footer,
      // the button floats at the bottom again.
      const movedPastCtaSection = sectionRect.bottom <= vh * 0.65;

      if (!reachedSlot) {
        setScrollStage('floating-before-cta');
      } else if (!movedPastCtaSection) {
        setScrollStage('docked');
      } else {
        setScrollStage('floating-after-cta');
      }
    };

    const onScrollOrResize = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(evaluateScroll);
    };

    evaluateScroll();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  const isFloating = scrollStage === 'floating-before-cta' || scrollStage === 'floating-after-cta';

  return (
    <section
      ref={sectionRef}
      id="ready-to-bring-group-online"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0C1E12] px-6 py-24 md:px-12 lg:h-[360px] lg:py-0"
    >
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

        {/* Reserved inline slot so the section layout height stays 100% stable when the button floats */}
        <div
          ref={slotRef}
          className="flex min-h-[60px] items-center justify-center"
        >
          {!isFloating && (
            <a
              href="https://wa.me/256788003344"
              className="wamu-liquid-btn-glass-dark inline-flex items-center gap-[10px] whitespace-nowrap rounded-full p-[18px_36px] text-[16px] font-bold text-[#0D2016] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] shrink-0 text-[#0D2016]" />
              Message WAMU on WhatsApp
            </a>
          )}
        </div>

        <p className="text-[13px] text-[#3D7A52]">
          No commitment required. Ask us a question before you sign up.
        </p>
      </div>

      {isFloating && (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
          <motion.a
            key={scrollStage}
            initial={
              reduceMotion
                ? false
                : scrollStage === 'floating-after-cta'
                  ? { opacity: 0, y: -18 }
                  : { opacity: 0, y: 18 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            href="https://wa.me/256788003344"
            className="wamu-liquid-btn-glass-dark pointer-events-auto inline-flex items-center gap-[10px] whitespace-nowrap rounded-full p-[18px_36px] text-[16px] font-bold text-[#0D2016] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] shrink-0 text-[#0D2016]" />
            Message WAMU on WhatsApp
          </motion.a>
        </div>
      )}
    </section>
  );
}
