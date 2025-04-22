/** @type {import('tailwindcss').Config} */
const path = require('path');

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Inter', 'sans-serif'],
      },
      colors: {
        // Custom colors
        'grey': '#c1c2be', // Example primary color

      },
      backgroundImage: {
        // /Users/Kelly/wedding_rsvp_app/front_end/src/assets/backgrounds/wedding-venue-sample.jpg
        // front_end/src/assets/backgrounds/wedding-venue-sample.jpg
        // front_end/src/assets/backgrounds/wedding-venue-sample.jpg
        'hero' : "url('front_end/src/assets/backgrounds/wedding-venue-sample.jpg')",
        '404error' : "url('')",

      },
      screens: {
        // // Breakpoints for screen sizes
        // 'sm': '1px', // Small
        // 'md': '450px', // Medium
        // 'lg': '1024px', // Large
      },
      padding: {
        'textarea-left': '4px',
        'textarea-right': '4px'
      }
    }
  },
    plugins: [
      path.join(path.dirname(require.resolve('@tailwindcss/forms')), '**/*.js'),
    ],
  }
