import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#0a0c0f",
        bg2:      "#0f1215",
        bg3:      "#13171c",
        border:   "#1e242c",
        accent:   "#00e5ff",
        red:      "#ff4757",
        green:    "#2ecc71",
        muted:    "#3a4553",
        dim:      "#5a6a7e",
        head:     "#e8f0fa",
        body:     "#c8d6e5",
      },
      fontFamily: {
        display: ["var(--font-syne)"],
        mono:    ["var(--font-space-mono)"],
        code:    ["var(--font-fira-code)"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#c8d6e5",
            a: { color: "#00e5ff" },
            strong: { color: "#e8f0fa" },
            code: { color: "#00e5ff", backgroundColor: "#13171c", padding: "2px 6px", borderRadius: "4px" },
            h1: { color: "#e8f0fa" },
            h2: { color: "#e8f0fa" },
            h3: { color: "#e8f0fa" },
            blockquote: { borderLeftColor: "#00e5ff", color: "#5a6a7e" },
            hr: { borderColor: "#1e242c" },
          },
        },
      },
      animation: {
        "fade-up":  "fadeUp 0.6s ease forwards",
        "blink":    "blink 0.9s step-end infinite",
        "pulse-dot":"pulseDot 2s infinite",
      },
      keyframes: {
        fadeUp:   { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        blink:    { "50%": { opacity: "0" } },
        pulseDot: { "0%,100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: "0.4", transform: "scale(1.4)" } },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
