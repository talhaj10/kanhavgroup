import type { Metadata } from "next";
import CareersClient from "./CareersClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Careers at Kanhav Industries | Join Our Technical Composites Manufacturing Team",
  description:
    "Build your career in advanced warp knitting, composite engineering, textile manufacturing, and plant operations at our Surat facility. Explore open positions and apply.",
  keywords: [
    "Careers at Kanhav Industries",
    "Textile Jobs Surat",
    "Warp Knitting Machine Operator Jobs",
    "Composite Materials Engineering Jobs",
    "Surat Manufacturing Careers",
    "Kanhav Group Hiring",
  ],
  alternates: {
    canonical: "https://kanhavgroup.com/careers",
  },
  openGraph: {
    title: "Careers at Kanhav Industries | Textile & Composite Manufacturing Jobs",
    description:
      "Join our engineering team in Surat, Gujarat. Operating state-of-the-art German warp knitting technology for India's clean energy and composite revolution.",
    url: "https://kanhavgroup.com/careers",
    images: [
      {
        url: "/assets/images/about-us-page-background.webp",
        width: 1200,
        height: 630,
        alt: "Careers at Kanhav Industries Surat Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Kanhav Industries | Technical Composites",
    description:
      "Explore manufacturing, engineering, and operations career paths at Kanhav Industries Surat.",
    images: ["/assets/images/about-us-page-background.webp"],
  },
};

const careersBreadcrumbSchema = {
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
      name: "Careers",
      item: "https://kanhavgroup.com/careers",
    },
  ],
};

export default function CareersPage() {
  return (
    <>
      <JsonLd data={careersBreadcrumbSchema} />
      <CareersClient />
    </>
  );
}
