/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {},
    colors: {
      base_purple: "#baadfcdc",
      base_green: "#9adade",
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
    
    },
    
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
},
}
