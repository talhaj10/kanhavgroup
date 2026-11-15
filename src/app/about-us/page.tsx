import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Kanhav Industries | 30+ Years Heritage & German Warp Knitting Infrastructure",
  description:
    "Learn about Kanhav Industries Private Limited, part of the $19M Kanhav Group. 840 MT annual warp knitting throughput, Karl Mayer machinery, and ISO 9001:2015 certified composite manufacturing in Surat, Gujarat.",
  keywords: [
    "About Kanhav Industries",
    "Kanhav Group Surat",
    "Karl Mayer Warp Knitting India",
    "German Warp Knitting Machines",
    "Nylon FDY Yarns Gujarat",
    "Composite Fabric Infrastructure",
    "Make in India Composite Fabrics",
    "Surat Textile Heritage",
  ],
  alternates: {
    canonical: "https://kanhavgroup.com/about-us",
  },
  openGraph: {
    title: "About Kanhav Industries | German Warp Knitting & Composite Heritage",
    description:
      "State-of-the-art German warp knitting technology, $19M turnover group, and 30+ years of manufacturing excellence in Surat, Gujarat.",
    url: "https://kanhavgroup.com/about-us",
    images: [
      {
        url: "/assets/images/about-us-page-background.webp",
        width: 1200,
        height: 630,
        alt: "About Kanhav Industries Manufacturing Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kanhav Industries | Textile Innovation & German Engineering",
    description:
      "30+ years manufacturing legacy with advanced Karl Mayer warp knitting lines in Surat, Gujarat.",
    images: ["/assets/images/about-us-page-background.webp"],
  },
};

const aboutBreadcrumbSchema = {
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
  ],
};

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={aboutBreadcrumbSchema} />
      <AboutUsClient />
    </>
  );
}
