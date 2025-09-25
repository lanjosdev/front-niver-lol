import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// Tailwind v4 config (minimal) — requerido pelo shadcn/ui
export default {
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config;


