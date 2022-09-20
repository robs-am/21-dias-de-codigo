const tailwindcss = require = require('tailwind');

module.exports = {
    plugins: [
        tailwindcss('./dia12/tailwind.js'),
        require('autoprefixer')
    ]
}