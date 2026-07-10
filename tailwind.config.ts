import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#FFFFFF",
        surface: "#F4F4F4",
        border: "#E5E5E5",
        text: "#0D0D0D",
        muted: "#6B6B6B",
        accent: "#1A1A2E",
        "off-white": "#F0EEE9",
      },
      maxWidth: {
        prose: "640px",
        layout: "1100px",
      },
      borderRadius: {
        card: "16px",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.5rem",
        xl: "4rem",
        "2xl": "7rem",
      },
    },
  },
  plugins: [],
};

export default config;
