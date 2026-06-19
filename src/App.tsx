import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Lenis from 'lenis';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { RealityToday } from './components/RealityToday';
import { WhatChanges } from './components/WhatChanges';
import { HowItWorks } from './components/HowItWorks';
import { WhyDifferent } from './components/WhyDifferent';
import { BuiltForEA } from './components/BuiltForEA';
import { Ecosystem } from './components/Ecosystem';
import { Roadmap } from './components/Roadmap';
import { Wishlist } from './components/Wishlist';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

const ScrollSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1A12]">
      <Navigation />
      <main>
        <Hero />
        <ScrollSection><RealityToday /></ScrollSection>
        <ScrollSection><WhatChanges /></ScrollSection>
        <ScrollSection><HowItWorks /></ScrollSection>
        <ScrollSection><WhyDifferent /></ScrollSection>
        <ScrollSection><BuiltForEA /></ScrollSection>
        <ScrollSection><Ecosystem /></ScrollSection>
        <ScrollSection><Roadmap /></ScrollSection>
        <ScrollSection><Wishlist /></ScrollSection>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
