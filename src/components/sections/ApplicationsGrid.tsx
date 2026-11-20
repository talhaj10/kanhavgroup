"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";
import { ParallaxImage } from "@/components/ui/Parallax";

const APPLICATION_SPANS: Record<string, string> = {
  "app-1": "col-span-1 lg:col-span-8 lg:row-span-2",
  "app-2": "col-span-1 lg:col-span-4",
  "app-3": "col-span-1 lg:col-span-4",
  "app-4": "col-span-1 lg:col-span-4",
  "app-5": "col-span-1 lg:col-span-4",
  "app-6": "col-span-1 lg:col-span-4",
  "app-7": "col-span-1 lg:col-span-3",
  "app-8": "col-span-1 lg:col-span-3",
  "app-9": "col-span-1 lg:col-span-3",
  "app-10": "col-span-1 lg:col-span-3",
  "app-11": "col-span-1 lg:col-span-6",
  "app-12": "col-span-1 lg:col-span-6",
};

export const ApplicationsGrid: React.FC = () => {
  return (
    <section id="applications" className="w-full py-12 sm:py-16 lg:py-20 bg-[#f8f7f4] border-b border-black/[0.08]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Industry Sectors"
          title="Glassfibre Fabric Applications"
          subtitle="Our high-strength composite fabrics empower critical engineering components operating under dynamic loads, corrosive environments, and demanding fatigue cycles."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {KANHAV_DATA.applications.map((app, idx) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative rounded-2xl overflow-hidden min-h-[240px] sm:min-h-[280px] h-full group border border-black/[0.12] shadow-sm card-hover ${
                app.span || APPLICATION_SPANS[app.id] || "col-span-1 lg:col-span-4"
              }`}
            >
              {/* Parallax Background Image */}
              <ParallaxImage
                src={app.image}
                alt={app.title}
                speed={-0.12}
                scale={1.16}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                containerClassName="absolute inset-0 w-full h-full"
                imageClassName="object-center group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-90"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

              {/* Bottom Content Area */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-white font-semibold border border-white/15">
                    {app.sector}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-kraft-orange" />
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-kraft-orange transition-colors">
                    {app.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
