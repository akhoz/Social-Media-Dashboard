/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                gradientInit: 'hsl(210, 78%, 56%)',
                gradientEnd: 'hsl(146, 68%, 55%)',

                headerDark: 'hsl(232, 19%, 15%)',
                bgDark: 'hsl(230, 17%, 14%)',
                bgCardDark: 'hsl(228, 28%, 20%)',
                titleDark: 'hsl(228, 12%, 44%)',
                textDark: 'hsl(230, 17%, 14%)',
            },
        },
    },
    plugins: [],
}
