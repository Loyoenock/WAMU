import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRoute } from '../lib/router';
import { FOCUS_RING_DARK, FOCUS_RING_LIGHT, waLink } from '../lib/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

type NavItem = {
  id: string;
  label: string;
  href: string;
  anchor?: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'solutions', label: 'Solutions', href: '/#solutions', anchor: 'solutions' },
  { id: 'how-it-works', label: 'How It Works', href: '/#how-it-works', anchor: 'how-it-works' },
  { id: 'who-we-serve', label: 'Who We Serve', href: '/#who-we-serve', anchor: 'who-we-serve' },
  { id: 'about', label: 'About', href: '/#difference', anchor: 'difference' },
  { id: 'faq', label: 'FAQs', href: '/#faq', anchor: 'faq' },
  { id: 'contact', label: 'Contact', href: '/#contact', anchor: 'contact' },
];

function isDarkBackground(el: Element): boolean {
  const bg = window.getComputedStyle(el).backgroundColor;
  const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return false;
  const alpha = match[4] !== undefined ? parseFloat(match[4]) : 1;
  if (alpha < 0.2) return false;
  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.35;
}

export function Navigation() {
  const pathname = useRoute();
  const [pillTheme, setPillTheme] = useState<'dark' | 'light'>(() =>
    pathname === '/' ? 'dark' : 'light'
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setPillTheme(pathname === '/' ? 'dark' : 'light');

    let rafId = 0;
    const detectBandUnderNav = () => {
      rafId = 0;
      const probeY = 44;
      const bands = document.querySelectorAll('main section, footer');
      for (let i = 0; i < bands.length; i += 1) {
        const band = bands[i];
        const rect = band.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          setPillTheme(isDarkBackground(band) ? 'dark' : 'light');
          return;
        }
      }
      setPillTheme(pathname === '/' ? 'dark' : 'light');
    };

    const scheduleCheck = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(detectBandUnderNav);
      }
    };

    const onScroll = () => {
      setMobileOpen(false);
      scheduleCheck();
    };

    detectBandUnderNav();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', scheduleCheck, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', scheduleCheck);
    };
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onClickOutside = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('touchstart', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside);
    };
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setMobileOpen(false);
    if (item.id === 'home' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (item.anchor && pathname === '/') {
      e.preventDefault();
      document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = pillTheme === 'dark';
  const focusRing = isDark ? FOCUS_RING_DARK : FOCUS_RING_LIGHT;

  return (
    <header
      ref={headerRef}
      data-site-nav="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] mx-auto flex max-w-[1280px] justify-center px-3 py-3 min-[375px]:px-4 min-[375px]:py-4 sm:px-6 sm:py-5 md:px-10 2xl:max-w-[1400px]"
    >
      <div className="pointer-events-auto relative w-full">
        {/* Detached Floating Liquid-Glass Pill Capsule */}
        <div
          className={`relative flex w-full items-center justify-between gap-2 rounded-full border py-1.5 pl-3 pr-1.5 backdrop-blur-xl transition-colors duration-500 min-[375px]:gap-3 min-[375px]:py-2 min-[375px]:pl-4 min-[375px]:pr-2 sm:pl-6 sm:pr-2 ${
            isDark
              ? 'border-white/25 bg-[#0D1A12]/65 text-white shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)]'
              : 'border-[#0F6E56]/20 bg-white/85 text-[#0D1A12] shadow-[0_14px_34px_-14px_rgba(13,26,18,0.14)]'
          }`}
        >
          {/* Specular Top Edge Highlight Layer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              boxShadow: isDark
                ? 'inset 0 1px 0 rgba(255,255,255,0.34), inset 0 0 0 1px rgba(255,255,255,0.08)'
                : 'inset 0 1px 0 rgba(255,255,255,0.95), inset 0 0 0 1px rgba(15,110,86,0.06)',
            }}
          />

          {/* Zone 1: Brand Identity */}
          <a
            href="/"
            onClick={(e) => {
              setMobileOpen(false);
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`relative z-10 flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full py-0.5 transition-colors duration-500 min-[375px]:gap-2.5 ${focusRing}`}
          >
            <img
              src="/wamu-mark.webp"
              alt="WAMU"
              width={26}
              height={26}
              className="h-6 w-6 rounded-[7px] min-[375px]:h-[26px] min-[375px]:w-[26px]"
            />
            <span
              className={`font-editorial text-[14px] font-bold tracking-[0.14em] transition-colors duration-500 min-[375px]:text-[15.5px] min-[375px]:tracking-[0.18em] ${
                isDark ? 'text-white' : 'text-[#0D1A12]'
              }`}
            >
              WAMU
            </span>
          </a>

          {/* Zone 2: Centered Streamlined Navigation Links (Top-to-Bottom Flow) */}
          <nav
            aria-label="Primary Navigation"
            className="relative z-10 hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' && pathname === '/';
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`shrink-0 whitespace-nowrap rounded-sm text-[13.5px] font-medium transition-colors duration-300 2xl:text-[14px] ${
                    isDark
                      ? isActive
                        ? 'text-[#5DCAA5]'
                        : 'text-white/80 hover:text-white'
                      : isActive
                        ? 'font-semibold text-[#0F6E56]'
                        : 'text-[#0D1A12]/75 hover:text-[#0F6E56]'
                  } ${focusRing}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Concentric Right Pill Action + Mobile Drawer Trigger */}
          <div className="relative z-10 flex shrink-0 items-center gap-1 min-[375px]:gap-1.5 sm:gap-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors duration-300 min-[375px]:gap-2 min-[375px]:px-4 min-[375px]:py-2 min-[375px]:text-[13px] sm:px-4.5 sm:text-[13.5px] ${
                isDark
                  ? 'bg-white text-[#0D1A12] hover:bg-[#EBF6F0]'
                  : 'bg-[#0D1A12] text-white hover:bg-[#0F6E56]'
              } ${focusRing}`}
            >
              <WhatsAppIcon
                className={`h-3.5 w-3.5 ${isDark ? 'text-[#0F6E56]' : 'text-[#5DCAA5]'}`}
              />
              <span>Join WAMU</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 min-[375px]:h-10 min-[375px]:w-10 lg:hidden ${
                isDark
                  ? 'text-white hover:bg-white/15'
                  : 'text-[#0D1A12] hover:bg-[#0F6E56]/10'
              } ${focusRing}`}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Floating Rounded Mobile Menu Panel (scrollable on short Mobile Landscape) */}
        {mobileOpen && (
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile Navigation"
            className={`mt-2.5 max-h-[calc(100svh-5.25rem)] overflow-y-auto overscroll-contain rounded-[24px] border p-4 backdrop-blur-xl transition-colors duration-300 lg:hidden ${
              isDark
                ? 'border-white/20 bg-[#0D1A12]/95 text-white shadow-[0_24px_48px_-16px_rgba(0,0,0,0.65)]'
                : 'border-[#C3E8D6] bg-white/95 text-[#0D1A12] shadow-[0_24px_48px_-16px_rgba(13,26,18,0.2)]'
            }`}
          >
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition-colors ${
                    isDark
                      ? 'text-[#EBF6F0] hover:bg-[#1A4029] hover:text-white'
                      : 'text-[#0D1A12] hover:bg-[#EBF6F0] hover:text-[#0F6E56]'
                  } ${focusRing}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div
              className={`my-2 grid grid-cols-1 gap-1 border-t pt-2 sm:grid-cols-3 ${
                isDark ? 'border-white/10' : 'border-[#C3E8D6]/80'
              }`}
            >
              <a
                href="/collections"
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-3.5 py-2 text-[14px] transition-colors ${
                  isDark
                    ? 'text-[#C3E8D6] hover:bg-[#1A4029]'
                    : 'text-[#2D4A38] hover:bg-[#EBF6F0]'
                } ${focusRing}`}
              >
                Collections
              </a>
              <a
                href="/faq"
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-3.5 py-2 text-[14px] transition-colors ${
                  isDark
                    ? 'text-[#C3E8D6] hover:bg-[#1A4029]'
                    : 'text-[#2D4A38] hover:bg-[#EBF6F0]'
                } ${focusRing}`}
              >
                Full FAQ
              </a>
              <a
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-3.5 py-2 text-[14px] transition-colors ${
                  isDark
                    ? 'text-[#C3E8D6] hover:bg-[#1A4029]'
                    : 'text-[#2D4A38] hover:bg-[#EBF6F0]'
                } ${focusRing}`}
              >
                Early Access &amp; Pricing
              </a>
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-1 flex w-full items-center justify-center gap-2 rounded-full py-3 text-[14px] font-semibold transition-colors ${
                isDark
                  ? 'bg-white text-[#0D1A12] hover:bg-[#EBF6F0]'
                  : 'bg-[#0D1A12] text-white hover:bg-[#0F6E56]'
              } ${focusRing}`}
            >
              <WhatsAppIcon
                className={`h-4 w-4 ${isDark ? 'text-[#0F6E56]' : 'text-[#5DCAA5]'}`}
              />
              <span>Join WAMU</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
