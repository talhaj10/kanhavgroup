"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Clock, ShieldCheck, Factory } from "lucide-react";
import { useRFQ } from "@/context/RFQContext";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const Footer: React.FC = () => {
  const { openRFQ } = useRFQ();

  return (
    <footer className="relative w-full bg-[#14120f] border-t border-black/20 text-white overflow-hidden">
      {/* =========================================================================
          TOP INDUSTRIAL TICKER RIBBON (Directly mirroring Hero aesthetic)
          ========================================================================= */}
      <div className="w-full bg-[#0d0c0a] border-b border-white/10 px-4 sm:px-8 py-3 overflow-hidden">
        <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-white/60 uppercase tracking-widest">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-white/90 font-bold">02</span>
            <span className="text-white/30">&lt;&lt;</span>
            <span className="text-white/80">GERMAN WARP KNITTING</span>
            <span className="text-white/30">&lt;&lt;</span>
            <span>840 MT ANNUAL CAPACITY</span>
            <span className="text-white/30">&lt;&lt;</span>
            <span className="hidden md:inline">ISO COMPLIANT</span>
            <span className="hidden md:inline text-white/30">&lt;&lt;</span>
            <span className="hidden lg:inline text-[#cc410f] font-semibold">MAKE IN INDIA</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70 text-[10px]">FACILITY OPERATIONAL // SURAT, GUJARAT</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          UPPER HORIZONTAL SECTION: BURNT ORANGE FADING SMOOTHLY INTO OBSIDIAN BLACK
          - Vibrant orange at top (#c93f0b)
          - Silky smooth gradient transition into black (#14120f)
          - Houses high-impact production call-to-action & plant telemetry HUD
          ========================================================================= */}
      <div
        className="relative w-full text-white overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #c93f0b 0%, #9e2f05 25%, #4e1703 62%, #14120f 100%)",
        }}
      >
        {/* Subtle industrial grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (Span 7): Big Hero-Style Headline & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Ticker / Eyebrow */}
              <div className="flex items-center gap-2 font-mono text-[11px] text-white/80 tracking-widest uppercase mb-6 sm:mb-8">
                <span className="text-white font-bold">03</span>
                <span className="text-white/40">&lt;&lt;</span>
                <span>PRODUCTION READY</span>
                <span className="text-white/40">&lt;&lt;</span>
                <span>RAPID DISPATCH</span>
                <span className="text-white/40">&lt;&lt;</span>
                <span className="hidden sm:inline text-white/90 font-semibold">CUSTOM GSM LAYUPS</span>
              </div>

              {/* Main Title: ENGINEERED TO SPEC. [READY] FOR PRODUCTION. */}
              <h2 className="font-display text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.9] tracking-tight text-white uppercase select-none mb-6">
                ENGINEERED TO SPEC.
                <br />
                <span className="inline-flex items-center mt-1 flex-wrap">
                  <span className="bg-[#14120f] text-white px-2.5 sm:px-4 py-0.5 sm:py-1 mr-2 inline-block font-display tracking-tight text-[0.9em]">
                    READY
                  </span>
                  <span>FOR PRODUCTION.</span>
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl font-sans font-normal mb-8">
                Multi-axial glass fabrics, warp-knitted technical textiles, and nylon FDY yarns from our advanced German-equipped facility in Surat, Gujarat. Custom fiber orientations (0°, 90°, ±45°), tailored GSM layups, and multi-ton industrial delivery.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => openRFQ()}
                  className="bg-[#ece8e1] hover:bg-white text-black font-mono text-xs font-bold tracking-wider uppercase px-6 sm:px-7 py-3.5 transition-colors shadow-md text-center justify-center min-h-[46px] flex items-center [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] active:scale-[0.99]"
                >
                  Order a sample kit
                </button>

                <a
                  href={`tel:${KANHAV_DATA.contact.phone.replace(/\s+/g, "")}`}
                  className="bg-black/90 hover:bg-black text-white font-mono text-xs font-bold tracking-wider uppercase px-6 sm:px-7 py-3.5 transition-colors [clip-path:polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] border border-white/15 shadow-md flex items-center justify-center gap-2 min-h-[46px] active:scale-[0.99]"
                >
                  <span>Direct Hotline</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#cc410f]" />
                </a>
              </div>
            </div>

            {/* Right Column (Span 5): Plant Telemetry & Manufacturing Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Plant Telemetry HUD Widget */}
              <div className="bg-[#14120f]/85 border border-white/15 p-6 sm:p-7 text-white shadow-2xl backdrop-blur-md [clip-path:polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]">
                <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#cc410f] font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cc410f] animate-ping" />
                    SURAT PLANT TELEMETRY
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/70">
                    <Factory className="w-3.5 h-3.5 text-[#cc410f]" />
                    <span>Karl Mayer 4M EL</span>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs text-white/85">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/50 text-[11px] uppercase">Warp Knitting Output</span>
                    <span className="text-white font-bold">840 MT / Year</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/50 text-[11px] uppercase">Circular Knitting</span>
                    <span className="text-white font-bold">780 MT / Year</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/50 text-[11px] uppercase">Minimum Custom Run</span>
                    <span className="text-white font-bold">500 KG</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-white/50 text-[11px] uppercase">Standard Dispatch</span>
                    <span className="text-[#cc410f] font-bold">10-12 Days</span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/50">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ISO 9001:2015 Verified</span>
                  </div>
                  <span>100% Batch Tested</span>
                </div>
              </div>

              {/* Direct Facility Contact Strip */}
              <div className="bg-black/55 border border-white/10 p-4 text-xs font-mono text-white/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#cc410f]" />
                  <a href={`tel:${KANHAV_DATA.contact.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                    {KANHAV_DATA.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#cc410f]" />
                  <a href={`mailto:${KANHAV_DATA.contact.emailSales}`} className="hover:text-white transition-colors">
                    {KANHAV_DATA.contact.emailSales}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LOWER HORIZONTAL SECTION: OBSIDIAN BLACK DIRECTORY, NAVIGATION & DETAILS
          - Solid deep obsidian background (#14120f)
          - Multi-column directory: Brand, Navigation, Catalog, Coordinates
          - Bottom legal rail & Back to Top
          ========================================================================= */}
      <div className="w-full bg-[#14120f] border-t border-white/[0.08] text-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
            {/* Brand & Corporate Overview (Col span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/kanhav-group-logo.webp"
                  alt="Kanhav Group"
                  width={160}
                  height={44}
                  className="h-8 w-auto object-contain brightness-110"
                />
              </div>
              <p className="font-mono text-xs text-[#cc410f] font-semibold tracking-wider uppercase">
                {KANHAV_DATA.company.tagline}
              </p>
              <p className="font-sans text-xs text-white/70 leading-relaxed pr-4">
                Kanhav Industries Private Limited, established in 2024 as part of the $19M Kanhav Group, delivers engineered multi-axial glass fabrics, warp-knitted technical textiles, and nylon FDY yarns with German precision in Surat, Gujarat.
              </p>
              <div className="pt-2 flex items-center gap-2 font-mono text-[10px] text-white/50 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Make in India • 100% In-House Facility</span>
              </div>
            </div>

            {/* Navigation Coordinates (Col span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold border-b border-white/10 pb-2">
                Navigation
              </h4>
              <ul className="space-y-1 font-mono text-xs uppercase tracking-wider">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about-us" },
                  { name: "Our Story", href: "/about-us/our-story" },
                  { name: "Products", href: "/products" },
                  { name: "Careers", href: "/careers" },
                  { name: "Contact Us", href: "/contact-us" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors flex items-center justify-between py-2 group min-h-[38px]"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#cc410f]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineered Fabrics Catalog (Col span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold border-b border-white/10 pb-2">
                Composite Fabrics
              </h4>
              <ul className="space-y-1 text-xs">
                {KANHAV_DATA.products.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => openRFQ(p.slug)}
                      className="text-left text-white/70 hover:text-white transition-colors flex items-center justify-between w-full py-2 group min-h-[38px]"
                    >
                      <span className="group-hover:translate-x-1 transition-transform line-clamp-1">{p.title}</span>
                      <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/5 group-hover:bg-[#cc410f] group-hover:text-white text-white/50 transition-colors shrink-0 ml-2">
                        RFQ
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Surat Facility Coordinates (Col span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold border-b border-white/10 pb-2">
                Surat Coordinates
              </h4>
              <div className="space-y-3 text-xs text-white/70 font-sans">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#cc410f] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-white/80">
                    {KANHAV_DATA.contact.address}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#cc410f] shrink-0" />
                  <a
                    href={`tel:${KANHAV_DATA.contact.phone.replace(/\s+/g, "")}`}
                    className="font-mono text-white/90 hover:text-[#cc410f] transition-colors"
                  >
                    {KANHAV_DATA.contact.phone}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#cc410f] shrink-0 mt-0.5" />
                  <div className="flex flex-col font-mono text-[11px] space-y-0.5">
                    <a href={`mailto:${KANHAV_DATA.contact.emailAdmin}`} className="hover:text-[#cc410f] transition-colors text-white/80">
                      {KANHAV_DATA.contact.emailAdmin}
                    </a>
                    <a href={`mailto:${KANHAV_DATA.contact.emailSales}`} className="hover:text-[#cc410f] transition-colors text-white/80">
                      {KANHAV_DATA.contact.emailSales}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 font-mono text-[11px] text-white/50">
                  <Clock className="w-4 h-4 text-[#cc410f] shrink-0" />
                  <span>{KANHAV_DATA.contact.workingHours} (IST)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Branding & Legal Rail */}
          <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
            <div className="flex items-center gap-3">
              <span>{KANHAV_DATA.contact.copyright}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-white/40">Surat, Gujarat (India)</span>
            </div>

            <div className="flex items-center gap-5 text-[11px]">
              <Link href="/about-us" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <Link href="/contact-us" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-[#cc410f] hover:text-white transition-colors flex items-center gap-1 font-semibold"
              >
                <span>Back to top</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
