import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-outfit)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        /** CBRE brand green — interview landing context */
        cbre: {
          DEFAULT: "#006A4D",
          bright: "#4ecf9a",
          muted: "#0d8f66",
        },
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(9,9,11,0.2), rgba(9,9,11,0.95)), linear-gradient(rgba(0,106,77,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,106,77,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
