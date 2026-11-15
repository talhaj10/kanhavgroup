import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { AboutBento } from "@/components/sections/AboutBento";
import { CoreValues } from "@/components/sections/CoreValues";
import { FeaturedProductsGrid } from "@/components/sections/FeaturedProductsGrid";
import { ApplicationsGrid } from "@/components/sections/ApplicationsGrid";
import { HeritageTimeline } from "@/components/sections/HeritageTimeline";
import { CeoMessage } from "@/components/sections/CeoMessage";
import { PresenceMap } from "@/components/sections/PresenceMap";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const metadata: Metadata = {
  title: "Kanhav Industries | Multi-Axial Glass Fabrics & Warp-Knitted Composites Manufacturer Surat",
  description:
    "Kanhav Industries (a $19M Kanhav Group enterprise) manufactures German Karl Mayer warp-knitted multi-axial glass fabrics (0°, 90°, ±45°), technical textiles, and nylon FDY yarns in Surat, Gujarat.",
  keywords: [
    "Multi-Axial Glass Fabrics",
    "Warp Knitted Technical Textiles",
    "German Karl Mayer Warp Knitting",
    "Biaxial Fabric",
    "Triaxial Fabric",
    "Quadra Axial Fabric",
    "Unidirectional Fabric",
    "Wind Energy Composites",
    "Composite Materials India",
    "Surat Textile Manufacturer",
  ],
  alternates: {
    canonical: "https://kanhavgroup.com/",
  },
  openGraph: {
    title: "Kanhav Industries | Multi-Axial Glass Fabrics & Warp-Knitted Composites",
    description:
      "German warp-knitted multi-axial glass fabrics and technical textiles engineered for wind energy, marine, transportation, and infrastructure in Surat, Gujarat.",
    url: "https://kanhavgroup.com/",
    images: [
      {
        url: "/assets/images/industrial-furnace-hall-reflections.png",
        width: 1200,
        height: 630,
        alt: "Kanhav Industries Surat High-Tech Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanhav Industries | Multi-Axial Glass Fabrics & Warp-Knitted Composites",
    description:
      "Engineered multi-axial glass fabrics, warp-knitted composites, and nylon FDY yarns manufactured with German precision in Surat, Gujarat.",
    images: ["/assets/images/industrial-furnace-hall-reflections.png"],
  },
};

const homeProductListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Composite Glass Fabrics & Technical Textiles",
  description:
    "Engineered non-crimp multi-axial glass fabrics, warp-knitted textiles, and nylon FDY yarns produced by Kanhav Industries.",
  itemListElement: KANHAV_DATA.products.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Product",
      name: p.title,
      description: p.description,
      image: `https://kanhavgroup.com${p.image}`,
      category: p.category,
      material: "E-Glass Fiber / Warp-Knitted",
      brand: {
        "@type": "Brand",
        name: "Kanhav Industries",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col">
      <JsonLd data={homeProductListSchema} />

      {/* 1. Kraftline Asymmetric Split Hero */}
      <Hero />

      {/* 2. Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. About Bento & Scale */}
      <AboutBento />

      {/* 4. Core Values & Mission */}
      <CoreValues />

      {/* 5. 5 Featured Production Lines Expandable Showcase */}
      <FeaturedProductsGrid />

      {/* 6. 12 Applications Bento */}
      <ApplicationsGrid />

      {/* 7. Heritage Timeline (1994 - 2024) */}
      <HeritageTimeline />

      {/* 8. CEO Editorial Message */}
      <CeoMessage />

      {/* 9. Presence Across India */}
      <PresenceMap />

      {/* 10. Customer Testimonials */}
      <Testimonials />

      {/* 11. Contact & Direct Message */}
      <ContactSection />
    </main>
  );
}
