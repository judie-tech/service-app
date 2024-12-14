import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        border: "var(--border)",
      },
      colors: {
        primary: {
          DEFAULT: "#E3B448", // Mustard Yellow
          foreground: "#1A1A1A",
        },
        secondary: {
          DEFAULT: "#CBD5E1", // Light gray for contrast
          foreground: "#1A1A1A",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
