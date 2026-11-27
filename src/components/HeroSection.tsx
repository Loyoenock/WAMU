import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Smartphone,
  Zap,
} from 'lucide-react';
import { FOCUS_RING_DARK, waLink } from '../lib/siteConfig';
import { AirtelBadge, MtnBadge, NwscBadge, UedclBadge } from './PaymentBrandBadges';
import { OutgoingBubble } from './WhatsAppMockups';

interface HeroSlide {
  id: 'electricity' | 'water' | 'airtime';
  shortLabel: string;
  category: string;
  prompt: string;
  title: string;
  image: string;
  alt: string;
  details: string;
  Icon: typeof Zap;
}

const SLIDES: HeroSlide[] = [
  {
    id: 'electricity',
    shortLabel: 'UEDCL',
    category: 'Utility payment',
    prompt: 'Pay UEDCL Yaka meter 1425 0089 12',
    title: 'UEDCL Electricity Token',
    image: '/images/hero-uedcl.webp',
    alt: 'Hand holding smartphone showing a UEDCL electricity payment confirmation and token inside WAMU Pay on WhatsApp',
    details: 'Launching 2nd week of Dec · Instant token',
    Icon: Zap,
  },
  {
    id: 'water',
    shortLabel: 'NWSC',
    category: 'Utility payment',
    prompt: 'Check NWSC water balance & pay bill',
    title: 'NWSC Water Bill Settled',
    image: '/images/hero-nwsc.webp',
    alt: 'Hand holding smartphone showing an NWSC water balance check and payment confirmation inside WAMU Pay on WhatsApp',
    details: 'Launching 2nd week of Dec · Receipt saved',
    Icon: Droplets,
  },
  {
    id: 'airtime',
    shortLabel: 'Airtime',
    category: 'Mobile recharge',
    prompt: 'Buy UGX 10,000 MTN airtime',
    title: 'MTN & Airtel Airtime',
    image: '/images/hero-airtime.webp',
    alt: 'Hand holding smartphone showing an MTN and Airtel airtime purchase confirmation inside WAMU Pay on WhatsApp',
    details: 'Launching 2nd week of Dec · Zero app download',
    Icon: Smartphone,
  },
];

const HERO_SCENES = [
  {
    src: '/images/hero.webp',
    alt: 'Members of an East African savings group smiling together during a meeting',
  },
  {
    src: '/images/how-it-works.webp',
    alt: 'A customer using WhatsApp at an MTN and Airtel Mobile Money kiosk in Uganda',
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = Boolean(useReducedMotion());
  const touchStartX = useRef<number | null>(null);

  const activeSlide = SLIDES[activeIndex];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(nextSlide, 6000);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, nextSlide]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setSceneIndex((prev) => (prev + 1) % HERO_SCENES.length);
    }, 7500);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[min(100svh,700px)] w-full items-center overflow-hidden bg-[#0D1A12] text-white sm:min-h-[min(96svh,780px)] lg:min-h-[min(92svh,860px)] 2xl:min-h-[880px]"
    >
      {/* Full-Bleed Scenic Background Photography Crossfade */}
      <div aria-hidden="true" className="absolute inset-0">
        {HERO_SCENES.map((scene, idx) => (
          <img
            key={scene.src}
            src={scene.src}
            alt=""
            width={1408}
            height={768}
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchPriority={idx === 0 ? 'high' : 'auto'}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out ${
              sceneIndex === idx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Multi-Layer Editorial Scrims for High-Contrast Foreground Legibility */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#0D1A12]/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0D1A12]/92 via-[#0D1A12]/70 to-[#0D1A12]/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0D1A12] via-transparent to-[#0D1A12]/55"
      />

      {/* Responsive Two-Column Editorial Hero Container */}
      <div className="wamu-hero-container relative z-10 mx-auto w-full max-w-[1280px] px-4 pt-24 pb-12 min-[375px]:px-6 sm:pt-28 sm:pb-16 md:px-10 lg:px-16 lg:pt-32 lg:pb-20 2xl:max-w-[1400px]">
        <div className="wamu-hero-grid grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,430px)] lg:gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,450px)] xl:gap-12 2xl:grid-cols-[minmax(0,1.12fr)_minmax(0,480px)]">
          {/* Left Column: Editorial Headline + Glass Pill CTA */}
          <div className="text-left">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#5DCAA5] min-[375px]:text-[11.5px] min-[375px]:tracking-[0.18em]">
              FINANCIAL SERVICES, CONNECTED THROUGH WHATSAPP
            </p>

            <h1
              id="hero-heading"
              className="wamu-hero-heading mt-3 font-editorial text-balance text-[31px]/[1.1] font-bold tracking-[-0.02em] text-white min-[375px]:text-[36px]/[1.08] sm:mt-4 sm:text-[48px]/[1.06] md:text-[52px]/[1.05] lg:text-[56px]/[1.05] xl:text-[62px]/[1.04] 2xl:text-[66px]/[1.04]"
            >
              Your financial world.{' '}
              <span className="text-[#C3E8D6]">Together on WhatsApp.</span>
            </h1>

            <p className="mt-4 max-w-[54ch] text-[14.5px]/[23px] text-[#EBF6F0]/90 min-[375px]:text-[15.5px]/[25px] sm:mt-5 md:text-[17px]/[27px]">
              From everyday payments to savings and group finances on WhatsApp—utilities launch by
              the second week of December while we polish SACCO, VSLA and savings.
            </p>

            {/* Primary Signature Glass Pill CTA + Secondary Explore Action */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex w-fit items-center gap-2.5 rounded-full border border-white/30 bg-white/10 py-1.5 pl-5 pr-1.5 text-[14px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#5DCAA5]/75 hover:bg-white/15 sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[15px] ${FOCUS_RING_DARK}`}
              >
                <span>Join WAMU</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0D1A12] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] sm:h-10 sm:w-10">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>

              <a
                href="#solutions"
                className={`wamu-magie-btn-dark-secondary group inline-flex w-fit items-center gap-2.5 py-1.5 pl-5 pr-1.5 text-[13.5px] font-semibold hover:scale-[1.02] sm:gap-3 sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14.5px] ${FOCUS_RING_DARK}`}
              >
                <span>Explore WAMU</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#5DCAA5]/30 bg-[#1A4029] text-[#5DCAA5] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5DCAA5] group-hover:text-[#0D1A12] sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>

            {/* Inline Supported Mobile Money Channels */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-medium text-[#C3E8D6] sm:mt-8 sm:gap-x-4 sm:text-[12.5px]">
              <span>One familiar conversation</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="inline-flex items-center gap-2">
                <MtnBadge size="sm" />
                <span>MTN MoMo</span>
              </span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="inline-flex items-center gap-2">
                <AirtelBadge size="sm" />
                <span>Airtel Money</span>
              </span>
            </div>
          </div>

          {/* Right Column: Floating Translucent Conversation + WAMU Pay Preview Stack */}
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="WAMU Pay WhatsApp transaction demonstrations"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              touchStartX.current = null;
              if (delta < -40) nextSlide();
              else if (delta > 40) prevSlide();
            }}
            className="w-full max-w-[460px] justify-self-center md:max-w-[520px] lg:max-w-[450px] lg:justify-self-end 2xl:max-w-[480px]"
          >
            <div className="wamu-glass-dark relative overflow-hidden rounded-[22px] p-3.5 min-[375px]:p-4 sm:rounded-[26px] sm:p-5">
              {/* Top Interactive Switcher Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div
                  role="tablist"
                  aria-label="Choose WAMU transaction preview"
                  className="flex flex-wrap items-center gap-1 min-[375px]:gap-1.5"
                >
                  {SLIDES.map((slide, idx) => {
                    const selected = idx === activeIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setActiveIndex(idx)}
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors min-[375px]:gap-1.5 min-[375px]:px-3 min-[375px]:py-1.5 min-[375px]:text-[12px] ${
                          selected
                            ? 'bg-[#1D9E75] text-white shadow-sm'
                            : 'bg-white/10 text-[#C3E8D6] hover:bg-white/15 hover:text-white'
                        } ${FOCUS_RING_DARK}`}
                      >
                        {slide.id === 'electricity' ? (
                          <img
                            src="/images/uedcl.webp"
                            alt=""
                            width={16}
                            height={16}
                            className="h-4 w-4 rounded-full bg-white object-contain p-[1px]"
                          />
                        ) : slide.id === 'water' ? (
                          <img
                            src="/images/nwsc.webp"
                            alt=""
                            width={16}
                            height={16}
                            className="h-4 w-4 rounded-full bg-white object-contain p-[1px]"
                          />
                        ) : (
                          <slide.Icon className="h-3 w-3" aria-hidden="true" />
                        )}
                        <span>{slide.shortLabel}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous showcase slide"
                    className={`flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition-colors hover:border-[#5DCAA5]/50 hover:bg-white/15 ${FOCUS_RING_DARK}`}
                  >
                    <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next showcase slide"
                    className={`flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition-colors hover:border-[#5DCAA5]/50 hover:bg-white/15 ${FOCUS_RING_DARK}`}
                  >
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Stacked Conversational Prompt + Visual Phone Frame */}
              <div className="mt-3 space-y-2.5 sm:mt-3.5 sm:space-y-3">
                <OutgoingBubble text={activeSlide.prompt} time="9:41 AM" dark />

                <div className="wamu-hero-preview-frame relative flex h-[220px] items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-[#0B1710]/85 p-2 min-[375px]:h-[250px] sm:h-[290px] lg:h-[300px] 2xl:h-[330px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide.id}
                      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <img
                        src={activeSlide.image}
                        alt={activeSlide.alt}
                        width={960}
                        height={720}
                        loading={activeIndex === 0 ? 'eager' : 'lazy'}
                        referrerPolicy="no-referrer"
                        className="wamu-hero-phone-img h-full w-full scale-[1.12] object-contain sm:scale-[1.14]"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Live Activity Summary Caption */}
                <div className="flex items-center justify-between gap-3 rounded-[14px] border border-white/10 bg-[#0B1710]/70 px-3.5 py-2.5">
                  <div className="flex items-center gap-2.5">
                    {activeSlide.id === 'electricity' && <UedclBadge size="sm" />}
                    {activeSlide.id === 'water' && <NwscBadge size="sm" />}
                    {activeSlide.id === 'airtime' && <MtnBadge size="sm" />}
                    <div>
                      <p className="text-[12.5px] font-semibold text-white">{activeSlide.title}</p>
                      <p className="text-[11.5px] text-[#9FBEAA]">{activeSlide.details}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold text-[#5DCAA5]">
                    WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
