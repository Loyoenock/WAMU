import React from 'react';
import { motion } from 'motion/react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <RealityToday />
        <WhatChanges />
        <HowItWorks />
        <WhyDifferent />
        <BuiltForEA />
        <Ecosystem />
        <Roadmap />
        <Wishlist />
      </main>
      <Footer />
    </div>
  );
}
