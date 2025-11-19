import defaultTheme from 'tailwindcss/defaultTheme';

// Then, access the fontFamily property from the imported object
const { fontFamily } = defaultTheme;

/** @type {import('tailwindcss').Config} */
const config = {
        content: [
                './pages/**/*.{js,ts,jsx,tsx,mdx}',
                './components/**/*.{js,ts,jsx,tsx,mdx}',
                './app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        theme: {
                extend: {
                        fontFamily: {
                                // Your custom font utility class
                                'display': ['Cormorant Upright', ...fontFamily.serif],
                                // Optional: If you use the standard sans utility
                                'sans': ['var(--font-geist-sans)', ...fontFamily.sans],
                                // Optional: If you use the standard mono utility
                                'mono': ['var(--font-geist-mono)', ...fontFamily.mono],
                        },
                },
        },
        plugins: [],
};

export default config;
