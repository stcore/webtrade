import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/comp/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1B1E',
        'primary-light': '#1976d2',
        'primary-dark': 'text-stone-50',
        secondary: {
          'gradient-linear': 'gradient-linear(from 94deg at 0.6% 99.8%, #B22129 )'
        },
        'secondary-light': '#9c27b0',
        'secondary-dark': 'bg-emerald-400',
        error: '#FA5757',
        'error-light': '#d32f2f',
        'error-dark': '#d32f2f',
        warning: '#F8B917',
        'warning-light': '#ffc107',
        'warning-dark': '#ffc107',
        info: '#503FF0',
        'info-light': '#0288d1',
        'info-dark': '#0288d1',
        success: '#2e7d32',
        'success-light': '#2e7d32',
        'success-dark': '#2e7d32',
        grey: 'linear-gradient(129deg, #2E3033 18.9%, #FFF 118.32%, #2C2C2C 118.32%)',
        'grey-light': '#2e7d32',
        'grey-dark': '#2e7d32',
        'background-default': '#1A1B1E',
        'background-paper': '#2E3033'
      },
      boxShadow: {
        '3xl': '0px 10px 10px 0px #00000080'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base'
    })
  ]
}
export default config
