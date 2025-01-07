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
        primary: {
          DEFAULT: 'var(--prime-color)',
          50: 'rgba(var(--prime-color-rgb), 0.5)',
          75: 'rgba(var(--prime-color-rgb), 0.75)',
          90: 'rgba(var(--prime-color-rgb), 0.9)',
        },
        adoption: {
          DEFAULT: 'var(--adoption-tag)',
          70: 'rgba(var(--adoption-tag-rgb), 0.7)',
        },
        product: {
          DEFAULT: 'var(--product-tag)',
          70: 'rgba(var(--product-tag-rgb), 0.7)',
        },
        discuss: {
          DEFAULT: 'var(--discuss-tag)',
          70: 'rgba(var(--discuss-tag-rgb), 0.7)',
        },
        sale: {
          DEFAULT: 'var(--sale-tag)',
          70: 'rgba(var(--sale-tag-rgb), 0.75)',
        },
        help: {
          DEFAULT: 'var(--help-tag)',
          70: 'rgba(var(--help-tag-rgb), 0.75)',
        },
        gray: {
          DEFAULT: 'var(--border-color)'
        },
        whity: {
          DEFAULT: 'var(--whity)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      }
    }
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
