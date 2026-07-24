import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        surface: "#0A0E14",
        surface2: "#12171F",
        line: "rgba(232, 237, 242, 0.10)",
        teal: {
          DEFAULT: "#5A82A8",
          light: "#84A4C4",
          dim: "#084888",
          glow: "rgba(90, 130, 168, 0.35)",
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
        mute: "#8B96A5",
        faint: "#4E5A6B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 85%)",
        "blue-gradient": "linear-gradient(90deg, #084888 0%, #84A4C4 100%)",
        "body-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(8,72,136,0.25) 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #060A10 50%, #000000 100%)",
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
