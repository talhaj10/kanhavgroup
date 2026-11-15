"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CoreValues } from "@/components/sections/CoreValues";
import { CeoMessage } from "@/components/sections/CeoMessage";
import { PresenceMap } from "@/components/sections/PresenceMap";
import { useRFQ } from "@/context/RFQContext";
import { KANHAV_DATA } from "@/data/kanhav-data";
import { Cpu, ShieldCheck, Award, Factory, ArrowRight } from "lucide-react";

export default function AboutUsPage() {
  const { openRFQ } = useRFQ();

  return (
    <div className="relative pt-8 sm:pt-12 pb-12">
      {/* Page Header Banner */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ede6] border border-black/10 text-kraft-orange font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 bg-kraft-orange" />
            <span>Corporate Profile</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-kraft-headline tracking-tight uppercase leading-[0.95]">
            ABOUT KANHAV INDUSTRIES
          </h1>
          <p className="text-base sm:text-xl text-kraft-cream max-w-3xl leading-relaxed">
            At Kanhav Industries Private Limited, we pride ourselves on being a leading force in the textile industry, specializing in warp-knitted textiles and nylon FDY yarns. As a key subsidiary of the Kanhav Group, established in 2011, we bring a rich heritage of innovation, quality, and excellence to every product we create.
          </p>
        </motion.div>
      </section>

      {/* Group Metrics Grid */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {[
            { val: "19 M", label: "Annual Turnover", sub: "USD ($) Kanhav Group" },
            { val: "2000 T", label: "Production Capacity", sub: "Annual Metric Tonnes" },
            { val: "25 +", label: "Years Experience", sub: "Textile manufacturing legacy" },
            { val: "150 +", label: "Number of Employees", sub: "Skilled specialists & engineers" },
            { val: "2011", label: "Established Year", sub: "Kanhav Group foundation" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-white p-5 sm:p-6 rounded-xl border border-black/[0.08] shadow-sm text-center"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-kraft-headline tracking-wide">
                {item.val}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-kraft-headline font-bold mt-2">
                {item.label}
              </div>
              <div className="text-[11px] text-kraft-olive mt-1">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialisations Section */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <SectionHeader
          badge="Core Competencies"
          title="Our Industrial Specialisations"
          subtitle="Precision manufacturing backed by advanced German technology and strict international standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {KANHAV_DATA.specialisations.map((spec, idx) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 sm:p-10 rounded-2xl border border-black/[0.08] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0ede6] flex items-center justify-center text-kraft-orange border border-black/[0.08]">
                  {idx === 0 ? <Cpu className="w-6 h-6" /> : <Factory className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-bold text-kraft-headline">
                  {spec.title}
                </h3>
                <p className="text-sm sm:text-base text-kraft-cream leading-relaxed font-normal">
                  {spec.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.08] flex items-center justify-between font-mono text-xs text-kraft-olive">
                <span>Surat, Gujarat Facility</span>
                <span className="text-kraft-orange font-bold">German Technology</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values & Vision / Mission */}
      <CoreValues />

      {/* CEO Message Editorial */}
      <CeoMessage />

      {/* Presence Across India */}
      <PresenceMap />

      {/* Bottom CTA */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 text-center">
        <div className="bg-white p-10 sm:p-14 rounded-3xl border border-black/[0.08] shadow-sm relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-kraft-orange font-semibold">
              Partner With Kanhav
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-kraft-headline">
              Ready to Discuss Your Technical Fabric Specifications?
            </h2>
            <p className="text-sm sm:text-base text-kraft-cream leading-relaxed">
              Our engineering team in Surat will review your tensile, weight, resin infusion, and volume requirements.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openRFQ()}
                className="px-8 py-3.5 rounded-full bg-kraft-orange hover:bg-kraft-orange-hover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                Request a Technical Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
