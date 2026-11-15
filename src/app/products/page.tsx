import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const metadata: Metadata = {
  title: "Composite Glass Fabrics Catalog | Multiaxial, Biaxial, Triaxial & UD Fabrics",
  description:
    "Explore Kanhav's high-tensile composite glass fabrics: Multiaxial, Unidirectional, Biaxial, Tri-Axial, Quadra-Axial, and Stitch Mats. Tailored GSM layups and German warp-knitted quality in Surat, Gujarat.",
  keywords: [
    "Composite Glass Fabrics Catalog",
    "Multiaxial Fabric India",
    "Biaxial Glass Fabric",
    "Triaxial Fabric",
    "Quadra Axial Fabric",
    "Unidirectional Fabric",
    "Stitch Mat",
    "Combination Mat",
    "Wind Energy Turbine Blade Fabrics",
    "Marine Composite Fabrics",
    "Karl Mayer Warp Knitted Glass",
  ],
  alternates: {
    canonical: "https://kanhavgroup.com/products",
  },
  openGraph: {
    title: "Engineered Composite Fabrics Catalog | Kanhav Industries",
    description:
      "High-performance non-crimp multi-axial fabrics, unidirectional reinforcements, and stitch mats engineered for wind energy, marine, and aerospace composites.",
    url: "https://kanhavgroup.com/products",
    images: [
      {
        url: "/assets/images/multiaxial-fabric-768x512.webp",
        width: 1200,
        height: 630,
        alt: "Kanhav Industries Engineered Composite Glass Fabrics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineered Composite Fabrics Catalog | Kanhav Industries",
    description:
      "Comprehensive catalog of German warp-knitted multi-axial, biaxial, triaxial, and unidirectional glass fabrics.",
    images: ["/assets/images/multiaxial-fabric-768x512.webp"],
  },
};

const productsBreadcrumbSchema = {
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
      name: "Products",
      item: "https://kanhavgroup.com/products",
    },
  ],
};

const productsCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Kanhav Industries Composite Products",
  description: "Complete catalog of composite glass fabrics and technical warp-knitted textiles.",
  itemListElement: KANHAV_DATA.products.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Product",
      name: p.title,
      description: p.description,
      image: `https://kanhavgroup.com${p.image}`,
      category: p.category,
      material: "E-Glass Fiber",
      brand: {
        "@type": "Brand",
        name: "Kanhav Industries",
      },
      manufacturer: {
        "@type": "Organization",
        name: "Kanhav Industries Private Limited",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productsBreadcrumbSchema} />
      <JsonLd data={productsCatalogSchema} />
      <ProductsClient />
    </>
  );
}
