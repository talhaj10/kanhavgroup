"use client";

import React from "react";
import { useRFQ } from "@/context/RFQContext";
import { Hero } from "@/components/sections/Hero";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { AboutBento } from "@/components/sections/AboutBento";
import { CoreValues } from "@/components/sections/CoreValues";
import { FeaturedProductsGrid } from "@/components/sections/FeaturedProductsGrid";
import { ApplicationsGrid } from "@/components/sections/ApplicationsGrid";
import { HeritageTimeline } from "@/components/sections/HeritageTimeline";
import { CeoMessage } from "@/components/sections/CeoMessage";
import { PresenceMap } from "@/components/sections/PresenceMap";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const { openRFQ } = useRFQ();

  return (
    <main className="relative z-10 flex flex-col">
      {/* 1. Kraftline Asymmetric Split Hero */}
      <Hero onOpenRFQ={() => openRFQ()} />

      {/* 2. Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. About Bento & Scale */}
      <AboutBento />

      {/* 4. Core Values & Mission */}
      <CoreValues />

      {/* 5. 4 Featured Production Lines Grid (Kraftline Style) */}
      <FeaturedProductsGrid />

      {/* 6. 12 Applications Bento */}
      <ApplicationsGrid />

      {/* 7. Heritage Timeline (1994 - 2024) */}
      <HeritageTimeline />

      {/* 8. CEO Editorial Message */}
      <CeoMessage />

      {/* 9. Presence Across India */}
      <PresenceMap />

      {/* 10. Customer Testimonials */}
      <Testimonials />

      {/* 11. Contact & Direct Message */}
      <ContactSection />
    </main>
  );
}
