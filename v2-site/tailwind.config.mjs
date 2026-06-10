/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#010D0F",
        "brand-teal": "#002D33",
        "brand-teal-light": "#004B54",
        "brand-teal-accent": "#007A87",
        "brand-yellow": "#FFD700",
        "brand-yellow-muted": "#D4AF37",
        "brand-text": "#E6F3F5",
        "brand-text-dim": "#9DB7BC"
      },
      fontFamily: {
        "headline": ["Outfit", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}
