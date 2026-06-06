/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        accent:  '#9FE45A',
        'accent-light': '#b4f070',
        dark:    '#111111',
        card:    '#1A1A1A',
        border:  '#252525',
        muted:   '#888888',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float':      'float 8s ease-in-out infinite',
        'blink':      'blink 1.2s step-end infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.8', transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
