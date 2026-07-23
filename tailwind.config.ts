import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#050914",
        surface: "#0A1226",
        surface2: "#101B36",
        line: "rgba(232, 237, 242, 0.08)",
        teal: {
          DEFAULT: "#22B8FF",
          dim: "#0E6FAF",
          glow: "rgba(34, 184, 255, 0.35)",
        },
        indigo: {
          DEFAULT: "#3D5AFE",
          dim: "#28399E",
        },
        amber: {
          DEFAULT: "#FF7A45",
          dim: "#B0501F",
        },
        ink: "#E8EDF2",
        mute: "#8B98A8",
        faint: "#4E5A6B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(5,9,20,0) 0%, #050914 85%)",
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
