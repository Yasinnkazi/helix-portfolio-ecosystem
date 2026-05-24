/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8faf9',
          100: '#eef2f0',
          200: '#dbe3de',
          300: '#bccbc1',
          400: '#95aca0',
          500: '#6f897b',
          600: '#5a7266',
          700: '#495c53',
          800: '#3d4c45',
          900: '#35413b',
          950: '#1b2420',
        },
        ink: {
          50: '#f5f5f4',
          100: '#e6e5e4',
          200: '#cecdca',
          300: '#b0aeaa',
          400: '#94928d',
          500: '#7a7873',
          600: '#64625e',
          700: '#52504d',
          800: '#464543',
          900: '#2c2b29',
          950: '#161615',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
