/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"boldFont"'],
        customFont2: ['"reqularFont"']
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}