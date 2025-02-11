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
        rose: "#FFBDBD",
        violet: "#3A1BFF",
        "bleu-ciel": "#0CC4FF",
        jaune: "#FFE700",
        vert: "#00FD93",
        "noir-100": "#010409",
        "noir-80": "#1A1A1A",
        "noir-60": "#111111",
        "jaune-transparent": "#FFE70010",
        "violet-transparent": "#3A1BFF10",
        "vert-transparent": "#00FD9310",
      },
      fontFamily: {
        poppins : "var(--poppins)",
        roboto : "var(--roboto)",
      },
    },
  },
  plugins: [],
} satisfies Config;
