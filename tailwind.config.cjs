/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['GeneralSans-Regular', 'sans-serif'],
                heading: ['GeneralSans-Medium', 'sans-serif'],
                title: ['Aktura-Regular', 'serif'],
            },
        },
    },
    plugins: [],
}
