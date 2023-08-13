/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/*.{html,ts,js,css,vue}',
        './src/**/*.{html,ts,js,css,vue}'
    ],
    mode: 'jit',
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient( 100% 100% at 50% 0%, var(--tw-gradient-stops) )',
            },
        },
    },
    plugins: [],
}
