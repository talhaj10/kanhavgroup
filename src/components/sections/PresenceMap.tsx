"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin, Navigation } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const PresenceMap: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 border-b border-black/[0.08] bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Pan-India Reach"
          title="Presence Across India"
          subtitle="Kanhav Industries maintains a robust distribution and manufacturing network across strategic industrial hubs throughout the country."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Graphic (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative flex items-center justify-center p-6 rounded-2xl bg-[#f8f7f4] border border-black/[0.08]"
          >
            <div className="relative w-full aspect-[4/5] max-w-sm">
              <Image
                src="/assets/images/india-map.webp"
                alt="Kanhav Industries India Distribution Map"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Regional Hub Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {KANHAV_DATA.presence.map((hub, idx) => (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-4 rounded-xl border transition-all ${
                  hub.isHQ
                    ? "bg-[#f0ede6] border-kraft-orange/60 shadow-sm sm:col-span-2"
                    : "bg-[#f8f7f4] hover:bg-white border-black/[0.08] hover:border-black/20 shadow-sm"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      hub.isHQ
                        ? "bg-kraft-orange text-white"
                        : "bg-white border border-black/[0.08] text-kraft-orange"
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-kraft-headline">
                        {hub.name}
                      </h4>
                      {hub.isHQ && (
                        <span className="px-2 py-0.5 rounded bg-kraft-orange/15 text-kraft-orange font-mono text-[9px] uppercase font-bold tracking-wider">
                          Main Factory & HQ
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-kraft-cream/80 mt-0.5">
                      {hub.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
