"use client";

import React from "react";
import Timeline, { JourneyItem } from "@/components/ui/timeline";
import { SectionHeader } from "@/components/ui/SectionHeader";

const kanhavTopJourney: JourneyItem[] = [
  {
    id: "1994-texturising",
    year: "1994",
    month: "Foundation",
    heading: "1994 Texturising",
    content: "Commencement of DTY texturising and manufacturing, establishing our core textile engineering foundation.",
  },
  {
    id: "2014-warp-knitting",
    year: "2014",
    month: "Operations",
    heading: "2014 Warp Knitting",
    content: "Launched specialized warp knitting operations for high-tenacity industrial nets and technical fabrics.",
  },
  {
    id: "2017-raschel-circular",
    year: "2017",
    month: "Expansion",
    heading: "2017 Raschel Units",
    content: "Invested in high-speed Raschel and circular machinery, entering multi-segment industrial markets.",
  },
  {
    id: "2024-composites",
    year: "2024",
    month: "Composites",
    heading: "2024 Glass Fabrics",
    content: "Entered technical composites with Multi-Axial Glass Fabrics for wind energy, marine, and transit.",
  },
];

const kanhavBottomJourney: JourneyItem[] = [
  {
    id: "2011-salasar-polytex",
    year: "2011",
    month: "FDY Plant",
    heading: "2011 Salasar Polytex",
    content: "Established Salasar Polytex Pvt. Ltd. and commissioned high-tenacity Nylon FDY spinning lines.",
  },
  {
    id: "2015-german-systems",
    year: "2015",
    month: "Tech Leap",
    heading: "2015 German 4M EL",
    content: "Adopted German electronic 4M EL warp knitting lines for high-speed, flawless technical execution.",
  },
  {
    id: "2021-solar-energy",
    year: "2021",
    month: "Clean Power",
    heading: "2021 Solar Energy",
    content: "Installed extensive captive solar power plants, powering sustainable green manufacturing across units.",
  },
];

export const HeritageTimeline: React.FC = () => {
  return (
    <section id="story" className="w-full bg-[#f8f7f4] border-b border-black/[0.08] relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-2">
        <SectionHeader
          badge="Our Heritage"
          title="Three Decades of Manufacturing Innovation"
          subtitle="Scroll down to trace our continuous technical evolution — from yarn texturising in 1994 to advanced multi-axial composites in 2024."
        />
      </div>

      <Timeline
        title="Our Heritage"
        periodLabel="1994 — 2024"
        backgroundColor="#f8f7f4"
        textColor="#110f0e"
        mutedTextColor="#524e47"
        activeColor="#cc410f"
        imageUrl="/assets/images/knitting-capacity-background-768x432.webp"
        imageAlt="Kanhav Industries manufacturing facility"
        topJourneyData={kanhavTopJourney}
        bottomJourneyData={kanhavBottomJourney}
        duration={1.2}
      />
    </section>
  );
};
