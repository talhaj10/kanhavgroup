"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, Layers, SlidersHorizontal, Sparkles } from "lucide-react";
import { useRFQ } from "@/context/RFQContext";

interface ProductLine {
  id: string;
  num: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  image: string;
  angles: string;
  specs: {
    label: string;
    val: string;
  }[];
  applications: string;
}

const PRODUCT_LINES: ProductLine[] = [
  {
    id: "prod-multiaxial",
    num: "001",
    slug: "multiaxial-fabric",
    title: "MULTIAXIAL FABRIC",
    shortTitle: "MULTIAXIAL",
    subtitle: "MULTI-LAYER NON-CRIMP FIBER REINFORCEMENT",
    description:
      "Engineered multi-layer fiber arrangement delivering exceptional multi-directional tensile load distribution, impact resistance, and lightweight structural reinforcement for wind turbine blades, transport cabins, and naval craft.",
    image: "/assets/images/multiaxial-fabric-768x512.webp",
    angles: "0° / 90° / ±45°",
    specs: [
      { label: "MINIMUM ORDER", val: "500 KG" },
      { label: "STANDARD LEAD TIME", val: "12 DAYS" },
      { label: "RUSH LEAD TIME", val: "6 DAYS" },
      { label: "FIBER ARCHITECTURE", val: "Multi-Axial Non-Crimp" },
    ],
    applications: "Wind Energy • Marine Hulls • Rail Transit",
  },
  {
    id: "prod-unidirectional",
    num: "002",
    slug: "unidirectional-fabric",
    title: "UNIDIRECTIONAL FABRIC",
    shortTitle: "UNIDIRECTIONAL",
    subtitle: "HIGH-TENSILE SINGLE-AXIS REINFORCEMENT",
    description:
      "Parallel single-axis fiber alignment designed for extreme longitudinal tensile modulus and stiffness. Eliminates fiber crimp to deliver maximum mechanical efficiency in aerospace spars, automotive chassis, and bridge retrofits.",
    image: "/assets/images/unidirectional-fabric-768x512.webp",
    angles: "0° (Longitudinal)",
    specs: [
      { label: "MINIMUM ORDER", val: "500 KG" },
      { label: "STANDARD LEAD TIME", val: "10 DAYS" },
      { label: "RUSH LEAD TIME", val: "5 DAYS" },
      { label: "FIBER ARCHITECTURE", val: "Parallel Warp Alignment" },
    ],
    applications: "Aerospace Spars • Automotive Chassis • Structural Columns",
  },
  {
    id: "prod-biaxial",
    num: "003",
    slug: "biaxial-fabric",
    title: "BIAXIAL FABRIC",
    shortTitle: "BIAXIAL",
    subtitle: "BALANCED DUAL-AXIS TORSIONAL STRENGTH",
    description:
      "Balanced two-direction non-crimp fiber alignment (0°/90° or ±45°) engineered for uniform torsional stability, high shear resistance, and effortless wet-out drape over complex curved molds in marine and pipe infrastructure.",
    image: "/assets/images/biaxial-fabric-768x512.webp",
    angles: "0°/90° or ±45°",
    specs: [
      { label: "MINIMUM ORDER", val: "500 KG" },
      { label: "STANDARD LEAD TIME", val: "10 DAYS" },
      { label: "RUSH LEAD TIME", val: "5 DAYS" },
      { label: "FIBER ARCHITECTURE", val: "Balanced Dual-Plane" },
    ],
    applications: "Boat Hulls • Chemical Tanks • Composite Pipings",
  },
  {
    id: "prod-triaxial",
    num: "004",
    slug: "tri-axial-fabric",
    title: "TRI AXIAL FABRIC",
    shortTitle: "TRI AXIAL",
    subtitle: "THREE-DIRECTION QUASI-ISOTROPIC LAYUP",
    description:
      "Engineered three-axis fiber distribution (0°/±45° or 90°/±45°) that prevents delamination and delivers uniform shear modulus under heavy dynamic cyclical loads in transportation panels and industrial sporting composites.",
    image: "/assets/images/tri-axial-fabric-768x512.webp",
    angles: "0° / ±45° or 90° / ±45°",
    specs: [
      { label: "MINIMUM ORDER", val: "750 KG" },
      { label: "STANDARD LEAD TIME", val: "12 DAYS" },
      { label: "RUSH LEAD TIME", val: "6 DAYS" },
      { label: "FIBER ARCHITECTURE", val: "Tri-Directional Non-Crimp" },
    ],
    applications: "Heavy Truck Body Panels • High-End Sports Gear • Industrial Enclosures",
  },
  {
    id: "prod-quadraaxial",
    num: "005",
    slug: "quadra-axial-fabric",
    title: "QUADRA AXIAL FABRIC",
    shortTitle: "QUADRA AXIAL",
    subtitle: "FOUR-AXIS COMPLETE OMNIDIRECTIONAL LAYUP",
    description:
      "Full four-direction orientation (0°/90°/±45°) providing the pinnacle of multi-axial structural integrity, extreme fatigue endurance, and quasi-isotropic mechanical strength for critical aerospace and offshore applications.",
    image: "/assets/images/qudra-axial-fabric-768x512.webp",
    angles: "0° / 90° / +45° / -45°",
    specs: [
      { label: "MINIMUM ORDER", val: "1,000 KG" },
      { label: "STANDARD LEAD TIME", val: "14 DAYS" },
      { label: "RUSH LEAD TIME", val: "7 DAYS" },
      { label: "FIBER ARCHITECTURE", val: "Four-Plane Omnidirectional" },
    ],
    applications: "Wind Blade Roots • Defense Structures • Naval Bulkheads",
  },
];

export const FeaturedProductsGrid: React.FC = () => {
  const { openRFQ } = useRFQ();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeProduct = PRODUCT_LINES[activeIndex];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#ffffff] border-b border-black/[0.08]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Sharp & Modern */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 bg-[#cc410f]" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-kraft-olive font-semibold">
                WHAT WE PRODUCE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-kraft-headline tracking-tight uppercase leading-[0.95]">
              FIVE PRODUCTION
              <br />
              <span className="text-[#cc410f]">LINES UNDER</span> ONE ROOF
            </h2>
          </div>

          <div className="max-w-md md:text-right">
            <p className="font-sans text-xs text-kraft-cream/80 leading-relaxed font-normal">
              One quote, one schedule, one shipping origin. German Karl Mayer warp knitting technology engineered with precision non-crimp fiber layups in Surat, Gujarat.
            </p>
          </div>
        </div>

        {/* Quick Product Tabs / Selector Bar (Edge-to-edge touch scroll on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x sm:justify-start">
          {PRODUCT_LINES.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`group flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 border whitespace-nowrap min-h-[42px] [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] ${
                  isActive
                    ? "bg-[#110f0e] text-white border-[#110f0e] shadow-sm"
                    : "bg-[#f8f7f4] hover:bg-[#eae7e0] text-[#38342f] border-black/[0.08]"
                }`}
              >
                <span
                  className={`text-[10px] font-bold ${
                    isActive ? "text-[#cc410f]" : "text-black/40 group-hover:text-[#cc410f]"
                  }`}
                >
                  {item.num}
                </span>
                <span className="font-semibold">{item.shortTitle}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#cc410f] animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            DESKTOP LAYOUT (Framer Accordion Image Animation UI/UX)
            - Active item expands to ~70% width
            - Inactive items contract into narrow interactive vertical preview strips
            - Fluid transition using Framer Motion layout animations
           ========================================================================= */}
        <div className="hidden md:flex flex-row gap-3 h-[580px] lg:h-[620px] w-full overflow-hidden select-none">
          {PRODUCT_LINES.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                transition={{
                  layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                }}
                className={`relative h-full overflow-hidden cursor-pointer transition-colors duration-300 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] ${
                  isActive
                    ? "flex-[5] lg:flex-[5.5] border-2 border-[#110f0e] shadow-xl bg-[#0c0a09]"
                    : "flex-1 min-w-[70px] lg:min-w-[85px] border border-black/[0.12] hover:border-[#cc410f]/70 bg-[#161413] group"
                }`}
              >
                {/* Background Image with Framer-style Responsive Crop */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={isActive ? "(max-width: 1200px) 70vw, 900px" : "150px"}
                  className={`object-cover object-center transition-all duration-700 ${
                    isActive
                      ? "opacity-100 scale-100 filter contrast-105"
                      : "opacity-45 group-hover:opacity-85 group-hover:scale-110 filter contrast-125"
                  }`}
                  priority={idx === 0}
                />

                {/* Scrim Gradients */}
                {isActive ? (
                  <>
                    {/* Top Scrim for header badges */}
                    <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#0c0a09]/80 via-[#0c0a09]/30 to-transparent pointer-events-none z-10" />
                    {/* Bottom Scrim for high-contrast text and specs */}
                    <div className="absolute bottom-0 inset-x-0 h-[58%] bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/75 to-transparent pointer-events-none z-10" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/25 transition-colors duration-300 z-10 pointer-events-none" />
                )}

                {/* ---------------- ACTIVE CARD CONTENT ---------------- */}
                {isActive && (
                  <div className="relative z-20 h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    {/* Top Status Bar */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-white bg-black/70 px-3 py-1.5 border border-white/15 backdrop-blur-md flex items-center gap-2 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#cc410f] animate-ping" />
                          LINE {item.num} // {item.angles}
                        </span>
                        <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-white/60 bg-white/10 px-2.5 py-1.5 border border-white/10 backdrop-blur-md">
                          GERMAN WARP KNIT
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#cc410f] bg-[#cc410f]/15 px-2.5 py-1 border border-[#cc410f]/30 font-bold">
                          ACTIVE LINE
                        </span>
                      </div>
                    </div>

                    {/* Bottom Animated Content (Framer-style blur and translateY entrance) */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col"
                      >
                        {/* Subtitle / Category */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-2 h-0.5 bg-[#cc410f]" />
                          <span className="font-mono text-xs uppercase tracking-widest text-[#cc410f] font-bold">
                            {item.subtitle}
                          </span>
                        </div>

                        {/* Large Headline */}
                        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-[0.98] font-bold mb-3 drop-shadow-sm">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mb-6">
                          {item.description}
                        </p>

                        {/* Technical Specs Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-3.5 px-4 mb-6 bg-black/60 border border-white/10 backdrop-blur-md [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
                          {item.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="flex flex-col">
                              <span className="font-mono text-[9px] uppercase tracking-wider text-white/50 mb-0.5">
                                {spec.label}
                              </span>
                              <span className="font-mono text-xs sm:text-[13px] font-bold text-white tracking-wider">
                                {spec.val}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openRFQ(item.slug);
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#cc410f] hover:bg-[#e04812] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] shadow-lg hover:shadow-orange-900/40 hover:-translate-y-0.5"
                          >
                            <span>Request Instant RFQ</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>

                          <Link
                            href="/products"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 border border-white/15 backdrop-blur-sm [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)]"
                          >
                            <span>Full Spec Sheet</span>
                            <ChevronRight className="w-3.5 h-3.5 text-white/70" />
                          </Link>

                          <div className="hidden xl:flex items-center gap-2 ml-auto text-white/50 font-mono text-[10px] uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>In-Stock Readiness • Surat Facility</span>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {/* ---------------- INACTIVE STRIP CONTENT ---------------- */}
                {!isActive && (
                  <div className="relative z-20 h-full flex flex-col justify-between items-center py-6 px-2">
                    {/* Top Number Pill */}
                    <div className="font-mono text-[11px] font-bold text-white bg-black/70 px-2 py-1 border border-white/15 [clip-path:polygon(0_0,calc(100%-4px)_0,100%_4px,100%_100%,0_100%)] group-hover:text-[#cc410f] transition-colors">
                      {item.num}
                    </div>

                    {/* Centered Rotated Text */}
                    <div className="my-auto [writing-mode:vertical-rl] rotate-180 flex items-center justify-center">
                      <span className="font-display tracking-widest text-xs lg:text-sm uppercase font-bold text-white/70 group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                    </div>

                    {/* Bottom Expand Cue */}
                    <div className="w-7 h-7 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white/60 group-hover:text-[#cc410f] group-hover:border-[#cc410f]/60 transition-all duration-200">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            MOBILE & TABLET LAYOUT
            - Vertical Accordion Layout with Smooth Spring Transitions
            - Tap to expand active card with image & specifications
           ========================================================================= */}
        <div className="flex md:hidden flex-col gap-3 w-full">
          {PRODUCT_LINES.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                transition={{
                  layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                }}
                className={`relative overflow-hidden cursor-pointer border transition-colors [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] ${
                  isActive
                    ? "border-[#110f0e] bg-[#0c0a09] shadow-lg min-h-[460px] flex flex-col justify-between p-5"
                    : "border-black/[0.1] bg-[#161413] min-h-[64px] flex items-center justify-between px-4 py-3 active:bg-[#201d1b]"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={`object-cover object-center transition-opacity duration-500 ${
                    isActive ? "opacity-100 filter contrast-105" : "opacity-35 filter contrast-125"
                  }`}
                  priority={idx === 0}
                />

                {isActive ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/80 to-black/50 pointer-events-none z-10" />

                    {/* Active Mobile Top Status */}
                    <div className="relative z-20 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-black/70 px-2.5 py-1 border border-white/15">
                        LINE {item.num} // {item.angles}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#cc410f] bg-[#cc410f]/15 px-2 py-0.5 border border-[#cc410f]/30 font-bold">
                        ACTIVE
                      </span>
                    </div>

                    {/* Active Mobile Bottom Content */}
                    <div className="relative z-20 mt-auto pt-6">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#cc410f] font-bold block mb-1">
                        {item.subtitle}
                      </span>
                      <h3 className="font-display text-2xl text-white tracking-tight uppercase font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-white/80 leading-relaxed mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-2 py-2.5 px-3 mb-4 bg-black/60 border border-white/10 text-[10px] font-mono">
                        {item.specs.slice(0, 2).map((spec, sIdx) => (
                          <div key={sIdx}>
                            <span className="text-white/50 block text-[8px] uppercase">{spec.label}</span>
                            <span className="text-white font-bold">{spec.val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openRFQ(item.slug);
                          }}
                          className="flex-1 py-3 min-h-[46px] bg-[#cc410f] active:bg-[#a8340a] text-white font-mono text-xs uppercase font-bold tracking-wider text-center flex items-center justify-center shadow-md"
                        >
                          Request RFQ
                        </button>
                        <Link
                          href="/products"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-3 min-h-[46px] bg-white/15 active:bg-white/25 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center"
                        >
                          Specs
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/55 pointer-events-none z-10" />
                    <div className="relative z-20 flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#cc410f] bg-black/60 px-2.5 py-1 border border-white/15">
                        {item.num}
                      </span>
                      <span className="font-display text-sm uppercase tracking-wide font-bold text-white">
                        {item.title}
                      </span>
                    </div>
                    <div className="relative z-20 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/70">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Action link to complete catalog */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/[0.08]">
          <div className="text-xs font-mono text-kraft-olive uppercase tracking-wider text-center sm:text-left">
            Production Quality: ISO 9001:2015 Certified • Karl Mayer Warp Knitting • 100% Batch Tested
          </div>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 min-h-[46px] bg-[#110f0e] hover:bg-[#cc410f] text-white font-mono text-xs uppercase font-bold tracking-wider border border-black/10 transition-all [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] shadow-md text-center"
          >
            <span>Explore All 7 Products in Catalog</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
