"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Star, Quote } from "lucide-react";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#f8f7f4] border-b border-black/[0.08]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Client Feedback"
          title="What Our Customers Say"
          subtitle="Trusted by engineering teams across composite, renewable energy, and heavy transport sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KANHAV_DATA.testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white p-6 sm:p-7 rounded-2xl flex flex-col justify-between border border-black/[0.08] shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-kraft-cream leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/[0.08] flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#f0ede6] border border-black/[0.08] shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-kraft-headline">
                    {item.author}
                  </h4>
                  <p className="font-mono text-xs text-kraft-orange font-semibold">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
