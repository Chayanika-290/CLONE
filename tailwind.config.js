/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-2xl': '1440px',
      },
      colors: {
        primary: '#ff0000',
        secondary: '#1A2024',
        gray: {
          100: '#F6F6F6',
          400: '#9CA3AF',
          900: '#1A2024',
        },
      },
      fontSize: {
        sm: '0.875rem',
        base: '15px',
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  plugins: [],
}
