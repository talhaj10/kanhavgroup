"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CurvedCarousel, type CurvedCarouselItem } from "@/components/ui/CurvedCarousel";
import { useRFQ } from "@/context/RFQContext";
import { KANHAV_DATA } from "@/data/kanhav-data";
import { ArrowUpRight, LayoutGrid, Orbit, ShieldCheck, Factory } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const APPLICATION_DESCRIPTIONS: Record<string, string> = {
  "app-1": "Biaxial ±45° & UD fabrics engineered for 80m+ turbine spar caps and dynamic aerodynamic root shells.",
  "app-2": "High-interlaminar shear multi-axial fabrics for lightweight commercial hulls, yachts, and naval patrol craft.",
  "app-3": "Zero-crimp fire-retardant structural composites for high-speed train cabins, fairings, and passenger cars.",
  "app-4": "Lightweight glassfibre reinforcement for EV battery enclosures, leaf springs, and structural body panels.",
  "app-5": "Engineered unidirectional and biaxial reinforcements optimized for continuous pultrusion beam lines.",
  "app-6": "Heavy-duty refrigerated truck floorings, side panels, and aerodynamic fairings for road logistics.",
  "app-7": "Chemical-resistant multi-axial and combo mats for corrosion-proof storage vessels and underground relining.",
  "app-8": "High-performance flex-tuned composite layers for carbon/glass tennis racquets, hockey sticks, and helmets.",
  "app-9": "Precision-torsion stitched fabrics delivering responsive flex profiles in snow and water competition skis.",
  "app-10": "Impact-resistant lightweight composite wall panels and door assemblies for intermodal cargo containers.",
  "app-11": "Structural earthquake retrofitting, bridge deck reinforcement, and non-corrosive civil infrastructure grids.",
  "app-12": "High-dielectric structural composites for military radomes, satellite dishes, and antenna enclosures.",
};

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
  const { openRFQ } = useRFQ();
  const [viewMode, setViewMode] = useState<"curved" | "grid">("curved");

  const carouselItems: CurvedCarouselItem[] = KANHAV_DATA.applications.map((app) => ({
    id: app.id,
    title: app.title,
    sector: app.sector,
    image: app.image,
    specs: APPLICATION_DESCRIPTIONS[app.id] || "Advanced multi-axial fabric reinforcement manufactured to customer specifications in Surat.",
  }));

  const handleCardClick = (item: CurvedCarouselItem) => {
    openRFQ(`Application Inquiry: ${item.title} (${item.sector})`);
  };

  return (
    <section id="applications" className="w-full py-12 sm:py-16 lg:py-20 bg-[#f8f7f4] border-b border-black/[0.08] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            badge="Industry Sectors"
            title="Glassfibre Fabric Applications"
            subtitle="Our high-strength composite fabrics empower critical engineering components operating under dynamic loads, corrosive environments, and demanding fatigue cycles."
          />

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-black/[0.08] shadow-xs self-start md:self-auto shrink-0 mb-4 sm:mb-6">
            <button
              type="button"
              onClick={() => setViewMode("curved")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                viewMode === "curved"
                  ? "bg-[#14120f] text-white shadow-xs"
                  : "text-kraft-cream/70 hover:text-kraft-headline"
              }`}
            >
              <Orbit className="w-3.5 h-3.5 text-kraft-orange" />
              <span>Curved 3D</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#14120f] text-white shadow-xs"
                  : "text-kraft-cream/70 hover:text-kraft-headline"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Full Grid</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "curved" ? (
          <motion.div
            key="curved-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {/* Framer-inspired Cylindrical Curved Carousel */}
            <CurvedCarousel
              items={carouselItems}
              curve={0.42}
              speed={32}
              direction="Left"
              autoplay={true}
              onItemClick={handleCardClick}
            />
          </motion.div>
        ) : (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
              {KANHAV_DATA.applications.map((app, idx) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  onClick={() => openRFQ(`Application Inquiry: ${app.title}`)}
                  className={`relative rounded-2xl overflow-hidden min-h-[240px] sm:min-h-[280px] h-full group border border-black/[0.12] shadow-sm card-hover cursor-pointer ${
                    app.span || APPLICATION_SPANS[app.id] || "col-span-1 lg:col-span-4"
                  }`}
                >
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

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
                      <p className="text-xs text-white/70 line-clamp-1 mt-1 font-mono">
                        {APPLICATION_DESCRIPTIONS[app.id] || "Custom engineered composite fabric solutions."}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Technical Assurance Callout */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 pt-8 border-t border-black/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs text-kraft-cream/80">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-black/[0.08] shadow-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Tested for high dynamic cyclic loads and extreme shear environments.</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-black/[0.08] shadow-xs">
            <Factory className="w-5 h-5 text-kraft-orange shrink-0" />
            <span>Custom slit widths and tailored roll lengths available for every sector.</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-black/[0.08] shadow-xs">
            <span className="font-mono uppercase font-semibold text-kraft-headline">Need Custom Trial Rolls?</span>
            <button
              type="button"
              onClick={() => openRFQ("Custom Application Prototype Consultation")}
              className="text-kraft-orange hover:underline font-mono text-xs font-bold cursor-pointer"
            >
              Inquire Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsGrid;
