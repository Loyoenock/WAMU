import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useRoute } from './lib/router';
import { Home } from './pages/Home';
import { Faq } from './pages/Faq';
import { Pricing } from './pages/Pricing';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const pathname = useRoute();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const page =
    pathname === '/faq' ? <Faq /> : pathname === '/pricing' ? <Pricing /> : <Home />;

  return (
    <div className="min-h-screen bg-bg-warm">
      <a
        id="skip-to-content"
        href="#main-content"
        className="sr-only rounded-md font-bold focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand-accent focus:p-4 focus:text-brand-ink"
      >
        Skip to main content
      </a>

      <motion.div
        className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left bg-brand-accent transform-gpu will-change-transform"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {page}

      <BackToTop />
    </div>
  );
}
