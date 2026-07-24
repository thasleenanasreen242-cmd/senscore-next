import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#03192E",
        surface: "#052C54",
        surface2: "#073A6B",
        line: "rgba(232, 237, 242, 0.10)",
        teal: {
          DEFAULT: "#084888",
          light: "#84A4C4",
          dim: "#052C54",
          glow: "rgba(8, 72, 136, 0.45)",
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
        mute: "#9FB2C8",
        faint: "#5B7392",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(3,25,46,0) 0%, #03192E 85%)",
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
