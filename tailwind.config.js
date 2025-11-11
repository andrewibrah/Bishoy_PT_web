/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1FB8CD',
        'brand-primary-dark': '#158899',
        'brand-accent': '#FF6B35',
        'brand-dark': '#0A1128',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(31, 184, 205, 0.35)',
      },
    },
  },
  plugins: [],
};
