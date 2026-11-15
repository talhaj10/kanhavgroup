"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeritageTimeline } from "@/components/sections/HeritageTimeline";
import { ManufacturingCapacity } from "@/components/sections/ManufacturingCapacity";
import { ChevronRight } from "lucide-react";

export default function OurStoryClient() {
  return (
    <div className="relative pt-6 sm:pt-10 pb-12">
      {/* Subpage Breadcrumb Navigation */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-kraft-olive"
        >
          <Link href="/" className="hover:text-kraft-headline transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-black/30" />
          <Link href="/about-us" className="hover:text-kraft-headline transition-colors">
            About Us
          </Link>
          <ChevronRight className="w-3 h-3 text-black/30" />
          <span className="text-[#cc410f] font-bold">Our Story</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ede6] border border-black/10 text-kraft-orange font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 bg-kraft-orange" />
            <span>Company Evolution (1994–2024)</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-kraft-headline tracking-tight uppercase leading-[0.95]">
            OUR STORY & HERITAGE
          </h1>
          <p className="text-base sm:text-xl text-kraft-cream max-w-3xl leading-relaxed">
            From the initial commencement of yarn texturising in 1994 and the establishment of Salasar Polytex in 2011, to state-of-the-art German warp knitting and solar-powered industrial production in Surat, Gujarat.
          </p>
        </motion.div>
      </section>

      {/* Flagship Interactive Heritage Timeline */}
      <HeritageTimeline />

      {/* Manufacturing Scale Integration */}
      <ManufacturingCapacity />
    </div>
  );
}
