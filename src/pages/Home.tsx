import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { BuiltForEA } from '../components/BuiltForEA';
import { Trust } from '../components/Trust';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

/**
 * Fast, motivated reveal: a short fade + 12px rise as a section enters.
 * Collapses to static under reduced motion.
 */
function Reveal({ children }: { children?: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Reveal><Problem /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Reveal><Features /></Reveal>
        <Reveal><BuiltForEA /></Reveal>
        <Reveal><Trust /></Reveal>
        <Reveal><CTA /></Reveal>
      </main>
      <Footer />
    </>
  );
}
