"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRFQ } from "@/context/RFQContext";
import { KANHAV_DATA } from "@/data/kanhav-data";

interface HeroProps {
  onOpenRFQ?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRFQ }) => {
  const { openRFQ } = useRFQ();
  const handleRFQ = onOpenRFQ || openRFQ;
  const [activeMetricIdx, setActiveMetricIdx] = useState(0);

  const metricWindows = [
    { label: "Standard lead time", value: "12 DAYS", sub: "CURRENT PRODUCTION WINDOW" },
    { label: "Warp Knitting capacity", value: "840 MT", sub: "GERMAN WARP CAPACITY" },
    { label: "Group turnover", value: "$19M", sub: "FINANCIAL STABILITY" },
  ];

  const currentWindow = metricWindows[activeMetricIdx];

  return (
    <section className="relative w-full min-h-[calc(100vh-57px)] flex flex-col lg:flex-row bg-[#14120f] overflow-hidden">
      {/* =========================================================================
          LEFT PANEL: Solid Burnt Orange (#c93f0b) with Kraftline Chamfer Corner
          ========================================================================= */}
      <div className="w-full lg:w-[45%] xl:w-[42%] bg-[#c93f0b] text-white p-7 sm:p-12 lg:p-14 flex flex-col justify-between relative z-10 shrink-0 [clip-path:polygon(0_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%)]">
        {/* Top Ticker: 01 << ISO 14001 << FSC... Kraftline Style */}
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-white/60 tracking-widest uppercase mb-10 sm:mb-14 overflow-hidden">
          <span className="text-white/80 font-bold">01</span>
          <span className="text-white/40">&lt;&lt;</span>
          <span>GERMAN MACHINERY</span>
          <span className="text-white/40">&lt;&lt;</span>
          <span>ISO COMPLIANT</span>
          <span className="text-white/40">&lt;&lt;</span>
          <span className="hidden sm:inline">MAKE IN INDIA</span>
          <span className="hidden sm:inline text-white/40">&lt;&lt;</span>
        </div>

        {/* Main Title: BUILT TO SPEC. [WOVEN] ON TIME. */}
        <div className="my-auto py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[88px] leading-[0.88] tracking-tight text-white uppercase select-none">
              BUILT TO SPEC.
              <br />
              <span className="inline-flex items-center mt-1">
                <span className="bg-[#14120f] text-white px-3 sm:px-4 py-0.5 sm:py-1 mr-2 inline-block font-display tracking-tight text-[0.9em]">
                  WOVEN
                </span>
                <span>WITH TRUST.</span>
              </span>
            </h1>
          </motion.div>

          {/* Authentic Kanhav Paragraph Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/85 leading-relaxed max-w-md font-sans font-normal"
          >
            Multi-axial glass fabrics, warp-knitted technical textiles, and nylon FDY yarns from our advanced German-equipped facility in Surat, Gujarat. Six warp and circular lines, in-house technical weaving, finishing, and fulfillment.
          </motion.p>

          {/* Buttons Row: Kraftline Style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3.5 mt-8 sm:mt-10"
          >
            {/* Primary Button: Off-white rectangle */}
            <button
              onClick={() => handleRFQ()}
              className="bg-[#ece8e1] hover:bg-white text-black font-mono text-xs font-bold tracking-wider uppercase px-6 sm:px-7 py-3.5 transition-colors shadow-md"
            >
              Order a sample kit
            </button>

            {/* Secondary Button: Black button with chamfered corner */}
            <a
              href="#products"
              className="bg-black hover:bg-[#252320] text-white font-mono text-xs font-bold tracking-wider uppercase px-6 sm:px-7 py-3.5 transition-colors [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] shadow-md"
            >
              View materials
            </a>
          </motion.div>
        </div>

        {/* Bottom subtle footnote */}
        <div className="pt-6 font-mono text-[10px] text-white/40 uppercase tracking-widest">
          Kanhav Industries Pvt. Ltd. · Surat Facility
        </div>
      </div>

      {/* =========================================================================
          RIGHT PANEL: Full-Bleed High-Res Industrial Facility Photo + Floating HUD
          ========================================================================= */}
      <div className="relative flex-1 min-h-[450px] lg:min-h-full w-full bg-[#14120f] overflow-hidden">
        {/* Full-bleed Factory Photography */}
        <Image
          src="/assets/images/industrial-furnace-hall-reflections.png"
          alt="Kanhav Industries High-Tech Industrial Facility"
          fill
          priority
          className="object-cover object-center filter brightness-95 contrast-105"
        />

        {/* Ambient subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Floating Technical HUD Widget (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 z-20 w-[270px] sm:w-[320px] bg-[#14120f]/85 backdrop-blur-md border border-white/10 p-5 sm:p-6 text-white shadow-2xl [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]"
        >
          {/* Top Label */}
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 block mb-3 font-semibold">
            {currentWindow.sub}
          </span>

          {/* Metric Row */}
          <div className="flex items-end justify-between gap-4">
            <div className="font-mono text-xs text-white/80 leading-tight">
              {currentWindow.label.split(" ")[0]}
              <br />
              {currentWindow.label.split(" ").slice(1).join(" ")}
            </div>

            <div className="font-display text-4xl sm:text-5xl text-[#cc410f] font-bold tracking-tight text-right leading-none">
              {currentWindow.value}
            </div>
          </div>

          {/* Progress Indicator Dashes (Carousel controls) */}
          <div className="flex items-center gap-2 mt-5 pt-3 border-t border-white/10">
            {metricWindows.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMetricIdx(idx)}
                className={`h-1 flex-1 transition-all rounded-full ${
                  idx === activeMetricIdx ? "bg-white" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Select metric window ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
