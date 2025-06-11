/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#004d43',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero': '4rem', // Custom large size for headers like "SERVICES"
      },

      // ✅ NEW PART: Gradient Animation
      keyframes: {
        gradientBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradientBG: 'gradientBG 15s ease infinite',
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      backgroundImage: {
        'gradient-animation': 'linear-gradient(-45deg, #ff6ec4, #7873f5, #4adede, #5ee7df)',
      },
    },
  },
  plugins: [],
};
