import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import { RFQProvider } from "@/context/RFQContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import LogoPreloader from "@/components/ui/LogoPreloader";
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
  themeColor: "#ece8e1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kanhavgroup.com"),
  title: "Kanhav Industries | Multi-Axial Glass Fabrics & Warp-Knitted Technical Textiles",
  description:
    "Kanhav Industries Private Limited, a subsidiary of the $19M Kanhav Group, pioneers Multi-Axial Glass Fabrics, Warp-Knitted Textiles, and Nylon FDY yarns from our advanced German-equipped facility in Surat, Gujarat.",
  keywords: [
    "Kanhav Industries",
    "Kanhav Group",
    "Multi-Axial Glass Fabrics",
    "Warp Knitted Textiles",
    "Nylon FDY Yarns",
    "Wind Energy Composites",
    "Biaxial Fabric",
    "Triaxial Fabric",
    "Quadra Axial Fabric",
    "Unidirectional Fabric",
    "Stitch Mat",
    "Combination Mat",
    "Surat Textile Manufacturer",
    "Composite Materials India",
  ],
  authors: [{ name: "Kanhav Industries Private Limited" }],
  openGraph: {
    title: "Kanhav Industries | Growing Creativity With Trust",
    description:
      "Advanced composite fabrics engineered for wind energy, marine, transportation, and infrastructure. Powered by German warp knitting machinery.",
    url: "https://kanhavgroup.com/",
    siteName: "Kanhav Industries",
    images: [
      {
        url: "/assets/images/about-us-page-background.webp",
        width: 1200,
        height: 630,
        alt: "Kanhav Industries Technical Composite Facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/images/favicon.png",
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
      <body className="bg-kraft-bg text-kraft-cream antialiased selection:bg-kraft-orange selection:text-white min-h-screen flex flex-col justify-between">
        <div className="kraft-rails" aria-hidden="true" />
        <LogoPreloader />
        <RFQProvider>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <WhatsAppFab />
        </RFQProvider>
      </body>
    </html>
  );
}
