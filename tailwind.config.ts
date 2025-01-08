import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
				borderColor: 'var(--border-color)',
				iconColor: 'var(--icon-color)',
				primary: 'var(--prime-color)',
				logo: 'var(--logo-color)',
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
					"0%": { transform: "w-[200px]", },
					"100%": { transform: "w-[0px]", },
				}, slideinFromLeft: {
					"0%": { transform: "w-[0px]", },
					"100%": { transform: "w-[200px]", },
				},

				flipedArrowToLeft: {
					"0%": { transform: "rotateZ(0deg)", },
					"100%": { transform: "rotateZ(180deg)" },
				}, flipedArrowToRight: {
					"0%": { transform: "rotateZ(180deg)", },
					"100%": { transform: "rotateZ(0deg)" },
				}
			},
			animation: {
				slideOutToLeft: 'slideOutToLeft 0.5s ease-in-out forwards',
				slideinFromLeft: 'slideInFromLeft 0.5s ease-in-out forwards',
				flipedArrowToLeft: 'flipedArrowToLeft 0.5s ease-in-out forwards',
				flipedArrowToRight: 'flipedArrowToRight 0.5s ease-in-out forwards',
			},
			// borderColor: {
			// 	DEFAULT: "var(--border-color)"
			// }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
