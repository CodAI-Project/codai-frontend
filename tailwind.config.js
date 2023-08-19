const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {

        'sulu': {
          '50': '#effce9',
          '100': '#ddf8cf',
          '200': '#b6f09c',
          '300': '#93e670',
          '400': '#6dd744',
          '500': '#4dbd25',
          '600': '#39961a',
          '700': '#2d7318',
          '800': '#275b19',
          '900': '#244e19',
          '950': '#0e2b08',
      },
      
        'malibu': {
          '50': '#f1fafe',
          '100': '#e1f4fd',
          '200': '#bdeafa',
          '300': '#82dbf7',
          '400': '#40c9f0',
          '500': '#17b3e0',
          '600': '#0a91bf',
          '700': '#09739b',
          '800': '#0c6280',
          '900': '#10516a',
          '950': '#0b3346',
        },

        woodsmoke: {
          50: '#f4f6f7',
          100: '#e2e8eb',
          200: '#c9d3d8',
          300: '#a3b4bd',
          400: '#768d9a',
          500: '#5b727f',
          600: '#4e606c',
          700: '#44505a',
          800: '#3d464d',
          900: '#363d43',
          950: '#131619',
        },
        // ... other custom colors
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
