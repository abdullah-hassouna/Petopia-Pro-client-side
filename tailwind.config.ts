import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./public*.{css,sass,scss}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        adoption: "var(--adoption-tag)",
        product: "var(--product-tag)",
        discuss: "var(--discuss-tag)",
        sale: "var(--sale-tag)",
        help: "var(--help-tag)",
        border: "var(--border-color)",
        primery: "var(--prime-color)",
        logo: "var(--logo-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
