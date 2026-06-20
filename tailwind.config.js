/** @type {import('tailwindcss').Config} */
module.exports = {
  // No darkMode class - we use data-theme attribute via CSS variables directly
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Space Grotesk', 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'var(--font-geist-mono)', 'monospace'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
