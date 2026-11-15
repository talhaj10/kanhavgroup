import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const metadata: Metadata = {
  title: "Contact Kanhav Industries | Request Sample Kit & Custom Layup RFQ | Surat",
  description:
    "Get in touch with Kanhav Industries engineering team in Surat, Gujarat. Request composite fabric sample kits, custom GSM quotes, production lead times, and factory visit bookings.",
  keywords: [
    "Contact Kanhav Industries",
    "Kanhav Surat Phone Number",
    "Composite Fabric RFQ Gujarat",
    "Sample Kit Multi Axial Glass Fabric",
    "Surat Textile Factory Address",
    "Warp Knitting Technical Support",
  ],
  alternates: {
    canonical: "https://kanhavgroup.com/contact-us",
  },
  openGraph: {
    title: "Contact Kanhav Industries | Commercial & Technical Inquiries",
    description:
      "Direct technical consultation, sample kits, and custom composite quotes. Located in Surat, Gujarat, India.",
    url: "https://kanhavgroup.com/contact-us",
    images: [
      {
        url: "/assets/images/about-us-page-background.webp",
        width: 1200,
        height: 630,
        alt: "Contact Kanhav Industries Surat Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kanhav Industries | Surat Facility Support",
    description:
      "Order sample kits, inquire about warp-knitted glass fabrics, and request instant RFQs.",
    images: ["/assets/images/about-us-page-background.webp"],
  },
};

const contactBreadcrumbSchema = {
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
      name: "Contact Us",
      item: "https://kanhavgroup.com/contact-us",
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Kanhav Industries",
  url: "https://kanhavgroup.com/contact-us",
  mainEntity: {
    "@type": "ManufacturingBusiness",
    name: "Kanhav Industries Private Limited",
    telephone: KANHAV_DATA.contact.phone,
    email: KANHAV_DATA.contact.emailSales,
    address: {
      "@type": "PostalAddress",
      streetAddress: KANHAV_DATA.contact.address,
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "394230",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.1702,
      longitude: 72.8311,
    },
    openingHours: "Mo-Sa 09:00-18:00",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <JsonLd data={contactBreadcrumbSchema} />
      <JsonLd data={contactPageSchema} />
      <ContactUsClient />
    </>
  );
}
