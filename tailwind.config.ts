import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        TrialSans: ['TrialSans', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      screens: {
        xm: { max: "400px" },
        sm: { min: "401px", max: "768px" },
        md: { min: "769px", max: "1024px" },
        lg: { min: "1025px", max: "1490px" },
        xl: { min: "1491px" },
      }
    },
  },
  plugins: [],
};
export default config;
