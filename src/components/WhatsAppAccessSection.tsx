import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FOCUS_RING_DARK, waLink } from '../lib/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export function WhatsAppAccessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inlineSlotRef = useRef<HTMLDivElement>(null);
  const floatingWrapRef = useRef<HTMLDivElement>(null);

  const [inFloatZone, setInFloatZone] = useState(false);
  const [floatVisible, setFloatVisible] = useState(false);
  const [justSnapped, setJustSnapped] = useState(false);

  const reduceMotion = Boolean(useReducedMotion());

  const pause3sTimerRef = useRef<number | null>(null);
  const cap5sTimerRef = useRef<number | null>(null);
  const snapPulseTimerRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const isFocusedRef = useRef(false);
  const lastApproachAtRef = useRef(0);
  const prevDistRef = useRef<number | null>(null);
  const hasClickedRef = useRef(false);
  const prevInFloatZoneRef = useRef(false);

  const clearHideTimers = useCallback(() => {
    if (pause3sTimerRef.current !== null) {
      window.clearTimeout(pause3sTimerRef.current);
      pause3sTimerRef.current = null;
    }
    if (cap5sTimerRef.current !== null) {
      window.clearTimeout(cap5sTimerRef.current);
      cap5sTimerRef.current = null;
    }
  }, []);

  const hideFloating = useCallback(() => {
    clearHideTimers();
    isHoveredRef.current = false;
    isFocusedRef.current = false;
    lastApproachAtRef.current = 0;
    prevDistRef.current = null;
    setFloatVisible(false);
  }, [clearHideTimers]);

  const scheduleHideTimers = useCallback(() => {
    clearHideTimers();

    const checkPauseAndHide = () => {
      const now = Date.now();
      const movingToward =
        isHoveredRef.current ||
        isFocusedRef.current ||
        now - lastApproachAtRef.current < 900;

      if (!movingToward) {
        hideFloating();
      } else {
        pause3sTimerRef.current = window.setTimeout(checkPauseAndHide, 400);
      }
    };

    // Disappear after 3 seconds of scroll pause unless user is moving cursor towards it
    pause3sTimerRef.current = window.setTimeout(checkPauseAndHide, 3000);

    // Stay on at most 5 seconds after scroll pause if the user does not click on it
    cap5sTimerRef.current = window.setTimeout(() => {
      if (!hasClickedRef.current) {
        hideFloating();
      }
    }, 5000);
  }, [clearHideTimers, hideFloating]);

  const evaluateZone = useCallback(
    (userScrolled: boolean) => {
      const diffEl = document.getElementById('difference');
      const sectionEl = sectionRef.current;
      const slotEl = inlineSlotRef.current;
      if (!diffEl || !sectionEl || !slotEl) return;

      const vh = window.innerHeight || 800;
      const diffRect = diffEl.getBoundingClientRect();
      const sectionRect = sectionEl.getBoundingClientRect();
      const slotRect = slotEl.getBoundingClientRect();

      // Active once user reaches "THE WAMU DIFFERENCE" section
      const reachedDifference = diffRect.top <= vh * 0.78;
      // Snaps into its natural place once user reaches "YOUR FINANCIAL WORLD, MORE CONNECTED"
      // and floats again once the user scrolls past the section.
      const snappedInSection = slotRect.top <= vh - 24 && sectionRect.bottom >= 160;
      const shouldFloat = reachedDifference && !snappedInSection;

      const wasInZone = prevInFloatZoneRef.current;
      prevInFloatZoneRef.current = shouldFloat;
      setInFloatZone(shouldFloat);

      if (wasInZone && snappedInSection) {
        setJustSnapped(true);
        if (snapPulseTimerRef.current !== null) {
          window.clearTimeout(snapPulseTimerRef.current);
        }
        snapPulseTimerRef.current = window.setTimeout(() => setJustSnapped(false), 650);
      }

      if (!shouldFloat) {
        hideFloating();
        return;
      }

      if (userScrolled || !wasInZone) {
        hasClickedRef.current = false;
        setFloatVisible(true);
        scheduleHideTimers();
      }
    },
    [hideFloating, scheduleHideTimers]
  );

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(() => {
          rafId = 0;
          evaluateZone(true);
        });
      }
    };

    const handleResize = () => {
      evaluateZone(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const el = floatingWrapRef.current;
      if (!el) {
        prevDistRef.current = null;
        return;
      }
      const rect = el.getBoundingClientRect();
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const dist = Math.hypot(dx, dy);

      if (dist === 0) {
        lastApproachAtRef.current = Date.now();
      } else if (prevDistRef.current !== null && dist < prevDistRef.current - 1.5 && dist < 440) {
        lastApproachAtRef.current = Date.now();
      }
      prevDistRef.current = dist;
    };

    evaluateZone(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      clearHideTimers();
      if (snapPulseTimerRef.current !== null) {
        window.clearTimeout(snapPulseTimerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [evaluateZone, clearHideTimers]);

  const showFloating = inFloatZone && floatVisible;

  return (
    <section
      ref={sectionRef}
      id="whatsapp-access"
      aria-labelledby="whatsapp-access-heading"
      className="relative overflow-hidden bg-[#0D1A12] px-4 py-14 text-white min-[375px]:px-6 sm:py-18 md:px-10 md:py-22 lg:px-16 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 h-[440px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.22)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1060px] 2xl:max-w-[1180px]">
        <div className="mx-auto max-w-[660px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5DCAA5] sm:text-[11.5px]">
            YOUR FINANCIAL WORLD, MORE CONNECTED
          </p>
          <h2
            id="whatsapp-access-heading"
            className="mt-3 font-editorial text-[28px]/[35px] font-bold tracking-[-0.015em] text-white min-[375px]:text-[32px]/[40px] md:text-[40px]/[48px] xl:text-[44px]/[52px]"
            style={{ textWrap: 'balance' }}
          >
            Your financial activities, closer through WhatsApp.
          </h2>
          <p className="mt-4 text-[15px]/[24px] text-[#C3E8D6] md:text-[16.5px]/[26px]">
            Discover a more familiar way to access payments, savings, group finance and other
            financial services through WAMU—with no separate app to download.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <div ref={inlineSlotRef} className="inline-flex">
              <motion.a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                animate={
                  justSnapped && !reduceMotion
                    ? { scale: [0.95, 1.04, 1], transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }
                    : { scale: 1 }
                }
                className={`wamu-magie-btn-dark group inline-flex w-fit items-center gap-2.5 whitespace-nowrap py-1.5 pl-5 pr-1.5 text-[14px] font-semibold sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14.5px] ${
                  justSnapped ? 'border-[#5DCAA5]/80 shadow-[0_0_0_4px_rgba(93,202,165,0.22)]' : ''
                } ${FOCUS_RING_DARK}`}
              >
                <WhatsAppIcon className="h-4 w-4 text-[#5DCAA5]" />
                <span>Join WAMU</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] sm:h-10 sm:w-10">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </motion.a>
            </div>
            <a
              href="#contact"
              className={`wamu-magie-btn-dark-secondary group inline-flex w-fit items-center gap-2.5 whitespace-nowrap py-1.5 pl-5 pr-1.5 text-[14px] font-semibold hover:scale-[1.02] sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14.5px] ${FOCUS_RING_DARK}`}
            >
              <span>Talk to Our Team</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#5DCAA5]/30 bg-[#1A4029] text-[#5DCAA5] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] group-hover:text-[#0D1A12] sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        {/* Floating bottom Join WAMU bar active from THE WAMU DIFFERENCE onward, snapping back at this section */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {showFloating && (
                <motion.div
                  ref={floatingWrapRef}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.94 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => {
                    isHoveredRef.current = true;
                    lastApproachAtRef.current = Date.now();
                  }}
                  onMouseLeave={() => {
                    isHoveredRef.current = false;
                  }}
                  className="pointer-events-auto fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-40 -translate-x-1/2 sm:bottom-6"
                >
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      hasClickedRef.current = true;
                    }}
                    onFocus={() => {
                      isFocusedRef.current = true;
                    }}
                    onBlur={() => {
                      isFocusedRef.current = false;
                    }}
                    className={`group inline-flex w-fit items-center gap-2.5 whitespace-nowrap rounded-full border border-[#5DCAA5]/45 bg-[#0D1A12]/90 py-1.5 pl-4 pr-1.5 text-[13.5px] font-semibold text-white backdrop-blur-xl shadow-[0_20px_44px_-12px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.28)] transition-all duration-300 hover:scale-[1.03] hover:border-[#5DCAA5]/85 hover:bg-[#0F6E56]/95 min-[375px]:pl-5 min-[375px]:text-[14px] sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14.5px] ${FOCUS_RING_DARK}`}
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#5DCAA5]" />
                    <span>Join WAMU</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] sm:h-10 sm:w-10">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}

        {/* Prominent Dark WhatsApp Smartphone Visual (2-col balanced on Tablet Portrait, 3-col on Laptop/Desktop) */}
        <div className="mx-auto mt-12 grid max-w-[920px] items-center gap-5 rounded-[24px] border border-[#5DCAA5]/20 bg-gradient-to-b from-[#13291C] to-[#0A140E] p-4 min-[375px]:p-6 sm:mt-14 sm:rounded-[28px] sm:p-8 md:grid-cols-2 lg:max-w-[980px] lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:p-10">
          <div className="space-y-3 text-left lg:order-1">
            <div className="wamu-glass-dark rounded-[16px] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
                Payments
              </p>
              <p className="mt-1 text-[13.5px]/[20px] text-[#EBF6F0]">
                Electricity, water, airtime &amp; school fees in one chat thread.
              </p>
            </div>
            <div className="wamu-glass-dark rounded-[16px] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
                Savings
              </p>
              <p className="mt-1 text-[13.5px]/[20px] text-[#EBF6F0]">
                Personal &amp; community targets with automatic WhatsApp reminders.
              </p>
            </div>
          </div>

          <div className="mx-auto w-[220px] overflow-hidden rounded-[24px] border border-[#5DCAA5]/30 bg-[#0D1A12] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.75)] min-[375px]:w-[250px] md:order-3 md:col-span-2 lg:order-2 lg:col-span-1 lg:w-[260px] xl:w-[275px]">
            <img
              src="/images/wamu-feature-savings.webp"
              alt="WAMU Pay WhatsApp menu showing savings goals, active goals and payout accounts"
              width={300}
              height={450}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="space-y-3 text-left lg:order-3">
            <div className="wamu-glass-dark rounded-[16px] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
                Groups &amp; SACCOs
              </p>
              <p className="mt-1 text-[13.5px]/[20px] text-[#EBF6F0]">
                Transparent contributions, rotation tracking &amp; share ledgers.
              </p>
            </div>
            <div className="wamu-glass-dark rounded-[16px] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
                Collections
              </p>
              <p className="mt-1 text-[13.5px]/[20px] text-[#EBF6F0]">
                Wedding, funeral &amp; community drives with transparent progress in WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
