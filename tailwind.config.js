/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                //Toggle Button
                gradientInit: 'hsl(210, 78%, 56%)',
                gradientEnd: 'hsl(146, 68%, 55%)',

                //Text
                textColor: 'hsl(228, 12%, 44%)',
                darkerTextColor: 'hsl(230, 17%, 14%)',

                //Dark Theme
                headerDark: 'hsl(232, 19%, 15%)',
                bgDark: 'hsl(230, 17%, 14%)',
                bgCardDark: 'hsl(228, 28%, 20%)',

                //Light Theme
                headerLight: 'hsl(225, 100%, 98%)',
                bgLight: 'hsl(0, 0%, 100%)',
                bgCardLight: 'hsl(227, 47%, 96%)',
            },
        },
    },
    plugins: [],
}
