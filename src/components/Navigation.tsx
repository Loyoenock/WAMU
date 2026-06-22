import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ease-in-out flex justify-center",
      scrolled ? "pt-4 px-4 md:px-8" : "pt-0 px-0"
    )}>
      <header
        className={cn(
          'w-full transition-all duration-500 ease-in-out relative',
          scrolled 
            ? 'max-w-6xl bg-[#0D1A12]/80 backdrop-blur-lg border border-brand-highlight/20 shadow-[0_8px_30px_rgba(15,110,86,0.15)] rounded-full py-3 px-6' 
            : 'max-w-full bg-transparent border-b border-brand-grove/30 py-6 px-6 lg:px-12'
        )}
      >
        <div className={cn(
          "mx-auto flex items-center justify-between",
          !scrolled && "max-w-7xl"
        )}>
          <a id="nav-logo" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3">
            <img src="/wamu-logo-v1.png" alt="WAMU Logo" className="h-10 w-10 object-contain rounded-[100%] shrink-0" fetchPriority="high" />
            <span className="font-serif text-2xl font-bold tracking-tight text-white">WAMU</span>
          </a>

          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
            <a id="nav-platform-desktop" href="#platform" onClick={(e) => smoothScroll(e, 'platform')} className="text-xs font-medium uppercase tracking-[0.2em] opacity-70 hover:text-brand-accent hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm py-1 px-2">Platform</a>
            <a id="nav-infrastructure-desktop" href="#infrastructure" onClick={(e) => smoothScroll(e, 'infrastructure')} className="text-xs font-medium uppercase tracking-[0.2em] opacity-70 hover:text-brand-accent hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm py-1 px-2">Infrastructure</a>
            <a id="nav-ecosystem-desktop" href="#ecosystem" onClick={(e) => smoothScroll(e, 'ecosystem')} className="text-xs font-medium uppercase tracking-[0.2em] opacity-70 hover:text-brand-accent hover:opacity-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm py-1 px-2">Ecosystem</a>
            <a 
              id="nav-wishlist-desktop"
              href="#wishlist" 
              onClick={(e) => smoothScroll(e, 'wishlist')}
              className="px-4 py-2 border border-brand-highlight/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-highlight hover:bg-brand-highlight/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            >
              Join Wishlist
            </a>
          </nav>

          <button 
            id="nav-mobile-menu-btn"
            className="md:hidden text-white opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className={cn(
                "absolute left-0 right-0 w-full bg-[#0D1A12] border border-brand-grove/40 px-6 py-8 flex flex-col space-y-6 md:hidden shadow-xl",
                scrolled ? "top-[110%] rounded-3xl" : "top-full border-t-0 border-x-0"
              )}
            >
              <a id="nav-platform-mobile" href="#platform" onClick={(e) => smoothScroll(e, 'platform')} className="text-sm font-medium uppercase tracking-[0.2em] w-fit opacity-70 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm p-1">Platform</a>
              <a id="nav-infrastructure-mobile" href="#infrastructure" onClick={(e) => smoothScroll(e, 'infrastructure')} className="text-sm font-medium uppercase tracking-[0.2em] w-fit opacity-70 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm p-1">Infrastructure</a>
              <a id="nav-ecosystem-mobile" href="#ecosystem" onClick={(e) => smoothScroll(e, 'ecosystem')} className="text-sm font-medium uppercase tracking-[0.2em] w-fit opacity-70 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-sm p-1">Ecosystem</a>
              <a 
                id="nav-wishlist-mobile"
                href="#wishlist" 
                onClick={(e) => smoothScroll(e, 'wishlist')}
                className="text-[10px] font-bold border border-brand-highlight/30 text-brand-highlight px-6 py-3 rounded-full text-center hover:bg-brand-highlight hover:text-[#0D1A12] transition-colors uppercase tracking-widest mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Join Wishlist
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
