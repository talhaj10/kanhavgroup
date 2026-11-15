"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase, CheckCircle2, Send, ArrowRight } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const CareersSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [candidate, setCandidate] = useState({ name: "", email: "", role: "", resume: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="careers" className="w-full py-12 sm:py-16 lg:py-20 border-b border-black/[0.08] bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Careers & Talent"
          title={KANHAV_DATA.careers.title}
          subtitle={KANHAV_DATA.careers.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm sm:text-base text-kraft-cream leading-relaxed font-normal">
              {KANHAV_DATA.careers.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-kraft-olive font-semibold">
                Why Build Your Career At Kanhav:
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {KANHAV_DATA.careers.benefits.map((benefit, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-3.5 rounded-xl bg-[#f8f7f4] border border-black/[0.08] flex items-center gap-3 text-xs sm:text-sm text-kraft-cream"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f0ede6] border border-black/[0.08] font-mono text-xs text-kraft-olive">
              <span className="text-kraft-orange font-semibold">Direct HR Contact: </span>
              <span className="text-[#110f0e]">{KANHAV_DATA.contact.emailAdmin}</span>
            </div>
          </div>

          {/* Quick Application Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#f8f7f4] p-6 sm:p-8 rounded-2xl border border-black/[0.08] shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-kraft-headline mb-2">Application Submitted</h4>
                <p className="text-xs text-kraft-cream/80 max-w-sm mx-auto">
                  Thank you, <strong className="text-[#110f0e]">{candidate.name}</strong>. Our HR team in Surat will review your profile for {candidate.role || "relevant openings"} and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-lg font-bold text-kraft-headline mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-kraft-orange" />
                  <span>Submit Your Expression of Interest</span>
                </h4>

                <div>
                  <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={candidate.name}
                    onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
                    placeholder="e.g. Amit Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-black/15 text-[#110f0e] placeholder-black/35 text-xs focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={candidate.email}
                    onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
                    placeholder="amit@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-black/15 text-[#110f0e] placeholder-black/35 text-xs focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1">
                    Area of Expertise / Role *
                  </label>
                  <input
                    type="text"
                    required
                    value={candidate.role}
                    onChange={(e) => setCandidate({ ...candidate, role: e.target.value })}
                    placeholder="e.g. Textile Technologist / Quality Engineer / Operator"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-black/15 text-[#110f0e] placeholder-black/35 text-xs focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1">
                    LinkedIn Profile or Brief Background (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={candidate.resume}
                    onChange={(e) => setCandidate({ ...candidate, resume: e.target.value })}
                    placeholder="Paste link to resume / portfolio or outline key experience..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-black/15 text-[#110f0e] placeholder-black/35 text-xs focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-kraft-orange hover:bg-kraft-orange-hover text-white font-mono uppercase tracking-wider text-xs font-semibold flex items-center justify-center gap-2 transition-all mt-2 shadow-sm"
                >
                  <span>Submit Candidate Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
