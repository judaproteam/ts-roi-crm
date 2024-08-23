import type { Config } from 'tailwindcss'
import { boxShadow } from 'zvijude/funcs/twTheme'

const config: Config = {
  content: [
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/zvijude/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        solid: 'rgb(29 78 216)',
        soft: 'rgb(219 234 254)',
      },
      boxShadow,
      size: {
        4.5: '1.15rem',
        5.5: '1.4rem',
      },
    },
  },
  plugins: [],
}
export default config
