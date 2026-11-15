import type { Metadata } from "next";
import OurStoryClient from "./OurStoryClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Heritage & Legacy (1994–2024) | Kanhav Group History & Milestones",
  description:
    "Trace the evolution of Kanhav Group from circular knitting in 1994 to establishing Kanhav Industries in 2024 with state-of-the-art Karl Mayer warp knitting lines in Surat, Gujarat.",
  keywords: [
    "Kanhav Heritage",
    "Textile Manufacturing History India",
    "Salasar Polytex Surat",
    "Karl Mayer Installation Surat",
    "Warp Knitting Pioneers Gujarat",
    "Kanhav Group 30 Years",
  ],
  alternates: {
    canonical: "https://kanhavgroup.com/about-us/our-story",
  },
  openGraph: {
    title: "Our Heritage & Legacy (1994–2024) | Kanhav Group",
    description:
      "Thirty years of textile manufacturing excellence, technological advancement, and commitment to precision composite engineering.",
    url: "https://kanhavgroup.com/about-us/our-story",
    images: [
      {
        url: "/assets/images/about-us-page-background.webp",
        width: 1200,
        height: 630,
        alt: "Kanhav Group 30 Year Manufacturing Heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story & 30-Year Heritage | Kanhav Industries",
    description:
      "From circular knitting in 1994 to German Karl Mayer warp knitting technology in 2024.",
    images: ["/assets/images/about-us-page-background.webp"],
  },
};

const storyBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kanhavgroup.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://kanhavgroup.com/about-us",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Our Story",
      item: "https://kanhavgroup.com/about-us/our-story",
    },
  ],
};

export default function OurStoryPage() {
  return (
    <>
      <JsonLd data={storyBreadcrumbSchema} />
      <OurStoryClient />
    </>
  );
}
