"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${KANHAV_DATA.contact.whatsapp}?text=${encodeURIComponent(
    KANHAV_DATA.contact.whatsappMessage
  )}`;

  return (
    <section id="contact" className="w-full py-12 sm:py-16 lg:py-20 bg-[#f8f7f4]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact & Inquiry"
          title="Get In Touch With Kanhav Industries"
          subtitle="Connect with our technical advisory team at Surat for product datasheets, custom weave specifications, samples, or bulk order pricing."
        />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Coordinates (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-black/[0.08] shadow-sm space-y-5">
            <h3 className="text-xl font-bold text-kraft-headline">
              Corporate Headquarters
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-kraft-cream">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f0ede6] border border-black/[0.08] flex items-center justify-center text-kraft-orange shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-kraft-olive font-semibold block">
                    Postal Address
                  </span>
                  <p className="mt-0.5 text-[#110f0e] leading-relaxed">
                    {KANHAV_DATA.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f0ede6] border border-black/[0.08] flex items-center justify-center text-kraft-orange shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-kraft-olive font-semibold block">
                    Direct Telephones
                  </span>
                  <p className="mt-0.5">
                    <a href={`tel:${KANHAV_DATA.contact.phone}`} className="text-[#110f0e] font-medium hover:text-kraft-orange">
                      {KANHAV_DATA.contact.phone}
                    </a>{" "}
                    /{" "}
                    <a href={`tel:${KANHAV_DATA.contact.phoneSecondary}`} className="text-[#110f0e] font-medium hover:text-kraft-orange">
                      {KANHAV_DATA.contact.phoneSecondary}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f0ede6] border border-black/[0.08] flex items-center justify-center text-kraft-orange shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-kraft-olive font-semibold block">
                    Electronic Mail
                  </span>
                  <p className="mt-0.5 space-y-0.5">
                    <a href={`mailto:${KANHAV_DATA.contact.emailAdmin}`} className="block text-[#110f0e] font-medium hover:text-kraft-orange">
                      Admin: {KANHAV_DATA.contact.emailAdmin}
                    </a>
                    <a href={`mailto:${KANHAV_DATA.contact.emailSales}`} className="block text-[#110f0e] font-medium hover:text-kraft-orange">
                      Sales: {KANHAV_DATA.contact.emailSales}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f0ede6] border border-black/[0.08] flex items-center justify-center text-kraft-orange shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-kraft-olive font-semibold block">
                    Working Hours
                  </span>
                  <p className="mt-0.5 text-[#110f0e]">
                    {KANHAV_DATA.contact.workingHours} (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Action card */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-emerald-500/30 hover:border-emerald-500 shadow-sm flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-sm text-[#110f0e] block">
                  Instant WhatsApp Connect
                </span>
                <span className="text-xs text-kraft-olive">
                  Chat directly with our sales team
                </span>
              </div>
            </div>
            <span className="font-mono text-xs text-emerald-600 uppercase font-bold group-hover:translate-x-1 transition-transform">
              Chat Now →
            </span>
          </a>
        </div>

        {/* Send Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-black/[0.08] shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-kraft-headline mb-2">Message Dispatched</h3>
              <p className="text-sm text-kraft-cream max-w-md mx-auto mb-6">
                Thank you, <strong className="text-[#110f0e]">{form.fullName}</strong>. Your communication has been routed to our sales and administration desk in Surat. We will get in touch promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-kraft-orange hover:bg-kraft-orange-hover text-white text-xs font-mono uppercase tracking-wider font-semibold shadow-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-kraft-headline">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-kraft-olive mt-0.5">
                  Fields marked with an asterisk (*) are mandatory.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Suresh Patel"
                    className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] placeholder-black/35 text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="e.g. Gujarat Composites Ltd"
                    className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] placeholder-black/35 text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="suresh@gujaratcomposites.com"
                    className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] placeholder-black/35 text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] placeholder-black/35 text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                  Your Message (Optional)
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Outline your application, delivery timeline, or inquiry specifics..."
                  className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] placeholder-black/35 text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-3.5 rounded-full bg-kraft-orange hover:bg-kraft-orange-hover active:bg-[#a8340a] text-white font-mono uppercase tracking-wider text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
      </div>
    </section>
  );
};
