module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-slide-1': "url('/main_slide1.jpg')",
        'main-slide-2': "url('/main_slide2.jpg')",
        'grmk-mini': "url('/intro/grmk_mini.jpg')",
        'grmk-place': "url('/intro/grmk_place.jpg')",
        'grmk-kitchen': "url('/intro/grmk_kitchen.jpg')",
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1760px',
        '5xl': '1920px',
      },
      fontFamily: {
        NanumSquare: ['나눔스퀘어', 'NanumSquare', 'sans-serif'],
      },
      width: {
        154: '9.625rem',
        284: '17.75rem',
        340: '21.25rem',
        1080: '67.5rem',
      },
      height: {
        81: '5.063rem',
        284: '17.75rem',
        149: '9.313rem',
        340: '21.25rem',
      },
      colors: {
        'grey-blue': '#5dc0db',
      },
    },
  },
  plugins: [],
};
