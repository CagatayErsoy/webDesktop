import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        about:"url('//public/images/txt-file.png')"
      },
      colors:{
        'main':'#093973',
        'secondary':"#c0cade",
        'third':'#BCD2FF',
        'forth':'#785CA6',
        'terminal_text':"#33FF00",
        'terminal_bg':"#0e0e1b",
        'second_blue':"#3a65a9",
        'def_yellow':'#F9F871'

      }
    },
  },
  plugins: [],
}
export default config
