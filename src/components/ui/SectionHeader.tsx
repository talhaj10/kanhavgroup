"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-8 md:mb-10 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}
    >
      <div className={`flex items-center gap-2 mb-3.5 ${align === "center" ? "justify-center" : ""}`}>
        <span className="w-1.5 h-1.5 bg-kraft-orange" />
        <span className="font-mono text-xs uppercase tracking-wider text-kraft-olive font-semibold">
          {badge}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-kraft-headline tracking-tight leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-kraft-cream/75 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
