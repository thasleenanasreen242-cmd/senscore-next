import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#0A1B2E",
        surface: "#12263D",
        surface2: "#183048",
        line: "rgba(244, 246, 248, 0.10)",
        teal: {
          DEFAULT: "#C9A15A",
          light: "#E0C084",
          dim: "#8A6E3D",
          glow: "rgba(201, 161, 90, 0.35)",
        },
        indigo: {
          DEFAULT: "#3E6B96",
          dim: "#284B6E",
        },
        amber: {
          DEFAULT: "#C9A15A",
          dim: "#8A6E3D",
        },
        ink: "#F4F6F8",
        mute: "#8FA3B8",
        faint: "#516B85",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(10,27,46,0) 0%, #0A1B2E 85%)",
        "blue-gradient": "linear-gradient(90deg, #084888 0%, #3E6B96 100%)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "120px 120px" },
        },
      },
      animation: {
        scan: "scan 6s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        drift: "drift 14s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
