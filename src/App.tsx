import React, { useEffect, Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Lenis from 'lenis';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';

const RealityToday = lazy(() => import('./components/RealityToday').then(module => ({ default: module.RealityToday })));
const WhatChanges = lazy(() => import('./components/WhatChanges').then(module => ({ default: module.WhatChanges })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then(module => ({ default: module.HowItWorks })));
const WhyDifferent = lazy(() => import('./components/WhyDifferent').then(module => ({ default: module.WhyDifferent })));
const BuiltForEA = lazy(() => import('./components/BuiltForEA').then(module => ({ default: module.BuiltForEA })));
const Ecosystem = lazy(() => import('./components/Ecosystem').then(module => ({ default: module.Ecosystem })));
const Roadmap = lazy(() => import('./components/Roadmap').then(module => ({ default: module.Roadmap })));
const Wishlist = lazy(() => import('./components/Wishlist').then(module => ({ default: module.Wishlist })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const BackToTop = lazy(() => import('./components/BackToTop').then(module => ({ default: module.BackToTop })));
const CustomCursor = lazy(() => import('./components/CustomCursor').then(module => ({ default: module.CustomCursor })));

const ScrollSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "200px" }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="will-change-transform will-change-opacity"
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Disable smooth scrolling on touch devices for better performance
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:p-4 focus:bg-brand-primary focus:text-white font-bold rounded-md">
        Skip to main content
      </a>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-primary z-[60] origin-left shadow-[0_0_10px_rgba(15,110,86,0.5)] transform-gpu will-change-transform"
        style={{ scaleX }}
      />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<div className="h-screen bg-[#0D1A12]" />}>
          <ScrollSection><RealityToday /></ScrollSection>
          <ScrollSection><WhatChanges /></ScrollSection>
          <ScrollSection><HowItWorks /></ScrollSection>
          <ScrollSection><WhyDifferent /></ScrollSection>
          <ScrollSection><BuiltForEA /></ScrollSection>
          <ScrollSection><Ecosystem /></ScrollSection>
          <ScrollSection><Roadmap /></ScrollSection>
          <ScrollSection><Wishlist /></ScrollSection>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
}
