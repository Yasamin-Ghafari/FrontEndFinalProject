/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: ["./pages/*.html"],
  theme: {
    extend: {

      fontFamily: {
        iransans: ["IranSans", "sans-serif"], // اضافه کردن فونت به Tailwind
      },

      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1632px'
        }
      },
      colors: {
        white: '#FFFFFF',
        gray: {
          100: '#444',
          200: '#555',
          50: '#a5a5a5',
          300: '#999',
          400: '#777',
          10: '#f9f9f9',
          15: '#e7e7e7',
          20: '#f2f2f2',
          30: '#d0d0d0',
          500: '#f5f5f5',

        },
        yellow: {
          100: '#fdcb6e',
          200: '#FDC040',
          300: '#ffc457',
          500: '#f9a60b',
        },
        blue: {
          100: '#3AB1E4',
          200: '#008891',
          300: '#253D4E',
          400: '#1abc9c',
          500: '#00b38f',
          50: '#e5f7f3',
          600: '#4285f4',
          700: '#4367cb',
          50: '#4367cb'

        },
        green: {
          50: '#e9fcf8',
          100: '#F2FCE4',
          150: '#BCE3C9',
          200: '#3BB77E',
          300: '#81B13D',
          400: '#3A882B',
          500: '#227226',
          600: '#1A5D2C',
          700: '#1abc9c',
          800: '#008c67',
          900: '#17a689',
        },
        brown: {
          500: '#F0E8D5'
        },
        red: {
          100: '#c93d31',
          200: '#e3342f'
        }
      }
    },
  },
  plugins: [],
}

