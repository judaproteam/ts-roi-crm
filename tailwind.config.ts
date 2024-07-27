import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      size: {
        4.5: '1.15rem',
        5.5: '1.4rem',
      },
    },
  },
  plugins: [],
}
export default config
