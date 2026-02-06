/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#764640',
        cream: '#F5EFE7',
        lightBrown: '#C9A98A',
        darkBrown: '#5C3A34',
      },
      fontFamily: {
        loveLight: ['"Love Light"', 'cursive'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        dmSans: ['"DM Sans"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        oregano: ['Oregano', 'cursive'],
        passions: ['"Passions Conflict"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'cover-pattern': "url('/assets/bg-cover.png')",
        'arrum-pattern': "url('/assets/bg-arrum.png')",
        'ceremony-pattern': "url('/assets/bg-ceremony.png')",
      },
    },
  },
  plugins: [],
}
