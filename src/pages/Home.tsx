import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { ServiceCategoriesSection } from '../components/ServiceCategoriesSection';
import { GettingStartedTimeline } from '../components/GettingStartedTimeline';
import { ConnectedExperienceSection } from '../components/ConnectedExperienceSection';
import { EcosystemShowcaseSection } from '../components/EcosystemShowcaseSection';
import { WamuDifferenceSection } from '../components/WamuDifferenceSection';
import { FAQAccordionSection } from '../components/FAQAccordionSection';
import { TrustExperienceSection } from '../components/TrustExperienceSection';
import { WhatsAppAccessSection } from '../components/WhatsAppAccessSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

function Reveal({ children }: { children?: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
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
        <HeroSection />
        <Reveal><ServiceCategoriesSection /></Reveal>
        <Reveal><GettingStartedTimeline /></Reveal>
        <Reveal><ConnectedExperienceSection /></Reveal>
        <Reveal><EcosystemShowcaseSection /></Reveal>
        <Reveal><WamuDifferenceSection /></Reveal>
        <Reveal><FAQAccordionSection /></Reveal>
        <Reveal><TrustExperienceSection /></Reveal>
        <Reveal><WhatsAppAccessSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
      <Footer />
    </>
  );
}
