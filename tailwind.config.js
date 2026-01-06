/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,css,scss}'],

  corePlugins: {
    preflight: true
  },

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          md: '32px',
          xl: '80px'
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      }
    }
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')]
}
