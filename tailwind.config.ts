import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f1f3f5',
          dark: '#1a1c22',
        },
        textPrimary: {
          DEFAULT: '#203753',
          dark: '#e1e7ef',
        },
        buttonPrimary: {
          DEFAULT: '#E63946',
          dark: '#E63946',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#282c34',
        },
        gray: {
          DEFAULT: '#f5f5f5',
          dark: '#333740',
        },
      },
    },
  },
  plugins: [],
};

export default config;
