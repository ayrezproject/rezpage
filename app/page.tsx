'use client';

import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { ProblemSolution } from '@/components/landing/ProblemSolution';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { EditorialSpecs } from '@/components/landing/EditorialSpecs';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { AppGrid } from '@/components/AppGrid';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function Home() {
  return (
    <>
      {/* Laser-Thin Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Floating Island Capsule Navbar with Mobile Drawer & Scrollspy */}
      <Navbar />

      {/* Main Content with comfortable top padding */}
      <main className="min-h-screen pt-20 sm:pt-24">
        {/* 1. Launch Hero Stage with Product Image */}
        <Hero />

        {/* 2. Revolutionary Features Spotlight with Images */}
        <FeaturesSection />

        {/* 3. Problem vs Solution Comparison */}
        <ProblemSolution />

        {/* 4. 3-Step How It Works */}
        <HowItWorks />

        {/* 5. Technical Specs & Editorial Standards */}
        <EditorialSpecs />

        {/* 6. Teacher Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 7. Pricing Stage */}
        <PricingSection />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 9. Ecosystem Apps (hidden anchor) */}
        <AppGrid />
      </main>

      {/* 10. Dark Footer */}
      <Footer />
    </>
  );
}
