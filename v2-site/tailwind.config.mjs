/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#001f24",
        "brand-teal": "#004b54",
        "brand-teal-light": "#007a87",
        "brand-yellow": "#FFD700",
        "brand-text": "#1e293b",
        "brand-text-dim": "#64748b"
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
