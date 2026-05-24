/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f0ff',
          100: '#ebe4ff',
          200: '#d9cdff',
          300: '#bda6ff',
          400: '#9b75ff',
          500: '#7c42ff',
          600: '#6d1ff7',
          700: '#5e0ee3',
          800: '#4e0bbf',
          900: '#410e9c',
          950: '#27066a',
        },
        ink: {
          50: '#f5f5f6',
          100: '#e6e6e7',
          200: '#cfcfd2',
          300: '#aeaeB3',
          400: '#87878f',
          500: '#6c6c74',
          600: '#5c5c63',
          700: '#4e4e54',
          800: '#444449',
          900: '#26262b',
          950: '#131316',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
