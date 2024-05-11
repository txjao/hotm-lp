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
        "white": "#f5f5f5",
        "green": "#50c878",
        "green-hover": "#41d773",
        "red": "#9a0b0b",
        "red-secondary": "#ff0000",
        "yellow": "#f4c430",
      },
      backgorundColor: {
        "white": "#f5f5f5",
        "green": "#50c878",
        "green-hover": "#41d773",
        "red": "#9a0b0b",
        "red-secondary": "#ff0000",
        "yellow": "#f4c430",
      },
      backgroundImage: {
        "ima": "url('/assets/images/ima.jpg')",
      },
      fontSize: {
        sm: "0.75rem",
        base: "1.5rem",
        lg: "2rem",
        xl: "3.5rem",
      }
    },
  },
  plugins: [],
};
export default config;