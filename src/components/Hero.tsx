import React, { useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WaMark } from './WaMark';
import { WamuHeroTransactionCarousel } from './WamuHeroTransactionCarousel';

const chips = [
  { label: 'MTN MoMo', dot: '#FFC403' },
  { label: 'Airtel Money', dot: '#ED1D24' },
  { label: 'Utilities first', dot: '#25D366' },
];

const USE_CASES = [
  { label: 'Airtime & Voice', href: '#utilities' },
  { label: 'Internet & Data', href: '#utilities' },
  { label: 'Electricity', href: '#utilities' },
  { label: 'Water', href: '#utilities' },
  { label: 'Taxes', href: '#utilities' },
  { label: 'Pay TV', href: '#utilities' },
  { label: 'Savings & groups', href: '#savings-and-groups' },
];

interface DotParticle {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  speedX: number;
  speedY: number;
  sizeScale: number;
  baseAlpha: number;
}

function pseudoRandom(r: number, c: number, salt: number): number {
  const n = Math.sin(r * 127.1 + c * 311.7 + salt * 74.7) * 43758.5453123;
  return n - Math.floor(n);
}

function HeroInteractiveDots({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let dots: DotParticle[] = [];

    const pointer = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      vx: 0,
      vy: 0,
      active: false,
    };

    // 20% fewer dots (increased spacing from 20 to 22.4 + slight random culling) and 30% tinier radius (1.15 * 0.7 = 0.805)
    const SPACING = 22.4;
    const BASE_RADIUS = 0.8;
    const INTERACTION_RADIUS = 135;
    const SPRING = 0.075;
    const DAMPING = 0.82;

    const buildGrid = () => {
      const rect = section.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const offsetX = (width - (cols - 1) * SPACING) * 0.5;
      const offsetY = (height - (rows - 1) * SPACING) * 0.5;

      const nextDots: DotParticle[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Slight random jitter in position, size, opacity, and drift phase
          const randX = pseudoRandom(r, c, 1);
          const randY = pseudoRandom(r, c, 2);
          const randPhase = pseudoRandom(r, c, 3);
          const randSize = pseudoRandom(r, c, 4);
          const randAlpha = pseudoRandom(r, c, 5);

          const jitterX = (randX - 0.5) * SPACING * 0.48;
          const jitterY = (randY - 0.5) * SPACING * 0.48;

          const ox = offsetX + c * SPACING + jitterX;
          const oy = offsetY + r * SPACING + jitterY;

          nextDots.push({
            ox,
            oy,
            x: ox,
            y: oy,
            vx: 0,
            vy: 0,
            phase: randPhase * Math.PI * 2,
            speedX: 1.1 + randX * 0.65,
            speedY: 1.0 + randY * 0.65,
            sizeScale: 0.84 + randSize * 0.32,
            baseAlpha: 0.26 + randAlpha * 0.16,
          });
        }
      }
      dots = nextDots;
    };

    buildGrid();

    const resizeObserver = new ResizeObserver(() => {
      buildGrid();
    });
    resizeObserver.observe(section);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;
      if (!pointer.active) {
        pointer.x = nx;
        pointer.y = ny;
      }
      pointer.targetX = nx;
      pointer.targetY = ny;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    section.addEventListener('pointermove', handlePointerMove, { passive: true });
    section.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    const startTime = performance.now();

    const render = (now: number) => {
      const t = (now - startTime) * 0.001;

      if (pointer.active) {
        const prevX = pointer.x;
        const prevY = pointer.y;
        pointer.x += (pointer.targetX - pointer.x) * 0.18;
        pointer.y += (pointer.targetY - pointer.y) * 0.18;
        pointer.vx = pointer.x - prevX;
        pointer.vy = pointer.y - prevY;
      } else {
        pointer.vx *= 0.9;
        pointer.vy *= 0.9;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#0F6E56';

      // Measure the navigation bar and mobile menu (if open) relative to the hero section so dots never render inside the navbar
      const sectionRect = section.getBoundingClientRect();
      const navEl = document.querySelector('.wamu-nav-pill-surface');
      const navRect = navEl ? navEl.getBoundingClientRect() : null;
      const navBounds = navRect
        ? {
            left: navRect.left - sectionRect.left - 6,
            right: navRect.right - sectionRect.left + 6,
            top: navRect.top - sectionRect.top - 6,
            bottom: navRect.bottom - sectionRect.top + 6,
          }
        : null;

      const rSq = INTERACTION_RADIUS * INTERACTION_RADIUS;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Continuous organic micro-drift with per-dot random speed & phase
        const waveX = Math.sin(t * d.speedX + d.phase) * 1.7 + Math.cos(t * 0.85 + d.oy * 0.022) * 1.0;
        const waveY = Math.cos(t * d.speedY + d.phase) * 1.7 + Math.sin(t * 0.8 + d.ox * 0.022) * 1.0;

        const targetHomeX = d.ox + waveX;
        const targetHomeY = d.oy + waveY;

        let proximity = 0;

        if (pointer.active) {
          const dx = d.x - pointer.x;
          const dy = d.y - pointer.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < rSq && distSq > 0.001) {
            const dist = Math.sqrt(distSq);
            const falloff = 1 - dist / INTERACTION_RADIUS;
            const eased = falloff * falloff;
            proximity = eased;

            const nx = dx / dist;
            const ny = dy / dist;

            // Smooth radial repulsion + cursor wake flow
            const push = eased * 2.5;
            d.vx += nx * push + pointer.vx * eased * 0.15;
            d.vy += ny * push + pointer.vy * eased * 0.15;
          }
        }

        // Elastic spring back toward living wave position
        d.vx += (targetHomeX - d.x) * SPRING;
        d.vy += (targetHomeY - d.y) * SPRING;
        d.vx *= DAMPING;
        d.vy *= DAMPING;

        d.x += d.vx;
        d.y += d.vy;

        // Do not draw dots inside the top navigation bar band or within the floating navbar pill bounds
        if (d.y < 84) continue;
        if (
          navBounds &&
          d.x >= navBounds.left &&
          d.x <= navBounds.right &&
          d.y >= navBounds.top &&
          d.y <= navBounds.bottom
        ) {
          continue;
        }

        const radius = BASE_RADIUS * d.sizeScale + proximity * 0.42;
        ctx.globalAlpha = d.baseAlpha + proximity * 0.4;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = window.requestAnimationFrame(render);
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [sectionRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#C3E8D6] px-6 md:px-12 lg:px-20 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-[124px] lg:pb-[64px]"
    >
      {/* Interactive Forest #0F6E56 micro-dot field with ambient drift and smooth cursor response */}
      <HeroInteractiveDots sectionRef={sectionRef} />

      <WaMark tone="light" className="left-[30px] top-[96px] h-[92px] w-[92px] z-[1]" />
      <WaMark tone="light" className="right-[24px] bottom-[48px] h-[104px] w-[104px] z-[1]" />

      <div className="relative z-[2] mx-auto flex max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Copy */}
        <div className="flex w-full max-w-[660px] flex-col items-start gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
            UTILITY PAYMENTS &amp; GROUP SAVINGS
          </p>

          <h1 className="flex flex-col font-[Fraunces,ui-serif,Georgia,serif] font-bold text-[34px]/[38px] md:text-[46px]/[50px] lg:text-[58px]/[64px]">
            <span className="text-[#0D2016]">Everyday payments,</span>
            <span className="text-[#1A4029] lg:leading-[61px]">right in WhatsApp.</span>
          </h1>

          <p className="max-w-[520px] text-[16px]/[26px] text-[#1A4029]">
            Start with utilities, then manage the savings goals and groups that matter to you.
          </p>

          <div className="flex flex-wrap gap-[10px]">
            {chips.map((c) => (
              <span
                key={c.label}
                className="flex items-center gap-[7px] rounded-full bg-[#0B6B45] px-[14px] py-[7px]"
              >
                <span
                  className="h-[7px] w-[7px] shrink-0 rounded-full"
                  style={{ backgroundColor: c.dot }}
                  aria-hidden="true"
                />
                <span className="text-[12px] font-medium text-[#FDFAF4]">{c.label}</span>
              </span>
            ))}
            <span className="flex items-center gap-[7px] rounded-full bg-[#0B6B45] px-[14px] py-[7px]">
              <ShieldCheck className="w-[13px] shrink-0" style={{ color: '#D4A017' }} aria-hidden="true" />
              <span className="text-[12px] font-medium text-[#FDFAF4]">No app needed</span>
            </span>
          </div>

          <a
            href="#utilities"
            className="wamu-liquid-btn-forest mt-1 inline-flex items-center gap-[10px] rounded-full px-[32px] py-[17px] text-[15px] font-bold text-[#0D2016] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] text-[#0D2016]" />
            Explore utilities
          </a>
        </div>

        {/* Transaction Showcase Carousel */}
        <WamuHeroTransactionCarousel />
      </div>

      {/* Use-case strip: every group and occasion WAMU runs, one tap from the fold. */}
      <div className="relative z-[2] mx-auto mt-12 flex max-w-[1280px] flex-col gap-[14px] border-t border-[#0F6E56]/20 pt-8 lg:mt-14 lg:flex-row lg:items-center lg:gap-[20px]">
        <span className="shrink-0 text-[11px] font-bold uppercase tracking-[2px] text-[#0F6E56]">
          EXPLORE WAMU
        </span>
        <div className="flex flex-row flex-wrap gap-[10px]">
          {USE_CASES.map((u) => (
            <a
              key={u.label}
              href={u.href}
              className="wamu-liquid-btn-light rounded-full px-[16px] py-[8px] text-[13px] font-medium text-[#0D2016] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2"
            >
              {u.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

