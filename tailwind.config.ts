import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        nachopLight: {
          primary: '#8564c9',
          'primary-content': '#F7F4FB',
          secondary: '#f480cc',
          'secondary-content': '#ffffff',
          accent: '#ef4484',
          'accent-content': '#14040c',
          neutral: '#3d4451',
          'neutral-content': '#130b21',
          'base-100': '#f7effd',
          'base-200': '#f9fafb',
          'base-300': '#ffffff',
          'base-content': '#130b21',
          '.bg-gradient': {
            position: 'fixed',
            top: '0',
            left: '0',
            'z-index': '-2',
            height: '100vh',
            width: '100vw',
            'background-color': '#ffffff',
            'background-image': 'radial-gradient(ellipse 80% 80% at 50% -20%,rgba(230,220,231),rgb(249,249,249))'
          }
        }
      },
      {
        nachopDark: {
          ...themes.dark,
          primary: '#8564c9',
          'primary-content': '#F7F4FB',
          secondary: '#F7A6DB',
          'secondary-content': '#ffffff',
          accent: '#BEACE2',
          'accent-content': '#14040c',
          neutral: '#3d4451',
          'neutral-content': '#cbd5e1',
          'base-100': '#0f0526',
          'base-200': '#f9fafb',
          'base-300': '#fefdff',
          'base-content': '#fff',
          '.bg-gradient': {
            position: 'fixed',
            top: '0',
            left: '0',
            'z-index': '-2',
            height: '100vh',
            width: '100vw',
            'background-color': '#140f1e',
            'background-image': 'radial-gradient(ellipse 80% 80% at 50% -20%,rgba(120,119,198,0.3),rgba(255,255,255,0))'
          }
        }
      }
    ]
  }
}

export default config
