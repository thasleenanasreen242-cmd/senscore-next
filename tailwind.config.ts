import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#131417",
        surface: "#1B1C20",
        surface2: "#232428",
        line: "rgba(232, 237, 242, 0.10)",
        teal: {
          DEFAULT: "#84A4C4",
          light: "#A9C1DA",
          dim: "#084888",
          glow: "rgba(132, 164, 196, 0.35)",
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
        mute: "#9CA3AF",
        faint: "#6B7280",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(19,20,23,0) 0%, #131417 85%)",
        "blue-gradient": "linear-gradient(90deg, #084888 0%, #84A4C4 100%)",
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
