import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#3A3D42",
        surface: "#45484E",
        surface2: "#50545B",
        line: "rgba(232, 237, 242, 0.14)",
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
        ink: "#FFFFFF",
        mute: "#C9CCD1",
        faint: "#9498A0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(58,61,66,0) 0%, #3A3D42 85%)",
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
