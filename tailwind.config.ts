import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// Tailwind v4 config (minimal) — requerido pelo shadcn/ui
export default {
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        druk: ['Druk', 'Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config;


