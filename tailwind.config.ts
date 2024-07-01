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
        primary: "#1DA1F2",
        secondary: "#1D75F2",
      },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1100px",
      },
    },
  },
  plugins: [],
};
export default config;
