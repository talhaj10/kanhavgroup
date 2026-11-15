import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import { RFQProvider } from "@/context/RFQContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import LogoPreloader from "@/components/ui/LogoPreloader";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14120f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kanhavgroup.com"),
  title: {
    default: "Kanhav Industries | Multi-Axial Glass Fabrics & Warp-Knitted Technical Textiles",
    template: "%s | Kanhav Industries",
  },
  description:
    "Kanhav Industries Private Limited, a subsidiary of the $19M Kanhav Group, pioneers Multi-Axial Glass Fabrics, Warp-Knitted Textiles, and Nylon FDY yarns from our advanced German-equipped facility in Surat, Gujarat.",
  applicationName: "Kanhav Industries",
  keywords: [
    "Kanhav Industries",
    "Kanhav Group",
    "Multi-Axial Glass Fabrics",
    "Warp Knitted Textiles",
    "German Warp Knitting Surat",
    "Nylon FDY Yarns",
    "Wind Energy Composites",
    "Biaxial Fabric",
    "Triaxial Fabric",
    "Quadra Axial Fabric",
    "Unidirectional Fabric",
    "Stitch Mat",
    "Combination Mat",
    "Karl Mayer Warp Knitting India",
    "Surat Composite Fabric Manufacturer",
    "Composite Materials India",
    "Make in India Composites",
  ],
  authors: [{ name: "Kanhav Industries Private Limited", url: "https://kanhavgroup.com" }],
  creator: "Kanhav Industries Private Limited",
  publisher: "Kanhav Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://kanhavgroup.com",
  },
  openGraph: {
    title: "Kanhav Industries | Growing Creativity With Trust",
    description:
      "Advanced composite fabrics engineered for wind energy, marine, transportation, and infrastructure. Powered by state-of-the-art German warp knitting machinery in Surat, Gujarat.",
    url: "https://kanhavgroup.com",
    siteName: "Kanhav Industries",
    images: [
      {
        url: "/assets/images/about-us-page-background.webp",
        width: 1200,
        height: 630,
        alt: "Kanhav Industries Technical Composite Facility Surat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanhav Industries | Multi-Axial Glass Fabrics & Warp-Knitted Composites",
    description:
      "Advanced composite glass fabrics engineered for wind energy, marine, transportation, and aerospace. German warp knitting in Surat, Gujarat.",
    images: ["/assets/images/about-us-page-background.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat, Gujarat, India",
    "geo.position": "21.1702;72.8311",
    ICBM: "21.1702, 72.8311",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation", "ManufacturingBusiness"],
  "@id": "https://kanhavgroup.com/#organization",
  name: "Kanhav Industries Private Limited",
  legalName: "Kanhav Industries Private Limited",
  alternateName: ["Kanhav Industries", "Kanhav Group"],
  url: "https://kanhavgroup.com",
  logo: "https://kanhavgroup.com/assets/images/kanhav-group-logo.webp",
  image: "https://kanhavgroup.com/assets/images/about-us-page-background.webp",
  description:
    "Manufacturer of Multi-Axial Glass Fabrics, Warp-Knitted Technical Textiles, and Nylon FDY Yarns in Surat, Gujarat, equipped with state-of-the-art German Karl Mayer warp knitting machines.",
  foundingDate: "2011",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Surat, Gujarat",
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
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91 97148 66866",
      contactType: "sales",
      email: "sales@kanhavgroup.com",
      areaServed: ["IN", "Worldwide"],
      availableLanguage: ["en", "hi", "gu"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91 98251 24707",
      contactType: "customer service",
      email: "admin@kanhavgroup.com",
      areaServed: "IN",
    },
  ],
  knowsAbout: [
    "Multi-Axial Glass Fabrics",
    "Warp Knitting",
    "Karl Mayer Machinery",
    "Nylon FDY Yarns",
    "Composite Materials",
    "Wind Energy Turbine Blades",
    "Marine Composites",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kanhavgroup.com/#website",
  name: "Kanhav Industries",
  url: "https://kanhavgroup.com",
  inLanguage: "en-US",
  publisher: {
    "@id": "https://kanhavgroup.com/#organization",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="bg-kraft-bg text-kraft-cream antialiased selection:bg-kraft-orange selection:text-white min-h-screen flex flex-col justify-between">
        <div className="kraft-rails" aria-hidden="true" />
        <LogoPreloader />
        <RFQProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <WhatsAppFab />
        </RFQProvider>
      </body>
    </html>
  );
}
