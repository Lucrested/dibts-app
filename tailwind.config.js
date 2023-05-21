/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customYellow: '#ffe7a6',
        customBrown: '#6c2916',
        customLBrown: '#ab3d1f',
        customBun: '#f4941c',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}