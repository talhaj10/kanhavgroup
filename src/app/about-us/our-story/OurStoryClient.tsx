"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ManufacturingCapacity } from "@/components/sections/ManufacturingCapacity";
import { KANHAV_DATA } from "@/data/kanhav-data";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function OurStoryClient() {
  return (
    <div className="relative pt-6 sm:pt-10 pb-12">
      {/* Subpage Breadcrumb Navigation */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-kraft-olive">
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
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
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

      {/* Deep Dive Historical Milestones */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-t border-black/[0.08]">
        <SectionHeader
          badge="Thirty Years Heritage"
          title="Milestone by Milestone: Three Decades of Growth"
          subtitle="Explore the pivotal expansions and technological investments that shaped Kanhav Industries."
        />

        <div className="space-y-8">
          {KANHAV_DATA.timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.08] shadow-sm flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              <div className="shrink-0 flex items-center md:flex-col items-baseline md:items-start gap-3">
                <span className="font-display text-5xl sm:text-6xl text-kraft-orange font-bold">
                  {item.year}
                </span>
                <span className="font-mono text-xs text-kraft-olive uppercase tracking-widest font-semibold">
                  Phase 0{idx + 1}
                </span>
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-kraft-headline">
                  {item.title}
                </h3>
                <p className="text-sm text-kraft-cream leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                  {item.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-kraft-cream">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manufacturing Scale Integration */}
      <ManufacturingCapacity />
    </div>
  );
}
