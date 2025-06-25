/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#423FE5',
        "custom-color-1": '#EEEEEE',
        'custom-color-2': '#FFFFFF',
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          50: "#C5C7D4",
          100: "#AFB2BF",
          200: "#999DAA",
          300: "#838894",
          400: "#6E727F",
          500: "#585D69",
          600: "#424854",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      margin: {
        '26': '26rem',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: '7px 7px rgba(249, 87, 0, 0.3)'
        // Replace the rgba values with your custom color (for #F95700)
      }
    },
  },
  plugins: [],
}

