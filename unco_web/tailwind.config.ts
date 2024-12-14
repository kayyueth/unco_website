import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black:'#000',
        darkGray:"#333",
        midGray:"#212121",
        lightGray:"#a29a9a",
        brown:"#413838",
      },
      fontFamily: {
        neue: ['Neue', 'sans-serif'],
        spacemono: ['SpaceMono', 'monospace'],
        by7: ['5by7', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
} satisfies Config;
