/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
        backgroundColor: {
          mainColor: '#FBF8F9',
          secondaryColor: '#F0F0F0',
          blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        },
        // backgroundImage: {
        //   'home': "url('./src/assets/images/background.jpg')",
        // }
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
}

