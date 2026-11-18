"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useRFQ } from "@/context/RFQContext";
import {
  HeartHandshake,
  Cpu,
  ShieldCheck,
  Wind,
  Award,
  CheckCircle2,
  ArrowRight,
  Compass,
  Target,
  Sparkles,
  Layers,
  FileCheck,
} from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export interface PrincipleItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  metricLabel: string;
  metricValue: string;
  image: string;
  imageAlt: string;
  watermark: string;
  specLine: string;
  dotColor: string;
}

export const PRINCIPLES: PrincipleItem[] = [
  {
    id: "customer-first",
    number: "01",
    category: "Client Partnership",
    title: "Customer First: Custom Slit Precision & Production Alignment",
    subtitle: "Co-engineering tailored composite rolls around your exact factory tooling",
    description:
      "Our clients' production schedules, tooling geometries, and resin chemistries govern every batch. Rather than forcing rigid off-the-shelf catalog widths, we co-engineer custom slit widths (100mm to 2540mm), customized roll packaging, and compatible stitch patterns that directly reduce factory scrap rates and optimize vacuum infusion cycle times.",
    specs: [
      "Custom Slit Widths (100mm - 2540mm)",
      "Rapid Swatch & Sample Delivery",
      "Dedicated Technical Account Teams",
    ],
    metricLabel: "Manufacturing Tolerance",
    metricValue: "Slit Accuracy within ±1.0mm",
    image: "/assets/images/about-us-company-image.webp",
    imageAlt: "Kanhav Industries technical team and production alignment in Surat",
    watermark: "Surat Manufacturing Hub",
    specLine: "CUSTOM ROLL GEOMETRIES • ZERO FACTORY SCRAP",
    dotColor: "bg-kraft-orange",
  },
  {
    id: "german-precision",
    number: "02",
    category: "German Engineering",
    title: "Technological Passion: German Karl Mayer Zero-Crimp Mastery",
    subtitle: "Advanced warp knitting lines producing 840 MT/PA of multi-axial fabric",
    description:
      "We invest in state-of-the-art German Karl Mayer warp knitting technology to produce non-crimp multi-axial glass fabrics (0°, 90°, ±45°). By aligning structural glass fibers perfectly straight without the structural crimp found in conventional woven roving, we deliver up to 35% higher tensile stiffness, superior resin wet-out, and unmatched fatigue resistance under cyclic loads.",
    specs: [
      "German Karl Mayer Warp Lines",
      "Zero-Crimp Fiber Alignment",
      "840 MT Annual Production Capacity",
    ],
    metricLabel: "Tensile Stiffness Gain",
    metricValue: "+35% vs Conventional Woven Roving",
    image: "/assets/images/industrial-furnace-hall-reflections.png",
    imageAlt: "State of the art German Karl Mayer warp knitting machine hall",
    watermark: "Karl Mayer Germany",
    specLine: "WARP KNITTED 0° / 90° / ±45° • ZERO FIBER CRIMP",
    dotColor: "bg-amber-500",
  },
  {
    id: "authenticity-traceability",
    number: "03",
    category: "Certified Integrity",
    title: "Uncompromising Authenticity & Full Batch Traceability",
    subtitle: "Verifiable lab test certificates delivered with every production lot",
    description:
      "In load-bearing composites, authenticity is a safety imperative. We maintain total raw material traceability from premium direct roving to finished rolls. Every production batch is certified with tensile strength, areal weight verification, moisture content, and resin burn-off inspection reports under rigorous ISO 9001:2015 standards.",
    specs: [
      "Batch Test Inspection Certificates",
      "100% Direct Roving Origin Traceability",
      "ISO 9001:2015 Standards Compliance",
    ],
    metricLabel: "Quality Verification",
    metricValue: "100% Batch Tested & Certified",
    image: "/assets/images/biaxial-fabric.webp",
    imageAlt: "Biaxial multi-axial glass fabric quality testing at Kanhav Industries",
    watermark: "ISO 9001:2015 Audited",
    specLine: "DIRECT ROVING ORIGIN • LAB TEST CERTIFICATE INCLUDED",
    dotColor: "bg-emerald-500",
  },
  {
    id: "critical-performance",
    number: "04",
    category: "Mission-Critical",
    title: "Critical Performance: Engineered for Wind, Marine & High-Speed Rail",
    subtitle: "High-durability reinforcement engineered for dynamic cyclic stress",
    description:
      "From 80-meter wind turbine blades enduring relentless aerodynamic shear to high-speed passenger train carriages and marine hulls, Kanhav multi-axial fabrics are engineered for extreme durability. Our low-profile polyester stitch architecture optimizes resin flow in vacuum infusion and RTM processing, preventing dry spots and internal voids.",
    specs: [
      "Wind Blades (Up to 80m+ Lengths)",
      "Marine Hulls & High-Speed Train Shells",
      "Vacuum Infusion & RTM Optimized",
    ],
    metricLabel: "Target Application",
    metricValue: "Offshore Wind • High-Speed Rail • Marine",
    image: "/assets/images/windmill-blades.webp",
    imageAlt: "Wind turbine blade composites manufactured with Kanhav multi-axial fabrics",
    watermark: "Wind Energy & Rail",
    specLine: "VACUUM INFUSION READY • ZERO INTERNAL VOIDS",
    dotColor: "bg-sky-500",
  },
  {
    id: "make-in-india",
    number: "05",
    category: "Make in India",
    title: "Vision 2030: India's Composite Self-Reliance & Group Heritage",
    subtitle: "A $19M Kanhav Group enterprise eliminating import lead times",
    description:
      "Backed by the 30-year industrial foundation of the $19M Kanhav Group, Kanhav Industries is championing India's self-reliance in advanced technical textiles. We eliminate foreign shipping delays, port demurrage, and currency volatility for Indian manufacturers—supplying world-class composite fabrics directly from our Surat hub with rapid nationwide logistics.",
    specs: [
      "$19M Kanhav Group Financial Security",
      "Zero Foreign Currency / Port Delays",
      "Pan-India Distribution via 7 Hubs",
    ],
    metricLabel: "Corporate Strength",
    metricValue: "$19M Turnover • 30+ Years Heritage",
    image: "/assets/images/banner-train.webp",
    imageAlt: "Make in India high speed rail transportation composite solutions",
    watermark: "Make in India",
    specLine: "DOMESTIC SUPPLY SECURITY • 7 REGIONAL HUBS",
    dotColor: "bg-kraft-orange",
  },
];

interface StickyCardProps {
  i: number;
  total: number;
  principle: PrincipleItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenRFQ: (subject: string) => void;
}

export const StickyPrincipleCard: React.FC<StickyCardProps> = ({
  i,
  total,
  principle,
  progress,
  range,
  targetScale,
  onOpenRFQ,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex items-start justify-center w-full min-h-[72vh] sm:min-h-[82vh] lg:min-h-[88vh] py-3 sm:py-6"
    >
      <motion.div
        style={{
          scale,
          top: `calc(clamp(60px, 8.5vh, 88px) + ${i * 22}px)`,
          zIndex: i + 10,
        }}
        className="w-full max-w-[1180px] mx-auto px-4 sm:px-6 origin-top relative"
      >
        <div className="glass-panel rounded-2xl sm:rounded-3xl border border-black/[0.09] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden bg-white">
          {/* Top Stacking Tab Header - visible when preceding cards pile underneath */}
          <div className="bg-[#f8f7f4] border-b border-black/[0.06] px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <span className={`w-2 h-2 rounded-full ${principle.dotColor} animate-pulse`} />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-kraft-headline uppercase">
                Principle {principle.number} // {total < 10 ? `0${total}` : total}
              </span>
              <span className="hidden sm:inline-block w-px h-3.5 bg-black/15" />
              <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-widest text-kraft-olive font-semibold">
                {principle.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-kraft-orange font-semibold px-2 py-0.5 rounded bg-kraft-orange/10 border border-kraft-orange/20">
                Active Standard
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-5 sm:p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-kraft-headline tracking-tight leading-[1.2]">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-kraft-orange flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kraft-orange shrink-0" />
                  <span>{principle.subtitle}</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-kraft-cream/85 leading-relaxed font-normal">
                {principle.description}
              </p>

              {/* Spec Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {principle.specs.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-kraft-elevated/70 border border-black/[0.07] font-mono text-[10px] sm:text-[11px] text-kraft-headline font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-kraft-orange shrink-0" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>

              {/* Bottom Metric & Action */}
              <div className="pt-3 sm:pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div>
                  <span className="text-kraft-olive uppercase tracking-wider block text-[10px]">
                    {principle.metricLabel}
                  </span>
                  <span className="font-semibold text-kraft-headline text-[11px] sm:text-xs">
                    {principle.metricValue}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenRFQ(`Principle Spec Inquiry: ${principle.title}`)}
                  className="inline-flex items-center gap-1.5 text-kraft-orange hover:text-kraft-orange/80 font-mono text-xs font-semibold group cursor-pointer"
                >
                  <span>Request Spec Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[290px] rounded-xl sm:rounded-2xl overflow-hidden border border-black/[0.08] shadow-inner group bg-neutral-900">
                <img
                  src={principle.image}
                  alt={principle.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Top Watermark Badge */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-mono text-[10px] text-white uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-kraft-orange animate-pulse" />
                  <span>{principle.watermark}</span>
                </div>

                {/* Bottom Scrim with Technical Data */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-kraft-orange font-semibold">
                    {principle.specLine}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/**
 * CoreValues (Guiding Principles)
 * Framer Motion Card Stack Roll Animation inspired by Skiper 16 StickyCard.
 * Combines Swiss precision aesthetics with Kanhav Group's five foundational pillars.
 */
export const CoreValues: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openRFQ } = useRFQ();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#ffffff] border-b border-black/[0.08] pt-14 sm:pt-20 lg:pt-24 pb-20 sm:pb-28"
    >
      {/* Header Container */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <SectionHeader
          badge="Guiding Principles"
          title="Engineered With Integrity, Powered by Precision"
          subtitle="Our core ethos drives enduring relationships grounded in transparency, technological superiority, and outstanding service."
          align="center"
        />

        {/* Scroll hint inspired by Skiper 16 */}
        <div className="flex flex-col items-center justify-center gap-2.5 mt-4 sm:mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f7f4] border border-black/[0.08] shadow-2xs font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-kraft-olive">
            <span className="w-1.5 h-1.5 rounded-full bg-kraft-orange animate-ping" />
            <span>Scroll down to see card stack</span>
          </div>
          <div className="w-px h-10 bg-gradient-to-b from-kraft-orange to-transparent" />
        </div>
      </div>

      {/* 5 Stacked Cards */}
      <div className="relative w-full flex flex-col items-center pb-[20vh] sm:pb-[30vh]">
        {PRINCIPLES.map((principle, i) => {
          const total = PRINCIPLES.length;
          const targetScale = Math.max(0.78, 1 - (total - i - 1) * 0.045);
          return (
            <StickyPrincipleCard
              key={principle.id}
              i={i}
              total={total}
              principle={principle}
              progress={scrollYProgress}
              range={[i * (1 / total), 1]}
              targetScale={targetScale}
              onOpenRFQ={openRFQ}
            />
          );
        })}
      </div>

      {/* Concluding Vision, Mission & Strategic Governance Grid */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 pt-12 border-t border-black/[0.08]">
        {/* Call to Action Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#f8f7f4] border border-black/[0.08] mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="font-mono text-xs text-kraft-orange uppercase tracking-wider font-semibold">
              Tailored Manufacturing Partnership
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-kraft-headline">
              Ready to Co-Engineer Your Composite Components?
            </h4>
            <p className="text-xs sm:text-sm text-kraft-cream/80 max-w-xl">
              From custom slitting widths (100mm to 2540mm) to trial production rolls, our Surat engineering team is ready to assist.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openRFQ("Guiding Principles Consultation")}
              className="px-5 py-2.5 rounded-xl bg-kraft-orange text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-kraft-orange/90 transition-colors shadow-sm cursor-pointer"
            >
              Request Free Sample Swatch
            </button>
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-xl bg-white border border-black/[0.1] text-kraft-headline font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Explore 5 Product Lines
            </Link>
          </div>
        </div>

        {/* Vision, Mission & Why Choose Us Micro-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision */}
          <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-kraft-orange" />
              <h5 className="font-mono text-xs uppercase tracking-wider text-kraft-headline font-semibold">
                Our Vision
              </h5>
            </div>
            <p className="text-xs sm:text-sm text-kraft-cream/80 leading-relaxed">
              {KANHAV_DATA.visionMission.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-emerald-600" />
              <h5 className="font-mono text-xs uppercase tracking-wider text-kraft-headline font-semibold">
                Our Mission
              </h5>
            </div>
            <p className="text-xs sm:text-sm text-kraft-cream/80 leading-relaxed">
              {KANHAV_DATA.visionMission.mission}
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <h5 className="font-mono text-xs uppercase tracking-wider text-kraft-headline font-semibold">
                Why Choose Kanhav
              </h5>
            </div>
            <p className="text-xs sm:text-sm text-kraft-cream/80 leading-relaxed">
              {KANHAV_DATA.visionMission.whyChooseUs}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
