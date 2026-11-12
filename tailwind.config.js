/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        COBRA: {
          DEFAULT: '#810100',
          cherry: '#810100',
          maroon: '#630102',
          ivory: '#EDEBDE',
          noir: '#1B1716',
          dark: '#2a1b1a',
          light: '#9a1717',
          accent: '#630102',
          glow: 'rgba(129, 1, 0, 0.4)',
        },
        darkbg: '#1B1716',
        darkcard: '#261e1c',
        darkborder: '#3a2422',
        lightbg: '#EDEBDE',
        lightcard: '#ffffff',
        lightborder: '#d8d2c1',
      },
      fontFamily: {
        krona: ['"Krona One"', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'COBRA-glow': '0 0 25px rgba(129, 1, 0, 0.35)',
        'COBRA-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
