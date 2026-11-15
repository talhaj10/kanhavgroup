"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const WhatsAppFab: React.FC = () => {
  const whatsappUrl = `https://wa.me/${KANHAV_DATA.contact.whatsapp}?text=${encodeURIComponent(
    KANHAV_DATA.contact.whatsappMessage
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-30">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-white/95 hover:bg-white text-[#110f0e] border border-black/10 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-500"
        title="Chat on WhatsApp with Kanhav Industries"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center transition-transform group-hover:rotate-12">
          <MessageCircle className="w-4 h-4" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-bold">
            Chat on WhatsApp
          </span>
          <span className="text-xs text-[#110f0e] font-semibold">
            +91 84015 10000
          </span>
        </div>
      </a>
    </aside>
  );
};
