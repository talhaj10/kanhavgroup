"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useRFQ } from "@/context/RFQContext";
import {
  CheckCircle2,
  ArrowRight,
  Compass,
  Target,
  Sparkles,
} from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export interface PrinciplePoint {
  label: string;
  detail: string;
}

export interface PrincipleItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  points: PrinciplePoint[];
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
    title: "Customer First",
    subtitle: "Custom-engineered composite solutions built around your production tooling",
    points: [
      { label: "Custom Slitting", detail: "Tailored widths from 100mm to 2540mm with ±1mm precision" },
      { label: "Zero Factory Scrap", detail: "Roll lengths and stitch patterns matched to your tooling" },
      { label: "Rapid Sampling", detail: "Fast-turnaround test swatches and technical trial rolls" },
    ],
    metricLabel: "Manufacturing Tolerance",
    metricValue: "Slit Width Accuracy within ±1.0mm",
    image: "/assets/images/about-us-company-image.webp",
    imageAlt: "Kanhav Industries technical team and production alignment in Surat",
    watermark: "Surat Manufacturing Hub",
    specLine: "TAILORED WIDTHS • ZERO COMPROMISE",
    dotColor: "bg-kraft-orange",
  },
  {
    id: "german-precision",
    number: "02",
    category: "German Engineering",
    title: "Technological Passion",
    subtitle: "State-of-the-art German Karl Mayer machinery delivering zero-crimp fabrics",
    points: [
      { label: "German Technology", detail: "High-speed Karl Mayer warp knitting lines" },
      { label: "Zero-Crimp Mastery", detail: "Up to 35% higher tensile stiffness vs woven roving" },
      { label: "Industrial Scale", detail: "840 MT annual multi-axial production capacity" },
    ],
    metricLabel: "Tensile Stiffness Gain",
    metricValue: "+35% vs Conventional Woven Roving",
    image: "/assets/images/industrial-furnace-hall-reflections.png",
    imageAlt: "State of the art German Karl Mayer warp knitting machine hall",
    watermark: "Karl Mayer Germany",
    specLine: "MULTI-AXIAL 0° / 90° / ±45° • ZERO CRIMP",
    dotColor: "bg-amber-500",
  },
  {
    id: "authenticity-traceability",
    number: "03",
    category: "Certified Integrity",
    title: "Authenticity & Integrity",
    subtitle: "100% direct roving origin integrity with certified lab verification",
    points: [
      { label: "Batch Certificates", detail: "Tensile, areal weight & resin burn-off test reports" },
      { label: "Direct Roving", detail: "Full raw material traceability from source to finished roll" },
      { label: "Quality Audited", detail: "Rigorous ISO 9001:2015 process compliance" },
    ],
    metricLabel: "Quality Verification",
    metricValue: "100% Batch Tested & Certified",
    image: "/assets/images/biaxial-fabric.webp",
    imageAlt: "Biaxial multi-axial glass fabric quality testing at Kanhav Industries",
    watermark: "ISO 9001:2015 Audited",
    specLine: "BATCH-VERIFIED LAB TEST REPORTS",
    dotColor: "bg-emerald-500",
  },
  {
    id: "critical-performance",
    number: "04",
    category: "Mission-Critical",
    title: "Critical Performance",
    subtitle: "Engineered for dynamic cyclic stress in clean energy, marine & rail",
    points: [
      { label: "Wind Energy", detail: "Engineered for 80m+ wind turbine blade spar caps" },
      { label: "Rapid Wet-Out", detail: "Low-profile stitch architecture eliminates internal voids" },
      { label: "Process Ready", detail: "Optimized for vacuum infusion, RTM & pultrusion" },
    ],
    metricLabel: "Target Sectors",
    metricValue: "Offshore Wind • High-Speed Rail • Marine",
    image: "/assets/images/windmill-blades.webp",
    imageAlt: "Wind turbine blade composites manufactured with Kanhav multi-axial fabrics",
    watermark: "Clean Energy & Rail",
    specLine: "VACUUM INFUSION & RTM OPTIMIZED",
    dotColor: "bg-sky-500",
  },
  {
    id: "make-in-india",
    number: "05",
    category: "Make in India",
    title: "Make in India Leadership",
    subtitle: "Eliminating import delays and currency volatility for Indian manufacturers",
    points: [
      { label: "Supply Security", detail: "Domestic manufacturing from Surat hub with zero port delays" },
      { label: "Group Strength", detail: "$19M turnover and 30+ years manufacturing legacy" },
      { label: "Nationwide Reach", detail: "7 regional distribution hubs for rapid logistics" },
    ],
    metricLabel: "Corporate Strength",
    metricValue: "$19M Turnover • 7 Regional Hubs",
    image: "/assets/images/banner-train.webp",
    imageAlt: "Make in India high speed rail transportation composite solutions",
    watermark: "Make in India",
    specLine: "DOMESTIC SUPPLY SECURITY • 7 HUBS",
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
      className="sticky top-0 flex items-start justify-center w-full min-h-[68vh] sm:min-h-[78vh] lg:min-h-[82vh] py-3 sm:py-5"
    >
      <motion.div
        style={{
          scale,
          top: `calc(clamp(60px, 8vh, 84px) + ${i * 20}px)`,
          zIndex: i + 10,
        }}
        className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 origin-top relative"
      >
        <div className="glass-panel rounded-2xl sm:rounded-3xl border border-black/[0.09] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden bg-white">
          {/* Top Stacking Tab Header - visible when preceding cards pile underneath */}
          <div className="bg-[#f8f7f4] border-b border-black/[0.06] px-4 sm:px-7 py-2 sm:py-2.5 flex items-center justify-between">
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

          {/* Card Body - Clean Main Points Layout */}
          <div className="p-5 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            {/* Left Content Area: Title + Main Points */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-kraft-headline tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-kraft-orange flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kraft-orange shrink-0" />
                  <span>{principle.subtitle}</span>
                </p>
              </div>

              {/* Main Points List */}
              <ul className="space-y-2 pt-1 sm:pt-2">
                {principle.points.map((point) => (
                  <li
                    key={point.label}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-kraft-cream/90 leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-kraft-orange shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-kraft-headline font-semibold">{point.label}: </strong>
                      <span className="text-kraft-cream/80">{point.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom Metric & Action */}
              <div className="pt-3 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
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
                  onClick={() => onOpenRFQ(`Principle Inquiry: ${principle.title}`)}
                  className="inline-flex items-center gap-1.5 text-kraft-orange hover:text-kraft-orange/80 font-mono text-xs font-semibold group cursor-pointer"
                >
                  <span>Request Spec Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[260px] rounded-xl sm:rounded-2xl overflow-hidden border border-black/[0.08] shadow-inner group bg-neutral-900">
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
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end">
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
      className="relative w-full bg-[#ffffff] border-b border-black/[0.08] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24"
    >
      {/* Header Container - Clean without "Scroll down to see card stack" */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <SectionHeader
          badge="Guiding Principles"
          title="Engineered With Integrity, Powered by Precision"
          subtitle="Our core ethos drives enduring relationships grounded in transparency, technological superiority, and outstanding service."
          align="center"
        />
      </div>

      {/* 5 Stacked Cards */}
      <div className="relative w-full flex flex-col items-center pb-[15vh] sm:pb-[25vh]">
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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 pt-10 border-t border-black/[0.08]">
        {/* Call to Action Banner */}
        <div className="p-5 sm:p-7 rounded-2xl bg-[#f8f7f4] border border-black/[0.08] mb-8 flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-xs text-kraft-orange uppercase tracking-wider font-semibold">
              Tailored Manufacturing Partnership
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-kraft-headline">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Vision */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
            <div className="flex items-center gap-2 mb-2.5">
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
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
            <div className="flex items-center gap-2 mb-2.5">
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
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
            <div className="flex items-center gap-2 mb-2.5">
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
