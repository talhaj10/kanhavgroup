"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductSlug?: string | null;
}

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  initialProductSlug,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductSlug) {
      const found = KANHAV_DATA.products.find((p) => p.slug === initialProductSlug);
      if (found) {
        setFormData((prev) => ({ ...prev, product: found.title }));
      }
    } else {
      setFormData((prev) => ({ ...prev, product: KANHAV_DATA.products[0].title }));
    }
    setIsSubmitted(false);
  }, [initialProductSlug, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white border border-black/10 rounded-2xl p-5 sm:p-8 shadow-2xl z-10 max-h-[92dvh] overflow-y-auto overscroll-contain"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-kraft-olive hover:text-[#110f0e] hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-kraft-headline mb-2">Quote Request Received</h3>
                <p className="text-kraft-cream text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-[#110f0e]">{formData.fullName}</strong>. Our engineering and sales team in Surat will review your requirements for <strong className="text-kraft-orange">{formData.product}</strong> and connect with you within 24 business hours.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-kraft-orange hover:bg-kraft-orange-hover text-white font-medium text-sm transition-all shadow-sm"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 bg-kraft-orange" />
                    <span className="font-mono text-xs uppercase tracking-wider text-kraft-olive font-semibold">
                      Industrial Inquiry
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-kraft-headline">
                    Request a Technical Quote
                  </h3>
                  <p className="text-sm text-kraft-olive mt-1">
                    Direct RFQ to Kanhav Industries Surat facility. Direct inquiry hotline:{" "}
                    <span className="text-[#110f0e] font-semibold">{KANHAV_DATA.contact.phone}</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] placeholder-black/35 text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Composites Pvt Ltd"
                        className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] placeholder-black/35 text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@company.com"
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] placeholder-black/35 text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                      Target Product Specification *
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all"
                    >
                      {KANHAV_DATA.products.map((p) => (
                        <option key={p.id} value={p.title} className="bg-white text-[#110f0e]">
                          {p.title} — {p.category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-kraft-olive font-semibold mb-1.5">
                      Technical Requirements / Volume (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify GSM, fiber orientation, width, estimated volume in MT, or application details..."
                      className="w-full px-3.5 py-3 rounded-lg bg-[#f8f7f4] border border-black/15 text-[#110f0e] placeholder-black/35 text-[16px] sm:text-sm focus:bg-white focus:outline-none focus:border-kraft-orange focus:ring-1 focus:ring-kraft-orange/20 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-kraft-orange hover:bg-kraft-orange-hover active:bg-[#a8340a] text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Submit Quote Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-center font-mono text-[11px] text-kraft-olive mt-3">
                      Direct response guaranteed within standard business hours (Mon-Sat 8:00 - 18:00 IST).
                    </p>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
