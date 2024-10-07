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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "proxima-nova": ['var(--font-proxima-nova-regular)', 'sans-serif'], // Also for the local font
      },
      animation: {
        "zoom-in": "zoom-in 0.4s linear",
        "round-corner": "round-corner 0.4s ease",
      },
      keyframes: {
        "zoom-in": {
          from: {
            scale: "1"
          }, to: {
            scale: "1.1"
          }
        },
        "round-corner": {
          from: {
            borderRadius: "0rem"
          }, to: {
            borderRadius: "0.75rem"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
