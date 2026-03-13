import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        sand: "#f4eee3",
        mist: "#dcece9",
        deep: "#0f3d3b",
        ember: "#ff8c42",
        tide: "#1d6b67",
        slate: "#334155",
      },
      boxShadow: {
        panel: "0 20px 60px rgba(12, 35, 34, 0.12)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(15, 61, 59, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 61, 59, 0.08) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleX(0.98)" },
          "50%": { opacity: "1", transform: "scaleX(1.02)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseLine: "pulseLine 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
