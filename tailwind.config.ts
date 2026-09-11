import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        po: {
          navy: "var(--po-navy)",
          "navy-2": "var(--po-navy-2)",
          blue: "var(--po-blue)",
          "blue-deep": "var(--po-blue-deep)",
          cyan: "var(--po-cyan)",
          white: "var(--po-white)",
          sky: "var(--po-sky)",
          ink: "var(--po-ink)",
          slate: "var(--po-slate)",
          border: "var(--po-border)",
          "dark-card": "var(--po-dark-card)",
          "dark-border": "var(--po-dark-border)",
          "dark-muted": "var(--po-dark-muted)",
          "footer-bg": "var(--po-footer-bg)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "JetBrains Mono", "Menlo", "monospace"],
      },
      boxShadow: {
        "po-sm": "var(--po-shadow-sm)",
        "po-md": "var(--po-shadow-md)",
        "po-lg": "var(--po-shadow-lg)",
        "po-glow-cyan": "0 0 25px rgba(0, 207, 255, 0.35)",
        "po-glow-blue": "0 0 30px rgba(22, 119, 255, 0.35)",
      },
      backgroundImage: {
        "po-gradient-text": "linear-gradient(92deg, #1677FF 10%, #00CFFF 90%)",
        "po-gradient-btn": "linear-gradient(135deg, #1677FF, #0E5FD8)",
        "po-gradient-cta": "linear-gradient(135deg, #1677FF, #00CFFF)",
        "po-gradient-dark": "linear-gradient(180deg, #050A35 0%, #0B1554 100%)",
        "po-gradient-card":
          "linear-gradient(180deg, rgba(11, 21, 84, 0.6) 0%, rgba(5, 10, 53, 0.8) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "flow-line": "flowLine 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flowLine: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
