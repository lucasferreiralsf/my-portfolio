/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'mouse-scroller': 'mouse-scroller 2.2s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite'
      },
      keyframes: {
        'mouse-scroller': {
          '0%': {
            opacity: 0
          },
          '10%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(15px)',
            opacity: 0
          }
        }
      },
      colors: {
        'base-50': '#303043',
        'base-30': '#5D5D82'
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#9747FF',
          secondary: '#FFC449',
          accent: '#F47133',
          neutral: '#e0e7ff',
          'base-100': '#252439',
          info: '#3abff8',
          success: '#a3e635',
          warning: '#FFC449',
          error: '#dc2626'
        }
      },
      'dark'
    ]
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
