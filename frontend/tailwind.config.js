/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                "alpine-green": "#2D6A4F",
                "emerald-light": "#3ECF7A",
                "mint-flash": "#52E09C",
                "dark-bg": "#050E09",
                "surface": "#0A1A0F",
                "card-bg": "#0F2318",
                "muted-text": "#4D7A5F",
                "pure-white": "#F0FFF6"
            },
            fontFamily: {
                heading: ['"Cormorant Garamond"', "serif"],
                body: ['Montserrat', "sans-serif"],
                mono: ['"JetBrains Mono"', "monospace"],
            },
            keyframes: {
                rainbow: {
                    "0%": { "background-position": "0%" },
                    "100%": { "background-position": "200%" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
            },
            animation: {
                rainbow: "rainbow var(--speed, 2s) infinite linear",
                marquee: "marquee var(--duration) linear infinite",
            },
        },
    },
    plugins: [],
}
