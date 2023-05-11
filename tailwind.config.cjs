/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fill, minmax(10rem, 1fr))'
      },
      aspectRatio: {
        '16/9': '56.25%' // 16/9 = 0.5625
      },
      backgroundColor: {
        mainBrand: '#111d22'
      },
      textColor: {
        mainBrand: '#c9ab81',
        'mainBrand-2': '#111d22'
      }
    }
  },
  plugins: []
}
