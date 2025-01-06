import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		// "./public*.{css,sass,scss}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				adoption: 'var(--adoption-tag)',
				product: 'var(--product-tag)',
				discuss: 'var(--discuss-tag)',
				sale: 'var(--sale-tag)',
				help: 'var(--help-tag)',
				border: 'hsl(var(--border))',
				primary: 'var(--prime-color)',
				logo: 'var(--logo-color)',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				slideOutToLeft: {
					"0%": { transform: "translateX(0)", opacity: "1" },
					"100%": { transform: "translateX(-100%)", opacity: "0" },
				}, slideinFromLeft: {
					"0%": { transform: "translateX(-100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				}
			},
			animation: {
				slideOutToLeft: 'slideOutToLeft 0.5s ease-in-out forwards',
				slideinFromLeft: 'slideInFromLeft 0.5s ease-in-out forwards',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
