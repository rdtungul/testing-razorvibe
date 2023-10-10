console.log('hello')
tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg1': "url('../img/hero-left.jpg')",
        'hero-bg2': "url('../img/hero-right.jpg')",
      },
      colors: {
        primary: { 100: '#25292B' },
        secondary: {
          100: '#99968D',
        },
        tertiary: { 100: '#EAEAEA', 200: '#E5E4E4', 300: '#f5f5f5' },
      },
      leading: {
        11: '3.188rem',
        12: '5rem',
        8: '1.938rem',
      },
      fontSize: {
        'text-7xxl': '4.625rem',
        'text-10xl': '9rem',
      },
      padding: {
        'p-section': '9.375rem',
      },
      margin: {
        'm-subtext': '3.75rem',
      },
    },
    fontFamily: {
      heading: ['SF Pro Display Bold, serif'],
      body: ['SF Pro Display Regular, serif'],
    },
  },
}

const button = document.querySelector('#menu-button')
const menu = document.querySelector('#menu')

button.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})
