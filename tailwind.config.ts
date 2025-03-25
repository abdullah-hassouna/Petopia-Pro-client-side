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
			screens: {
				custom: '425px',
				xs: "320px"
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				'header-color': 'var(--header-font-color)',
				'sub-header-color': 'var(--sub-header-font-color)',
				'icon-color': {
					'50': 'rgba(var(--icon-color-rgb), 0.5)',
					'75': 'rgba(var(--icon-color-rgb), 0.75)',
					'90': 'rgba(var(--icon-color-rgb), 0.9)',
					DEFAULT: 'var(--icon-color)'
				},
				'body-font-color': 'var(--body-font-color)',
				primary: {
					'50': 'rgba(var(--prime-color-rgb), 0.5)',
					'75': 'rgba(var(--prime-color-rgb), 0.75)',
					'90': 'rgba(var(--prime-color-rgb), 0.9)',
					DEFAULT: 'var(--prime-color)'
				},
				adoption: {
					'70': 'rgba(var(--adoption-tag-rgb), 0.7)',
					'100': 'var(--adoption-tag-100)',
					DEFAULT: 'var(--adoption-tag)'
				},
				product: {
					'70': 'rgba(var(--product-tag-rgb), 0.7)',
					'100': 'var(--product-tag-100)',
					DEFAULT: 'var(--product-tag)'
				},
				discuss: {
					'70': 'rgba(var(--discuss-tag-rgb), 0.7)',
					'100': 'var(--discuss-tag-100)',
					DEFAULT: 'var(--discuss-tag)'
				},
				sale: {
					'70': 'rgba(var(--sale-tag-rgb), 0.75)',
					'100': 'var(--sale-tag-100)',
					DEFAULT: 'var(--sale-tag)'
				},
				help: {
					'70': 'rgba(var(--help-tag-rgb), 0.75)',
					'100': 'var(--help-tag-100)',
					DEFAULT: 'var(--help-tag)'
				},
				gray: {
					DEFAULT: 'var(--border-color)'
				},
				whity: {
					DEFAULT: 'var(--whity)'
				},
				'header-text-color': {
					DEFAULT: 'var(--header-font-colo)'
				},
				'sub-header-text-color': {
					DEFAULT: 'var(--sub-header-font-color)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				slideOutToLeft: {
					'0%': {
						transform: 'w-[200px]'
					},
					'100%': {
						transform: 'w-[0px]'
					}
				},
				slideinFromLeft: {
					'0%': {
						transform: 'w-[0px]'
					},
					'100%': {
						transform: 'w-[200px]'
					}
				},
				flipedArrowToLeft: {
					'0%': {
						transform: 'rotateZ(0deg)'
					},
					'100%': {
						transform: 'rotateZ(180deg)'
					}
				},
				flipedArrowToRight: {
					'0%': {
						transform: 'rotateZ(180deg)'
					},
					'100%': {
						transform: 'rotateZ(0deg)'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				slideOutToLeft: 'slideOutToLeft 0.5s ease-in-out forwards',
				slideinFromLeft: 'slideInFromLeft 0.5s ease-in-out forwards',
				flipedArrowToLeft: 'flipedArrowToLeft 0.5s ease-in-out forwards',
				flipedArrowToRight: 'flipedArrowToRight 0.5s ease-in-out forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	safelist: [
		'bg-adoption-100',
		'bg-adoption',
		'via-adoption',
		'bg-product',
		'via-product',
		'bg-product-100',
		'bg-discuss',
		'via-discuss',
		'bg-discuss-100',
		'bg-sale-100',
		'bg-sale',
		'via-sale',
		'bg-help-100',
		'via-help',
		'bg-help'
	],

	plugins: [require("tailwindcss-animate")],
} satisfies Config;
