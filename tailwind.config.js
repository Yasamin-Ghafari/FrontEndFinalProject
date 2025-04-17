/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: ["./pages/*.html"],
  theme: {
    extend: {

      fontFamily: {
        iransans: ["IranSans", "sans-serif"], // اضافه کردن فونت به Tailwind
      },
      backgroundImage: {
        gradient_green: "url('../public/images/gradient-3.png')",
        hand_form: "url('../public/images/hand.webp')",
        companies: "url('../public/images/main.webp')",

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
          600: '#6b6d70',

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
          600: '#4285f4',
          700: '#4367cb',
          50: '#4367cb',
          10: '#74c0fc'

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
          1000: '#008a6e',
        },
        brown: {
          500: '#F0E8D5'
        },
        red: {
          100: '#c93d31',
          200: '#e3342f'
        }
      },
      width: {
        1140: "71.25rem",
        800: "44.25rem",
        340: "21.25rem",
        300: "18.25rem",
        400: "25.25rem",
        280: "17.25rem",
        500: "31.25rem",

      },
      height: {
        500: "31.25rem",
        400: "24.25rem",
        50: "3.12rem",
        370: "23.135rem",


      },
    },
  },
  plugins: [],
}

