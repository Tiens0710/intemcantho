import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  darkMode: ["class", ".dark"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        "primary-foreground": "#FFFFFF",
        secondary: "#06B6D4",
        "secondary-foreground": "#FFFFFF",
        accent: "#8B5CF6",
        "accent-foreground": "#FFFFFF",
        background: "#FFFFFF",
        foreground: "#0F172A",
        card: "#FFFFFF",
        "card-foreground": "#0F172A",
        muted: "#F1F5F9",
        "muted-foreground": "#64748B",
        border: "#E2E8F0",
      },
    },
  },
  plugins: [],
};

export default config;
