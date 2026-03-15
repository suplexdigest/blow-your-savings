import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f5f5f5",
        gold: {
          DEFAULT: "#d4a853",
          light: "#e8c97a",
          dark: "#b08930",
        },
        surface: {
          DEFAULT: "#141414",
          hover: "#1a1a1a",
        },
        border: "#262626",
        muted: "#737373",
      },
    },
  },
  plugins: [],
};

export default config;
