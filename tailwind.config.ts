import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#B5B5B5",
        surface: "#E5E5E5",
        border: "#8E8E8E",
        text: "#111111",
        muted: "#333333",
        accent: "#000000",
        "off-white": "#F5F5F5",
        "palette-1": "#FFFFFF",
        "palette-2": "#F5F5F5",
        "palette-3": "#B5B5B5",
        "palette-4": "#8E8E8E",
        "palette-5": "#333333",
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
