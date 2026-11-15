"use client";

import React from "react";
import { motion } from "framer-motion";
import { CareersSection } from "@/components/sections/CareersSection";
import { KANHAV_DATA } from "@/data/kanhav-data";
import { CheckCircle2, ShieldCheck, HeartHandshake, Zap } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="relative pt-8 sm:pt-12 pb-12">
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
            <span>Opportunities</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-kraft-headline tracking-tight uppercase leading-[0.95]">
            CAREERS AT KANHAV
          </h1>
          <p className="text-base sm:text-xl text-kraft-cream max-w-3xl leading-relaxed">
            Join a rapidly growing leader in technical composite textiles. Work alongside experienced engineering teams at our advanced Surat manufacturing facility operating cutting-edge German warp knitting machinery.
          </p>
        </motion.div>
      </section>

      {/* Main Careers Content & Application Form */}
      <CareersSection />

      {/* Culture & Working Environment Highlights */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-black/[0.08] shadow-sm">
            <Zap className="w-6 h-6 text-kraft-orange mb-3" />
            <h4 className="font-bold text-lg text-kraft-headline">Cutting-Edge Machinery</h4>
            <p className="text-xs sm:text-sm text-kraft-cream mt-2 leading-relaxed">
              Gain hands-on expertise with state-of-the-art German warp knitting lines, 4M EL electronic systems, and modern circular knitting equipment.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-black/[0.08] shadow-sm">
            <ShieldCheck className="w-6 h-6 text-emerald-600 mb-3" />
            <h4 className="font-bold text-lg text-kraft-headline">Make in India Mission</h4>
            <p className="text-xs sm:text-sm text-kraft-cream mt-2 leading-relaxed">
              Contribute directly to critical national supply chains in renewable wind energy, electric vehicles, and high-speed rail transportation.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-black/[0.08] shadow-sm">
            <HeartHandshake className="w-6 h-6 text-amber-500 mb-3" />
            <h4 className="font-bold text-lg text-kraft-headline">Long-Term Growth</h4>
            <p className="text-xs sm:text-sm text-kraft-cream mt-2 leading-relaxed">
              Structured continuous skill training, competitive compensation packages, and clear career pathways for engineers and operators alike.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
