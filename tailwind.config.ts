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
        peacoat: {
          //text
          "50": "#ffffff",
          "200": "#ceced1",
          "400": "#9d9da3",
          "600": "#6c6c74",
          "800": "#3b3b46",
        },
        almondFrost: {
          //text
          "50": "#ffffff",
          "200": "#e7e4e2",
          "400": "#cfc9c6",
          "600": "#b7ada9",
          "800": "#9f928c",
        },
      },
    },
  },
  plugins: [
    // require("prettier-plugin-tailwindcss"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;
