import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "../public/img/**/*.png",
    ],
    theme: {
        extend: {
            fontSize: {
                'm2xl': ['38px', { lineHeight: '1.2' }], // Asegura que sea un array con line-height opcional
            },
        },
    },
    plugins: [],
};

export default config;
