"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Factory, Award, Globe2, Cpu, ArrowUpRight, Users } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";
import { ParallaxImage } from "@/components/ui/Parallax";

export const AboutBento: React.FC = () => {
  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20 bg-[#f8f7f4] border-b border-black/[0.08]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Company Overview"
          title="Industrial Scale with Precision German Engineering"
          subtitle="Dedicated to advancing India's composite ecosystem through high-tenacity Multi-Axial Glass Fabrics and Warp-Knitted technical textiles."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Main Hero Bento Card (Span 8 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between group card-hover"
        >
          {/* Subtle parallax background photo */}
          <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-15 transition-opacity">
            <ParallaxImage
              src="/assets/images/about-us-page-background.webp"
              alt="Kanhav Surat Facility"
              speed={-0.12}
              scale={1.16}
              containerClassName="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent z-10" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-kraft-elevated text-kraft-orange font-mono text-[10px] uppercase tracking-wider font-semibold border border-black/[0.08]">
                Surat Manufacturing Unit
              </span>
              <span className="font-mono text-xs text-kraft-cream/70">
                Established 2024 · Group Est. 2011
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-kraft-headline leading-tight">
              Pioneering Multi-Axial Glass Fabrics for the Indian Composite Market
            </h3>

            <p className="text-sm sm:text-base text-kraft-cream/80 leading-relaxed font-normal">
              {KANHAV_DATA.company.overview}
            </p>
          </div>

          <div className="relative z-10 pt-8 mt-6 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-kraft-headline font-semibold">
                  German Warp Knitting Systems
                </p>
                <p className="text-[11px] text-kraft-cream/60">
                  State-of-the-art multi-axial reinforcement machines
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-kraft-orange font-semibold">
              <span>Turnover: {KANHAV_DATA.company.turnover}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Stat Card 1: $19M Turnover (Span 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-4 glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between card-hover relative overflow-hidden"
        >
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-lg bg-kraft-elevated flex items-center justify-center text-kraft-orange mb-3 border border-black/[0.08]">
              <Globe2 className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-kraft-olive font-semibold">
              Group Financial Strength
            </span>
            <div className="font-display text-5xl sm:text-6xl text-kraft-headline tracking-wide">
              $19<span className="text-kraft-orange">M</span>
            </div>
            <p className="text-xs text-kraft-cream/80 leading-relaxed pt-1">
              Kanhav Group operates with financial robustness, enabling long-term capital investments into advanced machinery, raw material inventories, and global supply chains.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-black/[0.06] font-mono text-[11px] text-kraft-cream/60">
            Backed by 3 decades of manufacturing heritage
          </div>
        </motion.div>

        {/* Lower Card 1: Production Capacity (Span 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-4 glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between card-hover"
        >
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-lg bg-kraft-elevated flex items-center justify-center text-kraft-orange mb-3 border border-black/[0.08]">
              <Factory className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-kraft-olive font-semibold">
              Annual Capacity
            </span>
            <div className="font-display text-4xl sm:text-5xl text-kraft-headline tracking-wide">
              2,000<span className="text-kraft-orange text-3xl">+ T</span>
            </div>
            <p className="text-xs text-kraft-cream/80 leading-relaxed pt-1">
              Total group production capacity ensuring dependable high-volume fulfillment for large-scale infrastructure and wind power projects.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-black/[0.06] font-mono text-[11px] text-emerald-700 font-medium">
            ● 840 MT/PA Warp + 780 MT/PA Circular
          </div>
        </motion.div>

        {/* Lower Card 2: 25+ Years Experience (Span 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-4 glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between card-hover"
        >
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-lg bg-kraft-elevated flex items-center justify-center text-kraft-orange mb-3 border border-black/[0.08]">
              <Award className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-kraft-olive font-semibold">
              Industry Experience
            </span>
            <div className="font-display text-4xl sm:text-5xl text-kraft-headline tracking-wide">
              30<span className="text-kraft-orange text-3xl">+ YRS</span>
            </div>
            <p className="text-xs text-kraft-cream/80 leading-relaxed pt-1">
              Continuous innovation in DTY texturising, Nylon FDY yarns, and multi-axial composites since foundational commencement in 1994.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-black/[0.06] font-mono text-[11px] text-kraft-cream/60">
            Founder-led operational leadership
          </div>
        </motion.div>

        {/* Lower Card 3: 150+ Employees (Span 4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-4 glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between card-hover"
        >
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-lg bg-kraft-elevated flex items-center justify-center text-kraft-orange mb-3 border border-black/[0.08]">
              <Users className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-kraft-olive font-semibold">
              Workforce & Talent
            </span>
            <div className="font-display text-4xl sm:text-5xl text-kraft-headline tracking-wide">
              150<span className="text-kraft-orange text-3xl">+</span>
            </div>
            <p className="text-xs text-kraft-cream/80 leading-relaxed pt-1">
              Highly trained textile engineers, quality control inspectors, and operations managers operating around the clock in Surat.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-black/[0.06] font-mono text-[11px] text-kraft-cream/60">
            Specialized composite technicians
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};
