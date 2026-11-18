import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { WhatsAppIcon } from './WhatsAppIcon';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5] focus-visible:ring-offset-2';

type NavLink = { id: string; target: string; label: string; muted?: boolean; href?: string };

const NAV_LINKS: NavLink[] = [
  { id: 'nav-utilities', target: 'utilities', label: 'Utilities' },
  { id: 'nav-how', target: 'how-it-works', label: 'How It Works' },
  { id: 'nav-products', target: 'savings-and-groups', label: 'Savings & Groups' },
  { id: 'nav-collections', target: 'collections', label: 'Collections', href: '/collections' },
  { id: 'nav-security', target: 'security', label: 'Security' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 50);
    setMobileMenuOpen((open) => (open ? false : open));
  });

  const onHome = () => typeof window !== 'undefined' && window.location.pathname === '/';

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileMenuOpen(false);
    // On the home page, scroll smoothly. Elsewhere, let the "/#id" link navigate home.
    if (onHome()) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (onHome()) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <div className="fixed left-0 right-0 top-3 z-[80] mx-auto w-[min(calc(100%-24px),1180px)] sm:top-4">
      <header
        ref={menuRef}
        data-scrolled={scrolled}
        className="wamu-nav-pill-surface relative w-full rounded-full transition-[background-color,box-shadow,border-color] duration-200 ease-out motion-reduce:transition-none"
      >
        {/* Liquid-glass top specular light refraction streak */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/95 to-transparent"
        />
        <div className="flex h-[56px] items-center justify-between py-2 pl-5 pr-3 md:h-[60px]">
          <a
            id="nav-logo"
            href="/"
            onClick={goHome}
            className={cn('flex shrink-0 items-center gap-[6px] rounded-full px-1 py-0.5', FOCUS_RING)}
          >
            <img
              src="/wamu-mark.png"
              alt="WAMU"
              width={28}
              height={28}
              className="h-7 w-7 rounded-[7px]"
            />
            <span className="font-[Fraunces,ui-serif,Georgia,serif] text-[15px] font-bold tracking-[3px] text-[#0D2016]">
              WAMU
            </span>
          </a>

          <nav aria-label="Main Navigation" className="hidden items-center gap-0.5 md:flex lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = Boolean(link.href && pathname === link.href);
              return (
                <a
                  key={link.id}
                  id={`${link.id}-desktop`}
                  href={link.href ?? `/#${link.target}`}
                  onClick={(e) => (link.href ? setMobileMenuOpen(false) : smoothScroll(e, link.target))}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-[background-color,color,box-shadow] duration-150 ease-out motion-reduce:transition-none lg:px-3.5 lg:text-[14px]',
                    isActive
                      ? 'bg-white/45 font-semibold text-[#0D2016] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]'
                      : link.muted
                        ? 'text-[#1A4029] hover:bg-white/35 hover:text-[#0D2016] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]'
                        : 'text-[#0D2016] hover:bg-white/35 hover:text-[#0D2016] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]',
                    FOCUS_RING
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <a
            id="nav-cta-desktop"
            href="https://wa.me/256788003344"
            className={cn(
              'wamu-nav-cta-btn hidden shrink-0 items-center gap-[8px] whitespace-nowrap rounded-full bg-[#0B6B45] px-4 py-2.5 text-[13px] font-bold text-[#FDFAF4] motion-reduce:transition-none md:inline-flex lg:px-5',
              FOCUS_RING
            )}
          >
            <WhatsAppIcon className="h-[15px] w-[15px] text-[#9CECC9]" />
            Message WAMU
          </a>

          <button
            id="nav-mobile-menu-btn"
            className={cn(
              'wamu-nav-cta-btn rounded-full bg-[#0B6B45] p-2 text-[#FDFAF4] motion-reduce:transition-none md:hidden',
              FOCUS_RING
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              data-scrolled={scrolled}
              className="wamu-nav-pill-surface absolute left-0 right-0 top-[calc(100%+8px)] flex w-full flex-col gap-1.5 rounded-[28px] p-4 md:hidden"
            >
              {NAV_LINKS.map((link) => {
                const isActive = Boolean(link.href && pathname === link.href);
                return (
                  <a
                    key={link.id}
                    id={`${link.id}-mobile`}
                    href={link.href ?? `/#${link.target}`}
                    onClick={(e) => (link.href ? setMobileMenuOpen(false) : smoothScroll(e, link.target))}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'rounded-full px-4 py-3 text-[14px] font-medium transition-[background-color,color,box-shadow] duration-150 ease-out motion-reduce:transition-none',
                      isActive
                        ? 'bg-white/45 font-semibold text-[#0D2016] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]'
                        : link.muted
                          ? 'text-[#1A4029] hover:bg-white/35 hover:text-[#0D2016]'
                          : 'text-[#0D2016] hover:bg-white/35 hover:text-[#0D2016]',
                      FOCUS_RING
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                id="nav-cta-mobile"
                href="https://wa.me/256788003344"
                className={cn(
                  'wamu-nav-cta-btn mt-2 flex w-full items-center justify-center gap-[8px] rounded-full bg-[#0B6B45] px-5 py-3 text-center text-[13px] font-bold text-[#FDFAF4] motion-reduce:transition-none',
                  FOCUS_RING
                )}
              >
                <WhatsAppIcon className="h-[15px] w-[15px] text-[#9CECC9]" />
                Message WAMU
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
