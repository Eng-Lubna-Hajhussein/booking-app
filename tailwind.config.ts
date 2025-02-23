import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.66rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGray:"#F7F7F7",
        lightBlue:"#4395FF",
        darkBlue:"#0A66D2",
        medGray:"#969696",
        divider:"#E8E8E8"
      },
    },
  },
  plugins: [],
} satisfies Config;
