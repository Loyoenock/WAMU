import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WaMark } from './WaMark';

export function CTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const slotRef = useRef<HTMLDivElement | null>(null);
  const floatingBtnRef = useRef<HTMLAnchorElement | null>(null);
  const [scrollStage, setScrollStage] = useState<'before' | 'floating-before-cta' | 'docked' | 'floating-after-cta'>('before');
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const isFloatingVisibleRef = useRef(false);
  const isTargetedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let rafId = 0;
    let hideTimeoutId = 0;
    let lastPointerDist: number | null = null;

    const setVisible = (next: boolean) => {
      isFloatingVisibleRef.current = next;
      setIsFloatingVisible(next);
    };

    const scheduleHide = (delayMs: number) => {
      window.clearTimeout(hideTimeoutId);
      hideTimeoutId = window.setTimeout(() => {
        if (!isTargetedRef.current) {
          setVisible(false);
        }
      }, delayMs);
    };

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

    const onScroll = () => {
      // Immediately reappear when the user begins to scroll again, then hide after 5s of scroll pause
      setVisible(true);
      scheduleHide(5000);

      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(evaluateScroll);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isFloatingVisibleRef.current || isTargetedRef.current) {
        lastPointerDist = null;
        return;
      }

      // Measure distance from cursor to the floating button center at bottom-center of viewport
      const btnEl = floatingBtnRef.current;
      const btnRect = btnEl ? btnEl.getBoundingClientRect() : null;
      const targetX = btnRect ? btnRect.left + btnRect.width * 0.5 : window.innerWidth * 0.5;
      const targetY = btnRect ? btnRect.top + btnRect.height * 0.5 : window.innerHeight - 54;

      const dist = Math.hypot(e.clientX - targetX, e.clientY - targetY);

      if (lastPointerDist !== null) {
        const delta = lastPointerDist - dist;
        // Cursor is moving meaningfully closer toward the floating button
        if (delta > 2.5) {
          scheduleHide(10000);
        }
      }

      lastPointerDist = dist;
    };

    const onResize = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(evaluateScroll);
    };

    evaluateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.clearTimeout(hideTimeoutId);
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const isFloating = scrollStage === 'floating-before-cta' || scrollStage === 'floating-after-cta';
  const showFloatingButton = isFloating && isFloatingVisible;

  return (
    <section
      ref={sectionRef}
      id="ready-to-bring-group-online"
      className="relative flex flex-col items-center justify-center overflow-hidden border-t border-[#1A4029] bg-[#0C1E12] px-6 py-24 md:px-12 lg:h-[360px] lg:px-20 lg:py-0"
    >
      <WaMark tone="dark" className="left-[50px] top-[24px] h-[130px] w-[130px]" />
      <WaMark tone="dark" className="right-[56px] bottom-[28px] h-[104px] w-[104px]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[28px]">
        <h2 className="max-w-[680px] text-center font-[Fraunces,ui-serif,Georgia,serif] text-[30px]/[36px] font-bold text-white md:text-[38px]/[44px] lg:text-[46px]/[53px]">
          Ready to bring your group online?
        </h2>
        <p className="max-w-[580px] text-center text-[15px]/[24px] text-[#C3E8D6] md:text-[16px]/[26px]">
          Start with the group you already have. No new app, no restructuring, no complicated onboarding.
          <br />
          Message WAMU on WhatsApp and set up in one sitting.
        </p>

        {/* Reserved inline slot: always visible in its default position inside "Ready to bring your group online?" */}
        <div
          ref={slotRef}
          className="flex min-h-[60px] items-center justify-center"
        >
          {!isFloating && (
            <a
              href="https://wa.me/256788003344"
              className="wamu-liquid-btn-glass-dark inline-flex items-center gap-[10px] whitespace-nowrap rounded-full p-[18px_36px] text-[16px] font-bold text-[#0D2016] hover:-translate-y-0.5 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1E12]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] shrink-0 text-[#0B6B45]" />
              Message WAMU on WhatsApp
            </a>
          )}
        </div>

        <p className="text-center text-[13px] text-[#9FBEAA]">
          No commitment required. Ask us a question before you sign up.
        </p>
      </div>

      <AnimatePresence>
        {showFloatingButton && (
          <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
            <motion.a
              ref={floatingBtnRef}
              key="floating-whatsapp-cta"
              onPointerEnter={() => {
                isTargetedRef.current = true;
              }}
              onPointerLeave={() => {
                isTargetedRef.current = false;
              }}
              onFocus={() => {
                isTargetedRef.current = true;
              }}
              onBlur={() => {
                isTargetedRef.current = false;
              }}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              href="https://wa.me/256788003344"
              className="wamu-liquid-btn-glass-dark pointer-events-auto inline-flex items-center gap-[10px] whitespace-nowrap rounded-full p-[18px_36px] text-[16px] font-bold text-[#0D2016] hover:-translate-y-0.5 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1E12]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] shrink-0 text-[#0B6B45]" />
              Message WAMU on WhatsApp
            </motion.a>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
