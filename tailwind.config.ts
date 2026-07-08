import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand red scale (gradients use red tones only)
        brand: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#E53935", // primary
          600: "#D32F2F",
          700: "#C62828",
          800: "#B71C1C",
          900: "#7F1414",
        },
        ink: "#1A1A1A", // text
        surface: "#FAFAFA", // background
        night: "#111111", // dark sections
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.06)",
        lift: "0 8px 30px rgba(17,17,17,0.08), 0 20px 60px rgba(17,17,17,0.10)",
        glow: "0 10px 40px rgba(229,57,53,0.28)",
        "glow-sm": "0 6px 20px rgba(229,57,53,0.20)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #E53935 0%, #B71C1C 100%)",
        "brand-soft": "linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%)",
        "radial-fade": "radial-gradient(60% 60% at 50% 40%, rgba(229,57,53,0.16) 0%, rgba(229,57,53,0) 70%)",
        "grid-lines": "linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-28px) rotate(6deg)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-slow": "marquee 48s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.2,1) infinite",
        shimmer: "shimmer 1.8s infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
