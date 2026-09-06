import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { WhatsAppIcon } from './WhatsAppIcon';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2';

type NavLink = { id: string; target: string; label: string; muted?: boolean };

const NAV_LINKS: NavLink[] = [
  { id: 'nav-how', target: 'how-it-works', label: 'How It Works' },
  { id: 'nav-products', target: 'products', label: 'Products' },
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

  return (
    <div className="fixed left-0 right-0 top-0 z-[80] px-3 pt-3 sm:px-4 sm:pt-4">
      <header
        ref={menuRef}
        className={cn(
          'relative mx-auto max-w-[1200px] rounded-[18px] border border-[#E4DED2] bg-[#FDFAF4] transition-shadow duration-300',
          scrolled
            ? 'shadow-[0_12px_32px_rgba(13,32,22,0.14)]'
            : 'shadow-[0_6px_20px_rgba(13,32,22,0.07)]'
        )}
      >
        <div className="flex h-[60px] items-center justify-between px-5 lg:px-8">
          <a
            id="nav-logo"
            href="/"
            onClick={goHome}
            className={cn('flex items-center gap-[6px] rounded-sm', FOCUS_RING)}
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

          <nav aria-label="Main Navigation" className="hidden items-center gap-[36px] md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                id={`${link.id}-desktop`}
                href={`/#${link.target}`}
                onClick={(e) => smoothScroll(e, link.target)}
                className={cn(
                  'rounded-sm text-[14px] transition-colors hover:text-[#0D2016]',
                  link.muted ? 'text-[#0D2016] opacity-[0.72]' : 'text-[#5A7A65]',
                  FOCUS_RING
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            id="nav-cta-desktop"
            href="https://wa.me/256788003344"
            className={cn(
              'hidden items-center gap-[8px] rounded-[6px] bg-[#E8A020] p-[10px_22px] text-[13px] font-bold text-[#0D2016] transition-[opacity,transform] duration-200 hover:opacity-90 active:translate-y-[1px] md:inline-flex',
              FOCUS_RING
            )}
          >
            <WhatsAppIcon className="h-[15px] w-[15px] text-[#0D2016]" />
            Start on WhatsApp
          </a>

          <button
            id="nav-mobile-menu-btn"
            className={cn('rounded-sm p-1 text-[#5A7A65] transition-colors hover:text-[#0D2016] md:hidden', FOCUS_RING)}
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
              className="absolute left-0 right-0 top-[calc(100%+8px)] flex w-full flex-col gap-2 rounded-[18px] border border-[#E4DED2] bg-[#FDFAF4] px-6 py-6 shadow-[0_16px_32px_rgba(13,32,22,0.12)] md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  id={`${link.id}-mobile`}
                  href={`/#${link.target}`}
                  onClick={(e) => smoothScroll(e, link.target)}
                  className={cn(
                    'rounded-sm py-3 text-[14px] transition-colors hover:text-[#0D2016]',
                    link.muted ? 'text-[#0D2016] opacity-[0.72]' : 'text-[#5A7A65]',
                    FOCUS_RING
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                id="nav-cta-mobile"
                href="https://wa.me/256788003344"
                className={cn(
                  'mt-3 flex w-full items-center justify-center gap-[8px] rounded-[6px] bg-[#E8A020] p-[10px_22px] text-center text-[13px] font-bold text-[#0D2016]',
                  FOCUS_RING
                )}
              >
                <WhatsAppIcon className="h-[15px] w-[15px] text-[#0D2016]" />
                Start on WhatsApp
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
