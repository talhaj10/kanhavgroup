"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeartHandshake, Flame, ShieldCheck, Target, Compass, Sparkles } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const CoreValues: React.FC = () => {
  const pillarIcons = [
    <HeartHandshake key="cust" className="w-6 h-6 text-kraft-orange" />,
    <Flame key="pass" className="w-6 h-6 text-kraft-orange" />,
    <ShieldCheck key="auth" className="w-6 h-6 text-kraft-orange" />,
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 border-b border-black/[0.08] bg-[#ffffff]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Guiding Principles"
          title="Customer First, Passion & Authenticity"
          subtitle="Our core ethos drives enduring relationships grounded in transparency, technological superiority, and outstanding service."
        />

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {KANHAV_DATA.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between card-hover border border-black/[0.08] shadow-sm relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-kraft-elevated flex items-center justify-center border border-black/[0.08]">
                  {pillarIcons[idx]}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-kraft-headline">
                  {pillar.title}
                </h3>
                <p className="text-sm text-kraft-cream/80 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.06] font-mono text-[11px] text-kraft-olive uppercase tracking-wider">
                Core Principle 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision, Mission & Commitment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t border-black/[0.08]">
          {/* Vision */}
          <div className="p-6 rounded-2xl bg-[#f8f7f4] border border-black/[0.08]">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-kraft-orange" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-kraft-headline font-semibold">
                Our Vision
              </h4>
            </div>
            <p className="text-sm text-kraft-cream/80 leading-relaxed">
              {KANHAV_DATA.visionMission.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="p-6 rounded-2xl bg-[#f8f7f4] border border-black/[0.08]">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-emerald-600" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-kraft-headline font-semibold">
                Our Mission
              </h4>
            </div>
            <p className="text-sm text-kraft-cream/80 leading-relaxed">
              {KANHAV_DATA.visionMission.mission}
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="p-6 rounded-2xl bg-[#f8f7f4] border border-black/[0.08]">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-kraft-headline font-semibold">
                Why Choose Kanhav
              </h4>
            </div>
            <p className="text-sm text-kraft-cream/80 leading-relaxed">
              {KANHAV_DATA.visionMission.whyChooseUs}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
