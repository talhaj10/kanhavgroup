"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Check, Layers, ChevronRight } from "lucide-react";
import { KANHAV_DATA, Product } from "@/data/kanhav-data";

interface ProductsShowcaseProps {
  onOpenRFQ: (productSlug: string) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onOpenRFQ }) => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="w-full py-12 sm:py-16 lg:py-20 bg-white border-b border-black/[0.08]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <SectionHeader
          badge="Product Catalog"
          title="Engineered Multi-Axial Composite Fabrics"
          subtitle="Non-crimp technical fabrics manufactured to exacting tolerances for maximum strength-to-weight ratio and dynamic load resilience."
        />
        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-kraft-olive pb-12 shrink-0 font-semibold">
          <Layers className="w-4 h-4 text-kraft-orange" />
          <span>7 Specialized Reinforcements</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {KANHAV_DATA.products.map((product, idx) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="bg-[#f8f7f4] rounded-2xl overflow-hidden flex flex-col justify-between border border-black/[0.08] hover:border-black/20 hover:shadow-md transition-all group"
          >
            <div>
              {/* Product Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-[#e8e4dc]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#110f0e] border border-black/10 font-bold shadow-sm">
                    {product.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-4 font-mono text-xs text-white/80 font-bold">
                  0{idx + 1}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-kraft-headline group-hover:text-kraft-orange transition-colors">
                  {product.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-kraft-cream leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Technical Bullet points */}
                <div className="mt-5 pt-4 border-t border-black/[0.08] space-y-2">
                  {product.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-kraft-cream">
                      <span className="w-1.5 h-1.5 bg-kraft-orange mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Action Footer */}
            <div className="p-6 pt-0 mt-2">
              <button
                onClick={() => onOpenRFQ(product.slug)}
                className="w-full min-h-[46px] py-3 px-4 rounded-xl bg-white hover:bg-kraft-orange active:bg-[#a8340a] text-kraft-headline hover:text-white active:text-white font-mono text-xs uppercase tracking-wider font-semibold border border-black/10 hover:border-kraft-orange transition-all duration-200 flex items-center justify-between group/btn shadow-sm"
              >
                <span>Request Technical Quote</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
};
