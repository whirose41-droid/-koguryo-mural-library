import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          bg: "#050505",
          slate: "#0b0b0d",
          accent: "#f5b35c",
          accentSoft: "#e1a85c33"
        }
      },
      fontFamily: {
        brush: ["var(--font-brush)", "Ma Shan Zheng", "system-ui", "sans-serif"],
        sans: ["system-ui", "sans-serif"]
      },
      boxShadow: {
        "soft-glow": "0 0 60px rgba(245, 179, 92, 0.45)"
      },
      backgroundImage: {
        "rock-texture":
          "radial-gradient(circle at 0 0, #1b1b1f 0, transparent 55%), radial-gradient(circle at 100% 100%, #111117 0, transparent 55%), radial-gradient(circle at 100% 0, #15151b 0, transparent 45%), radial-gradient(circle at 0 100%, #101019 0, transparent 45%)",
        "cloud-border":
          "url(\"/decor/cloud-border.svg\")",
        "paper-fiber":
          "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.03) 0, transparent 60%), radial-gradient(circle at 80% 0, rgba(255,255,255,0.03) 0, transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
