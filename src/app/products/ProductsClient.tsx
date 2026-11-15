"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { ApplicationsGrid } from "@/components/sections/ApplicationsGrid";
import { useRFQ } from "@/context/RFQContext";

export default function ProductsClient() {
  const { openRFQ } = useRFQ();

  return (
    <div className="relative pt-8 sm:pt-12 pb-12">
      {/* Header */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ede6] border border-black/10 text-kraft-orange font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 bg-kraft-orange" />
            <span>Product Portfolio</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-kraft-headline tracking-tight uppercase leading-[0.95]">
            TECHNICAL COMPOSITE FABRICS
          </h1>
          <p className="text-base sm:text-xl text-kraft-cream max-w-3xl leading-relaxed">
            Engineered Multi-Axial Glass Fabrics, Stitch Mats, and Combination Mats designed for maximum mechanical strength, high torsional rigidity, and rapid resin wet-out.
          </p>
        </motion.div>
      </section>

      {/* 7 Products Detailed Grid */}
      <ProductsShowcase onOpenRFQ={(slug) => openRFQ(slug)} />

      {/* 12 Industry Applications */}
      <ApplicationsGrid />

      {/* Custom Specification CTA */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 text-center">
        <div className="bg-white p-10 sm:p-14 rounded-3xl border border-black/[0.08] shadow-sm relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-kraft-orange font-semibold">
              Bespoke Manufacturing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-kraft-headline">
              Need a Custom Fiber Layup, GSM, or Width?
            </h2>
            <p className="text-sm sm:text-base text-kraft-cream leading-relaxed">
              We engineer custom multi-axial architectures with tailored fiber orientations (0°, 90°, ±45°), chopped strand ratios, and hybrid aramid/carbon weaves.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openRFQ()}
                className="px-8 py-3.5 rounded-full bg-kraft-orange hover:bg-kraft-orange-hover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                Inquire For Custom Spec
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
