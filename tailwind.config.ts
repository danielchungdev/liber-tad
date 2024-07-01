import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ["LibreBaskerville", "serif"],
        source: ["SourceSansPro", "sans-serif"]
      },
      fontSize: {
        'header': '32px',
        'paragraph': '18px',
        'small-body': '12px' 
      },
      colors: {
        'text': '#191610',
        'background': '#F9F8F6',
        'primary': '#9C8B68',
        'secondary': '#B3C7A9',
        'accent': '#8AB28E'
      },
    },
  },
  plugins: [],
};
export default config;
