import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b',
        scrolled ? 'bg-brand-midnight/90 backdrop-blur-md border-brand-grove/30 py-4 py-3' : 'bg-transparent border-brand-grove/30 py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xl">W</span>
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-white">WAMU</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#platform" onClick={(e) => smoothScroll(e, 'platform')} className="text-xs font-medium uppercase tracking-[0.2em] opacity-70 hover:text-brand-accent hover:opacity-100 transition-colors">Platform</a>
          <a href="#infrastructure" onClick={(e) => smoothScroll(e, 'infrastructure')} className="text-xs font-medium uppercase tracking-[0.2em] opacity-70 hover:text-brand-accent hover:opacity-100 transition-colors">Infrastructure</a>
          <a href="#ecosystem" onClick={(e) => smoothScroll(e, 'ecosystem')} className="text-xs font-medium uppercase tracking-[0.2em] opacity-70 hover:text-brand-accent hover:opacity-100 transition-colors">Ecosystem</a>
          <a 
            href="#wishlist" 
            onClick={(e) => smoothScroll(e, 'wishlist')}
            className="px-4 py-2 border border-brand-highlight/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-highlight hover:bg-brand-highlight/10 transition-colors"
          >
            Institutional Access Only
          </a>
        </div>

        <button 
          className="md:hidden text-white opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-midnight border-b border-brand-grove/30 px-6 py-8 flex flex-col space-y-6 md:hidden shadow-lg"
          >
            <a href="#platform" onClick={(e) => smoothScroll(e, 'platform')} className="text-sm font-medium uppercase tracking-[0.2em] opacity-70 hover:text-brand-accent">Platform</a>
            <a href="#infrastructure" onClick={(e) => smoothScroll(e, 'infrastructure')} className="text-sm font-medium uppercase tracking-[0.2em] opacity-70 hover:text-brand-accent">Infrastructure</a>
            <a href="#ecosystem" onClick={(e) => smoothScroll(e, 'ecosystem')} className="text-sm font-medium uppercase tracking-[0.2em] opacity-70 hover:text-brand-accent">Ecosystem</a>
            <a 
              href="#wishlist" 
              onClick={(e) => smoothScroll(e, 'wishlist')}
              className="text-[10px] font-bold border border-brand-highlight/30 text-brand-highlight px-6 py-3 rounded-full text-center uppercase tracking-widest mt-4"
            >
              Institutional Access Only
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
