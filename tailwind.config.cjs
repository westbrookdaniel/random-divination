/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: (theme) => ({
                text: theme('colors.gray.100'),
                bg: theme('colors.gray.900'),
                accent: theme('colors.blue.500'),
            }),
        },
    },
    plugins: [],
}
