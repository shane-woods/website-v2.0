import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "3": "repeat(3, minmax(0, 1fr))",
      },
    },
    fontFamily: {
      sans: ["sans-serif"],
    },
    gridTemplateColumns: {
      "20-80": "20% 80%",
    },
  },
  plugins: [],
};
export default config;
