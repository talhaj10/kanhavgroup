import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kanhav Industries Private Limited",
    short_name: "Kanhav Industries",
    description:
      "Premier manufacturer of engineered multi-axial glass fabrics, warp-knitted technical textiles, and nylon FDY yarns in Surat, Gujarat.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14120f",
    icons: [
      {
        src: "/assets/images/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/images/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

