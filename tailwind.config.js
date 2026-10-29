/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: {
            DEFAULT: '#0f2942',
            50: '#f0f5fa',
            100: '#e1ebf4',
            200: '#c3d7e9',
            300: '#95bbd9',
            400: '#609bc5',
            500: '#3c7fb2',
            600: '#2c6593',
            700: '#245177',
            800: '#1e4463',
            900: '#0f2942',
            950: '#091929'
          },
          teal: {
            DEFAULT: '#0d9488',
            50: '#f0fdfa',
            100: '#ccfbf1',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
          },
          gold: '#d97706',
          saffron: '#ff9933',
          green: '#138808',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
