/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      accent: 'hsl(126deg, 55%, 47%)',
      'accent-light': 'hsl(0deg, 0%, 97%)',
      'accent-lightest': 'hsl(134deg, 73%, 90%)',
      primary: 'hsl(0deg, 0%, 100%)',
      secondary: 'hsl(0deg, 0%, 96%)',
      'text-dark': 'hsl(126deg, 0%, 20%)',
      'text-grey': 'hsl(0deg, 0%, 57%)',
      'inactive-icons-grey': 'hsl(199deg, 13%, 66%)',
      'shop-cart-red': 'hsl(0deg, 88%, 65%)',
      'separation-line': 'hsl(0deg, 0%, 95%)',
      'rating-star': 'hsl(50deg, 96%, 63%)',
      'modal-overlay': 'hsl(0deg, 0%, 0%)',
      'modal-bg': 'hsl(0deg, 0%, 100%)',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      content: {
        'searchSvg': "url('./src/assets/icons/search.svg')",
      },
      gridTemplateColumns: {
        'tabGridCols': '11rem 1fr',
        'deskGridCols': '22rem 1fr'
      },
      gridTemplateRows: {
        'mobGridRows': 'auto 1fr auto',
        'tabGridRows': 'auto 1fr',
      },
      spacing: {
        '89': '22rem',
      }
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
  },
  plugins: [],
};
