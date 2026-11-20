"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRFQ } from "@/context/RFQContext";
import { KANHAV_DATA } from "@/data/kanhav-data";
import { ParallaxImage, ParallaxLayer } from "@/components/ui/Parallax";

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
      <div className="w-full lg:w-[45%] xl:w-[42%] bg-[#c93f0b] text-white p-5 sm:p-10 lg:p-14 flex flex-col justify-between relative z-10 shrink-0 [clip-path:polygon(0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%)]">
        {/* Top Ticker: 01 << ISO 14001 << FSC... Kraftline Style */}
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-white/60 tracking-wider uppercase mb-6 sm:mb-14 overflow-hidden whitespace-nowrap">
          <span className="text-white/90 font-bold shrink-0">01</span>
          <span className="text-white/40 shrink-0">&lt;&lt;</span>
          <span className="shrink-0">GERMAN MACHINERY</span>
          <span className="text-white/40 shrink-0">&lt;&lt;</span>
          <span className="shrink-0">ISO COMPLIANT</span>
          <span className="text-white/40 shrink-0">&lt;&lt;</span>
          <span className="hidden sm:inline shrink-0">MAKE IN INDIA</span>
          <span className="hidden sm:inline text-white/40 shrink-0">&lt;&lt;</span>
        </div>

        {/* Main Title: BUILT TO SPEC. [WOVEN] ON TIME. */}
        <div className="my-auto py-2 sm:py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[42px] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[88px] leading-[0.88] tracking-tight text-white uppercase select-none">
              BUILT TO SPEC.
              <br />
              <span className="inline-flex items-center mt-1 flex-wrap">
                <span className="bg-[#14120f] text-white px-2.5 sm:px-4 py-0.5 sm:py-1 mr-2 inline-block font-display tracking-tight text-[0.9em]">
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
            className="mt-5 sm:mt-8 text-xs sm:text-sm text-white/90 leading-relaxed max-w-md font-sans font-normal"
          >
            Multi-axial glass fabrics, warp-knitted technical textiles, and nylon FDY yarns from our advanced German-equipped facility in Surat, Gujarat. Six warp and circular lines, in-house technical weaving, finishing, and fulfillment.
          </motion.p>

          {/* Buttons Row: Kraftline Style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-7 sm:mt-10"
          >
            {/* Primary Button: Off-white rectangle */}
            <button
              onClick={() => handleRFQ()}
              className="bg-[#ece8e1] hover:bg-white text-black font-mono text-xs font-bold tracking-wider uppercase px-6 sm:px-7 py-3.5 transition-colors shadow-md text-center flex items-center justify-center min-h-[46px] active:scale-[0.99]"
            >
              Order a sample kit
            </button>

            {/* Secondary Button: Black button with chamfered corner */}
            <a
              href="#products"
              className="bg-black hover:bg-[#252320] text-white font-mono text-xs font-bold tracking-wider uppercase px-6 sm:px-7 py-3.5 transition-colors [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] shadow-md text-center flex items-center justify-center min-h-[46px] active:scale-[0.99]"
            >
              View materials
            </a>
          </motion.div>
        </div>

        {/* Bottom subtle footnote */}
        <div className="pt-5 sm:pt-6 font-mono text-[10px] text-white/50 uppercase tracking-widest">
          Kanhav Industries Pvt. Ltd. · Surat Facility
        </div>
      </div>

      {/* =========================================================================
          RIGHT PANEL: Full-Bleed High-Res Industrial Facility Photo + Floating HUD
          ========================================================================= */}
      <div className="relative flex-1 min-h-[360px] sm:min-h-[450px] lg:min-h-full w-full bg-[#14120f] overflow-hidden">
        {/* Parallax Factory Photography */}
        <ParallaxImage
          src="/assets/images/industrial-furnace-hall-reflections.png"
          alt="Kanhav Industries High-Tech Industrial Facility"
          fill
          priority
          speed={-0.16}
          scale={1.16}
          sizes="(max-width: 1024px) 100vw, 58vw"
          containerClassName="absolute inset-0 w-full h-full"
          imageClassName="object-center filter brightness-95 contrast-105"
        />

        {/* Ambient subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none z-10" />

        {/* Floating Technical HUD Widget with Optical Depth */}
        <div className="absolute bottom-4 sm:bottom-10 left-4 right-4 sm:left-auto sm:right-10 z-20 sm:w-[320px] max-w-[340px] mx-auto sm:mx-0">
          <ParallaxLayer speed={0.10} travelDistance={28}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-[#14120f]/90 backdrop-blur-md border border-white/10 p-4 sm:p-6 text-white shadow-2xl [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)]"
            >
              {/* Top Label */}
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/60 block mb-2 sm:mb-3 font-semibold">
                {currentWindow.sub}
              </span>

              {/* Metric Row */}
              <div className="flex items-end justify-between gap-4">
                <div className="font-mono text-[11px] sm:text-xs text-white/80 leading-tight">
                  {currentWindow.label.split(" ")[0]}
                  <br />
                  {currentWindow.label.split(" ").slice(1).join(" ")}
                </div>

                <div className="font-display text-3xl sm:text-5xl text-[#cc410f] font-bold tracking-tight text-right leading-none">
                  {currentWindow.value}
                </div>
              </div>

              {/* Progress Indicator Dashes (Carousel controls) */}
              <div className="flex items-center gap-2 mt-4 sm:mt-5 pt-3 border-t border-white/10">
                {metricWindows.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMetricIdx(idx)}
                    className="py-2 flex-1 flex items-center justify-center focus:outline-none cursor-pointer"
                    aria-label={`Select metric window ${idx + 1}`}
                  >
                    <span
                      className={`h-1 w-full rounded-full transition-all ${
                        idx === activeMetricIdx ? "bg-white" : "bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
};
