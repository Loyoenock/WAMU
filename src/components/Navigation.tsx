import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { WhatsAppIcon } from './WhatsAppIcon';

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020] focus-visible:ring-offset-2';

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
        className={cn(
          'wamu-nav-pill-surface relative w-full rounded-full border border-[#0D2016]/12 transition-[background-color,box-shadow] duration-200 ease-out motion-reduce:transition-none',
          scrolled
            ? 'shadow-[0_4px_16px_rgba(13,32,22,0.10)]'
            : 'shadow-[0_8px_30px_rgba(13,32,22,0.12)]'
        )}
      >
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
                    'whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-[background-color,color] duration-150 ease-out motion-reduce:transition-none lg:px-3.5 lg:text-[14px]',
                    isActive
                      ? 'bg-[#1A4029]/15 font-semibold text-[#0D2016]'
                      : link.muted
                        ? 'text-[#244D34] hover:bg-[#1A4029]/10 hover:text-[#0D2016]'
                        : 'text-[#1A4029] hover:bg-[#1A4029]/10 hover:text-[#0D2016]',
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
              'wamu-liquid-btn-gold hidden shrink-0 items-center gap-[8px] whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-bold text-[#0D2016] motion-reduce:transition-none md:inline-flex lg:px-5',
              FOCUS_RING
            )}
          >
            <WhatsAppIcon className="h-[15px] w-[15px] text-[#0D2016]" />
            Message WAMU
          </a>

          <button
            id="nav-mobile-menu-btn"
            className={cn(
              'wamu-liquid-btn-light rounded-full p-2 text-[#1A4029] hover:text-[#0D2016] motion-reduce:transition-none md:hidden',
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
              className="wamu-nav-pill-surface absolute left-0 right-0 top-[calc(100%+8px)] flex w-full flex-col gap-1.5 rounded-[28px] border border-[#0D2016]/12 p-4 shadow-[0_16px_32px_rgba(13,32,22,0.14)] md:hidden"
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
                      'rounded-full px-4 py-3 text-[14px] font-medium transition-[background-color,color] duration-150 ease-out motion-reduce:transition-none',
                      isActive
                        ? 'bg-[#1A4029]/15 font-semibold text-[#0D2016]'
                        : link.muted
                          ? 'text-[#244D34] hover:bg-[#1A4029]/10 hover:text-[#0D2016]'
                          : 'text-[#1A4029] hover:bg-[#1A4029]/10 hover:text-[#0D2016]',
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
                  'wamu-liquid-btn-gold mt-2 flex w-full items-center justify-center gap-[8px] rounded-full px-5 py-3 text-center text-[13px] font-bold text-[#0D2016] motion-reduce:transition-none',
                  FOCUS_RING
                )}
              >
                <WhatsAppIcon className="h-[15px] w-[15px] text-[#0D2016]" />
                Message WAMU
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
