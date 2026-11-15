"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Cpu, Gauge, Zap, Cog, ShieldCheck } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const ManufacturingCapacity: React.FC = () => {
  return (
    <section id="capacity" className="w-full py-12 sm:py-16 lg:py-20 border-b border-black/[0.08] bg-[#ffffff]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Manufacturing Scale"
          title="Industrial Plant Machinery & Production Capacity"
          subtitle="Precision German warp knitting lines and high-output circular systems delivering over 1,620+ MT/PA across specialized technical fabrics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Warp Knitting Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between border border-black/[0.08] shadow-sm card-hover"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-kraft-orange/10 border border-kraft-orange/20 flex items-center justify-center text-kraft-orange">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-kraft-headline">
                      {KANHAV_DATA.capacity.warpKnitting.title}
                    </h3>
                    <p className="font-mono text-xs text-kraft-olive">
                      {KANHAV_DATA.capacity.warpKnitting.machineryOrigin}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs uppercase font-semibold">
                  German Tech
                </span>
              </div>

              {/* Stat callout */}
              <div className="p-5 rounded-xl bg-[#f8f7f4] border border-black/[0.08] flex items-baseline justify-between">
                <div>
                  <span className="font-mono text-xs uppercase text-kraft-olive">
                    Annual Throughput
                  </span>
                  <div className="font-display text-4xl sm:text-5xl text-kraft-headline tracking-wide mt-1">
                    {KANHAV_DATA.capacity.warpKnitting.capacity}
                  </div>
                </div>
                <Gauge className="w-8 h-8 text-kraft-orange/70" />
              </div>

              {/* Machine inventory */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-kraft-headline font-semibold">
                  Active Machine Configuration:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {KANHAV_DATA.capacity.warpKnitting.machines.map((mach, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-lg bg-[#f8f7f4] border border-black/[0.08] text-center"
                    >
                      <Cog className="w-4 h-4 mx-auto text-kraft-orange mb-1.5" />
                      <span className="font-mono text-xs font-semibold text-kraft-headline block">
                        {mach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.08] flex items-center justify-between font-mono text-xs text-kraft-cream/70">
              <span>Location: Surat Facility</span>
              <span className="text-kraft-orange font-semibold">High Tenacity Composites</span>
            </div>
          </motion.div>

          {/* Circular Knitting Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between border border-black/[0.08] shadow-sm card-hover"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-kraft-elevated border border-black/[0.08] flex items-center justify-center text-kraft-headline">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-kraft-headline">
                      {KANHAV_DATA.capacity.circularKnitting.title}
                    </h3>
                    <p className="font-mono text-xs text-kraft-olive">
                      {KANHAV_DATA.capacity.circularKnitting.machineryOrigin}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-kraft-elevated border border-black/[0.08] text-kraft-headline font-mono text-xs uppercase font-semibold">
                  High-Output
                </span>
              </div>

              {/* Stat callout */}
              <div className="p-5 rounded-xl bg-[#f8f7f4] border border-black/[0.08] flex items-baseline justify-between">
                <div>
                  <span className="font-mono text-xs uppercase text-kraft-olive">
                    Annual Throughput
                  </span>
                  <div className="font-display text-4xl sm:text-5xl text-kraft-headline tracking-wide mt-1">
                    {KANHAV_DATA.capacity.circularKnitting.capacity}
                  </div>
                </div>
                <Gauge className="w-8 h-8 text-kraft-olive/50" />
              </div>

              {/* Machine inventory */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-kraft-headline font-semibold">
                  Active Machine Configuration:
                </h4>
                <div className="p-4 rounded-lg bg-[#f8f7f4] border border-black/[0.08] flex items-center gap-3">
                  <Cog className="w-5 h-5 text-kraft-orange shrink-0" />
                  <div>
                    <span className="font-mono text-xs font-semibold text-kraft-headline block">
                      12 High-Speed Circular Machines
                    </span>
                    <span className="text-[11px] text-kraft-cream/70">
                      Optimized for tubular, net, and multi-ply industrial textiles
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.08] flex items-center justify-between font-mono text-xs text-kraft-cream/70">
              <span>Location: Surat Facility</span>
              <span className="text-emerald-700 font-semibold">Continuous Production</span>
            </div>
          </motion.div>
        </div>

        {/* Quality Banner */}
        <div className="p-6 rounded-2xl bg-[#f8f7f4] border border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <p className="text-xs sm:text-sm text-kraft-cream/80">
              All production processes adhere to rigorous quality controls with automated tensile testing, GSM verification, and resin-infusion compatibility checks.
            </p>
          </div>
          <span className="font-mono text-xs text-kraft-orange uppercase shrink-0 font-semibold">
            Quality Assured
          </span>
        </div>
      </div>
    </section>
  );
};
