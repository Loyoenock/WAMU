import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Zap,
  Droplets,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '../lib/utils';

export type TransactionAccentType = 'electricity' | 'water' | 'mobile';

export interface TransactionSlideConfig {
  id: 'electricity' | 'water' | 'airtime';
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  accent: TransactionAccentType;
  details: [string, string, string];
  statusLabel: string;
  ambientGradient: string;
  glowColor: string;
}

export const TRANSACTION_SLIDES: readonly TransactionSlideConfig[] = [
  {
    id: 'electricity',
    category: 'UTILITY PAYMENT',
    title: 'Electricity Payments',
    description:
      'Pay your UEDCL electricity bills directly through WhatsApp. Simple, convenient and secure.',
    image: '/assets/aistudio/ChatGPT_Image_Nov_17__2026__08_01_19_PM_6b8c0005.png',
    alt: 'Smartphone showing a completed UEDCL electricity bill payment and token receipt inside WAMU Pay on WhatsApp',
    accent: 'electricity',
    details: ['UEDCL', 'Electricity bill payment', 'WhatsApp transaction'],
    statusLabel: 'UEDCL PAYMENT',
    ambientGradient:
      'radial-gradient(circle at 62% 44%, rgba(45, 106, 79, 0.52) 0%, rgba(26, 64, 41, 0.34) 45%, rgba(13, 32, 22, 0.96) 100%)',
    glowColor: 'rgba(64, 145, 108, 0.36)',
  },
  {
    id: 'water',
    category: 'UTILITY PAYMENT',
    title: 'Water Bill Payments',
    description:
      'Check your NWSC water balance and pay your water bills conveniently through WhatsApp.',
    image: '/assets/aistudio/ChatGPT_Image_Nov_17__2026__08_20_30_PM_0e52f438.png',
    alt: 'Smartphone showing an NWSC water balance check and instant bill payment confirmation inside WAMU Pay on WhatsApp',
    accent: 'water',
    details: ['NWSC', 'Water bill payment', 'WhatsApp transaction'],
    statusLabel: 'NWSC WATER',
    ambientGradient:
      'radial-gradient(circle at 60% 42%, rgba(74, 144, 114, 0.48) 0%, rgba(29, 77, 56, 0.34) 46%, rgba(12, 30, 18, 0.96) 100%)',
    glowColor: 'rgba(82, 183, 136, 0.32)',
  },
  {
    id: 'airtime',
    category: 'MOBILE SERVICES',
    title: 'Instant Airtime',
    description:
      'Recharge MTN and Airtel numbers directly through WhatsApp. Stay connected without switching applications.',
    image: '/assets/aistudio/WAMU_Pay_Airtime_Purchase_Success_172950d7.png',
    alt: 'Smartphone showing an instant MTN and Airtel airtime recharge completed inside WAMU Pay on WhatsApp',
    accent: 'mobile',
    details: ['MTN', 'Airtel', 'Airtime purchase'],
    statusLabel: 'INSTANT AIRTIME',
    ambientGradient:
      'radial-gradient(circle at 64% 46%, rgba(38, 92, 62, 0.50) 0%, rgba(20, 52, 33, 0.38) 46%, rgba(10, 25, 16, 0.97) 100%)',
    glowColor: 'rgba(45, 106, 79, 0.38)',
  },
];

const ACCENT_ICONS: Record<TransactionAccentType, LucideIcon> = {
  electricity: Zap,
  water: Droplets,
  mobile: Smartphone,
};

const AUTOPLAY_INTERVAL_MS = 6000;
const SWIPE_THRESHOLD_PX = 40;

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2016]';

function TransactionAccent({ accent }: { accent: TransactionAccentType }) {
  const Icon = ACCENT_ICONS[accent];
  return (
    <span
      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-[#8CE0B1] shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]"
      aria-hidden="true"
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
    </span>
  );
}

function TransactionImage({
  slide,
  direction,
  isFirstSlide,
  reduceMotion,
}: {
  key?: React.Key;
  slide: TransactionSlideConfig;
  direction: number;
  isFirstSlide: boolean;
  reduceMotion: boolean;
}) {
  const variants = {
    enter: (dir: number) =>
      reduceMotion
        ? { opacity: 0, x: 0, scale: 1 }
        : { opacity: 0, x: dir >= 0 ? 34 : -34, scale: 0.965 },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (dir: number) =>
      reduceMotion
        ? { opacity: 0, x: 0, scale: 1 }
        : { opacity: 0, x: dir >= 0 ? -28 : 28, scale: 0.965 },
  };

  return (
    <motion.div
      key={slide.id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: reduceMotion ? 0.2 : 0.82,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex h-full w-full items-center justify-center select-none sm:translate-x-[14%] lg:translate-x-[15%]"
    >
      <img
        src={slide.image}
        alt={slide.alt}
        width={1448}
        height={1086}
        loading={isFirstSlide ? 'eager' : 'lazy'}
        fetchPriority={isFirstSlide ? 'high' : 'auto'}
        decoding="async"
        draggable={false}
        referrerPolicy="no-referrer"
        className="wamu-hero-phone-img pointer-events-none block h-full w-full scale-[1.3] origin-[50%_52%] object-contain"
      />
    </motion.div>
  );
}

function GlassInfoCard({
  slide,
  direction,
  reduceMotion,
}: {
  key?: React.Key;
  slide: TransactionSlideConfig;
  direction: number;
  reduceMotion: boolean;
}) {
  const cardVariants = {
    enter: (dir: number) =>
      reduceMotion
        ? { opacity: 0, y: 0, x: 0, scale: 1 }
        : { opacity: 0, y: 14, x: dir >= 0 ? 12 : -12, scale: 0.97 },
    center: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
    exit: (dir: number) =>
      reduceMotion
        ? { opacity: 0, y: 0, x: 0, scale: 1 }
        : { opacity: 0, y: 8, x: dir >= 0 ? -14 : 14, scale: 0.975 },
  };

  return (
    <motion.div
      key={`card-${slide.id}`}
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: reduceMotion ? 0.2 : 0.72,
        delay: reduceMotion ? 0 : 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full sm:w-auto"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 5.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
        className="wamu-liquid-glass-card relative w-full rounded-[20px] p-3.5 sm:max-w-[238px] sm:p-3.5 lg:max-w-[218px] xl:max-w-[248px] xl:p-4"
      >
        {/* Top Row: Category + Accent Icon */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold tracking-[0.14em] text-[#9EE6BE]">
            {slide.category}
          </span>
          <TransactionAccent accent={slide.accent} />
        </div>

        {/* Heading */}
        <h2 className="mt-1.5 font-[Fraunces,ui-serif,Georgia,serif] text-[17px]/[22px] font-bold text-[#FDFAF4] sm:text-[18px]/[23px] xl:text-[19px]/[24px]">
          {slide.title}
        </h2>

        {/* Description */}
        <p className="mt-1 text-[12px]/[17px] text-[#DCECE2] xl:text-[12.5px]/[18px]">
          {slide.description}
        </p>

        {/* Subtle divider + unboxed transaction metadata */}
        <div className="mt-2.5 border-t border-white/15 pt-2">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] font-medium text-[#B5D8C3]">
            <span>{slide.details[0]}</span>
            <span aria-hidden="true" className="text-white/40">
              ·
            </span>
            <span>{slide.details[1]}</span>
            <span aria-hidden="true" className="text-white/40">
              ·
            </span>
            <span>{slide.details[2]}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CarouselIndicators({
  slides,
  activeIndex,
  onSelect,
}: {
  slides: readonly TransactionSlideConfig[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Choose transaction showcase slide"
      className="flex items-center gap-2"
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={slide.id}
            type="button"
            role="tab"
            id={`hero-slide-tab-${slide.id}`}
            aria-selected={isActive}
            aria-controls={`hero-slide-panel-${slide.id}`}
            aria-label={`Slide ${index + 1}: ${slide.title}`}
            onClick={() => onSelect(index)}
            className={cn(
              'group relative flex h-6 items-center justify-center py-2 transition-opacity duration-200',
              FOCUS_RING,
              'rounded-full'
            )}
          >
            <span
              className={cn(
                'block h-2 rounded-full transition-all duration-300 ease-out',
                isActive
                  ? 'w-7 bg-[#52B788] shadow-[0_0_12px_rgba(82,183,136,0.65)]'
                  : 'w-2 bg-white/35 group-hover:bg-white/60'
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

function CarouselControls({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous transaction slide"
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#FDFAF4] backdrop-blur-md transition-[background-color,border-color,transform] duration-150 hover:border-white/35 hover:bg-white/20 active:scale-95',
          FOCUS_RING
        )}
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next transaction slide"
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#FDFAF4] backdrop-blur-md transition-[background-color,border-color,transform] duration-150 hover:border-white/35 hover:bg-white/20 active:scale-95',
          FOCUS_RING
        )}
      >
        <ChevronRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
      </button>
    </div>
  );
}

export function WamuHeroTransactionCarousel() {
  const [[activeIndex, direction], setSlideState] = useState<[number, number]>([0, 1]);
  const [isPaused, setIsPaused] = useState(false);
  const [interactionTick, setInteractionTick] = useState(0);
  const reduceMotion = Boolean(useReducedMotion());
  const pointerStartXRef = useRef<number | null>(null);
  const pointerStartYRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideCount = TRANSACTION_SLIDES.length;
  const activeSlide = TRANSACTION_SLIDES[activeIndex];

  // Preload all three slide images on mount so transitions never flicker or show empty frames
  useEffect(() => {
    TRANSACTION_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const goToSlide = useCallback(
    (nextIndex: number, explicitDirection?: number, isUserAction = false) => {
      setSlideState(([prevIndex]) => {
        const normalized = ((nextIndex % slideCount) + slideCount) % slideCount;
        if (normalized === prevIndex) return [prevIndex, 1];
        const dir =
          explicitDirection !== undefined
            ? explicitDirection
            : normalized > prevIndex
              ? 1
              : -1;
        return [normalized, dir];
      });
      if (isUserAction) {
        setInteractionTick((t) => t + 1);
      }
    },
    [slideCount]
  );

  const handleNext = useCallback(
    (isUserAction = true) => {
      setSlideState(([prevIndex]) => [((prevIndex + 1) % slideCount), 1]);
      if (isUserAction) {
        setInteractionTick((t) => t + 1);
      }
    },
    [slideCount]
  );

  const handlePrev = useCallback(() => {
    setSlideState(([prevIndex]) => [
      ((prevIndex - 1 + slideCount) % slideCount),
      -1,
    ]);
    setInteractionTick((t) => t + 1);
  }, [slideCount]);

  // Automatic 6-second rotation with clean cleanup and pause/reset support
  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setSlideState(([prevIndex]) => [((prevIndex + 1) % slideCount), 1]);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, interactionTick, slideCount]);

  const handleFocusCapture = () => {
    setIsPaused(true);
  };

  const handleBlurCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(e.relatedTarget as Node | null)) {
      setIsPaused(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext(true);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerStartXRef.current = e.clientX;
    pointerStartYRef.current = e.clientY;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartXRef.current === null || pointerStartYRef.current === null) return;
    const deltaX = e.clientX - pointerStartXRef.current;
    const deltaY = e.clientY - pointerStartYRef.current;
    pointerStartXRef.current = null;
    pointerStartYRef.current = null;

    if (Math.abs(deltaX) >= SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext(true);
      } else {
        handlePrev();
      }
    }
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="WAMU Pay WhatsApp transaction showcase"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className={cn(
        'hero-media relative isolate flex w-full max-w-[580px] shrink-0 flex-col justify-between overflow-hidden rounded-[24px] bg-[#0D2016] shadow-[0_28px_60px_-18px_rgba(12,30,18,0.42)] lg:h-[520px] lg:w-[440px] xl:h-[560px] xl:w-[580px] touch-pan-y',
        FOCUS_RING
      )}
    >
      {/* Ambient slide-specific WAMU Forest / Canopy / Midnight illumination */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`ambient-${activeSlide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.85, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 z-0"
          style={{ backgroundImage: activeSlide.ambientGradient }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Atmospheric radial glow behind the smartphone */}
      <motion.div
        aria-hidden="true"
        animate={{ backgroundColor: activeSlide.glowColor }}
        transition={{ duration: reduceMotion ? 0.15 : 0.85, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[8%] top-[10%] z-0 h-[68%] w-[68%] rounded-full blur-[56px]"
      />

      {/* Carousel Viewport */}
      <div
        id={`hero-slide-panel-${activeSlide.id}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeIndex + 1} of ${slideCount}: ${activeSlide.title}`}
        className="relative z-[1] flex flex-1 flex-col justify-between p-3.5 sm:p-5 lg:p-5 xl:p-6"
      >
        {/* Dominant Smartphone Transaction Mockup Stage */}
        <div className="relative flex h-[280px] w-full items-center justify-center sm:h-[420px] lg:h-[416px] xl:h-[448px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <TransactionImage
              key={activeSlide.id}
              slide={activeSlide}
              direction={direction}
              isFirstSlide={activeIndex === 0}
              reduceMotion={reduceMotion}
            />
          </AnimatePresence>
        </div>

        {/* Floating Liquid-Glass Information Card:
            - On sm+ screens: floats over the lower-left negative space beside the hand/phone without covering the WhatsApp confirmation receipt.
            - On mobile (<640px): docks cleanly below the phone stage so 0% of the WhatsApp screen is obscured. */}
        <div className="relative z-[2] mt-2 sm:absolute sm:bottom-[54px] sm:left-5 sm:mt-0 lg:bottom-[52px] lg:left-4 xl:bottom-[58px] xl:left-6">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <GlassInfoCard
              key={activeSlide.id}
              slide={activeSlide}
              direction={direction}
              reduceMotion={reduceMotion}
            />
          </AnimatePresence>
        </div>

        {/* Bottom Bar: Slide Indicators & Minimal Glass Navigation Arrows */}
        <div className="relative z-[3] mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 sm:mt-0 sm:border-t-0 sm:pt-0">
          <CarouselIndicators
            slides={TRANSACTION_SLIDES}
            activeIndex={activeIndex}
            onSelect={(index) => goToSlide(index, undefined, true)}
          />
          <CarouselControls onPrev={handlePrev} onNext={() => handleNext(true)} />
        </div>
      </div>
    </div>
  );
}
