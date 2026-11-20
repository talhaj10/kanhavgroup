"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";
import { ParallaxImage } from "@/components/ui/Parallax";

export const CeoMessage: React.FC = () => {
  return (
    <section id="ceo" className="w-full py-12 sm:py-16 lg:py-20 bg-[#f0ede6] border-b border-black/[0.08]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 sm:p-10 lg:p-16 rounded-2xl sm:rounded-3xl border border-black/[0.08] shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* CEO Photo Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-black/[0.08] shadow-md bg-[#f8f7f4]">
              <ParallaxImage
                src={KANHAV_DATA.ceo.image}
                alt={KANHAV_DATA.ceo.name}
                speed={-0.10}
                scale={1.16}
                containerClassName="absolute inset-0 w-full h-full"
                imageClassName="object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="font-mono text-xs uppercase tracking-wider text-kraft-orange font-semibold block">
                  Executive Leadership
                </span>
                <h3 className="text-2xl font-bold text-white mt-0.5">
                  {KANHAV_DATA.ceo.name}
                </h3>
                <p className="text-xs font-mono text-white/75 mt-0.5">
                  {KANHAV_DATA.ceo.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* CEO Message Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2">
              <Quote className="w-8 h-8 text-kraft-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-kraft-olive font-semibold">
                Note From Our CEO
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-kraft-headline leading-tight">
              A Legacy of Innovation, Passion & Technical Mastery
            </h2>

            <blockquote className="text-sm sm:text-base text-kraft-cream leading-relaxed font-normal space-y-4">
              <p className="italic">
                &ldquo;{KANHAV_DATA.ceo.quote}&rdquo;
              </p>
            </blockquote>

            <div className="pt-6 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-kraft-olive">
              <span>Salasar Polytex Pvt. Ltd. · Est. 2011</span>
              <span className="text-kraft-orange font-semibold">Kanhav Industries · Est. 2024</span>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};
