"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/ContactSection";
import { PresenceMap } from "@/components/sections/PresenceMap";

export default function ContactUsClient() {
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
            <span>Direct Communication</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-kraft-headline tracking-tight uppercase leading-[0.95]">
            CONTACT US
          </h1>
          <p className="text-base sm:text-xl text-kraft-cream max-w-3xl leading-relaxed">
            Get in touch with Kanhav Industries. Our commercial and technical support desks in Surat, Gujarat are ready to assist with samples, quotes, and product specifications.
          </p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Presence Across India Map */}
      <PresenceMap />
    </div>
  );
}
