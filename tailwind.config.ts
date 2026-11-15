import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kraft: {
          bg: "#f8f7f4",
          card: "#ffffff",
          elevated: "#f0ede6",
          orange: "#cc410f",
          "orange-hover": "#e04c15",
          cream: "#38342f",
          headline: "#110f0e",
          forest: "#202b12",
          olive: "#524e47",
          border: "rgba(0, 0, 0, 0.08)",
          "border-subtle": "rgba(0, 0, 0, 0.04)",
          muted: "rgba(56, 52, 47, 0.7)",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        card: "16px",
        hero: "24px",
        pill: "9999px",
      },
      backdropBlur: {
        glass: "16px",
      },
      boxShadow: {
        glow: "0 0 24px -4px rgba(204, 65, 15, 0.35)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
