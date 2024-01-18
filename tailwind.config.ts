import type { Config } from 'tailwindcss'

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
        nachopTheme: {
          'primary': '#8564c9',
          'primary-content': '#F7F4FB',
          'secondary': '#f480cc',
          'secondary-content': '#ffffff',
          'accent': '#ef4484',
          'accent-content': '#14040c',
          'neutral': '#3d4451',
          'neutral-content': '#ffffff',
          'base-100': '#f7effd',
          'base-200': '#f9fafb',
          'base-300': '#fefdff',
          'base-content': '#140f1e'
        }
      },
      'light'
    ]
  }
}
export default config
