"use client";

import React from "react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const MarqueeTicker: React.FC = () => {
  const items = [
    ...KANHAV_DATA.applications.map((a) => a.title.toUpperCase()),
    "WARP-KNITTED TEXTILES",
    "NYLON FDY YARNS",
    "GERMAN WARP KNITTING MACHINES",
  ];

  return (
    <div className="relative py-4 sm:py-5 border-b border-black/10 bg-[#100f0c] overflow-hidden select-none">
      {/* Left/Right Fade Mask */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#100f0c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#100f0c] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] items-center gap-8">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-white/80 font-medium hover:text-kraft-orange transition-colors cursor-default">
              {text}
            </span>
            <span className="w-1.5 h-1.5 bg-kraft-orange" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
