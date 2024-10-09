/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./layouts/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: {
                DEFAULT: '#ffbc00',
            },
            secondary: {
                DEFAULT: '#274f63',
            },
            gray: {
                text: '#333333',
                900: '#333333',
            },
            white: '#ffffff',
            black: '#000000',
            current: 'current',
            transparent: 'transparent',
        },
        extend: {},
    },
    plugins: [],
};
