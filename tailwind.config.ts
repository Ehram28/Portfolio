import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          950: "#06101a",
          900: "#0d1a27",
          800: "#14273b"
        },
        accent: {
          500: "#14b8a6",
          400: "#2dd4bf",
          300: "#5eead4"
        },
        sun: {
          500: "#f97316",
          400: "#fb923c"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45,212,191,.2), 0 0 45px rgba(20,184,166,.15)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(20,184,166,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
