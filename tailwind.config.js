module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      animation: {
        'spin-loader': 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        'fade-in': 'fade-in 0.3s ease-in-out',
      },
      colors: {
        blue: '#007bff',
        indigo: '#6610f2',
        purple: '#6f42c1',
        pink: '#e83e8c',
        red: '#dc3545',
        orange: '#fd7e14',
        yellow: '#ffc107',
        green: '#28a745',
        teal: '#20c997',
        cyan: '#17a2b8',
        white: '#fff',
        gray: '#6c757d',
        'gray-dark': '#343a40',
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#343a40',
        'nuxt-primary': '#001e26',
        'nuxt-secondary': '#012a35',
        'nuxt-accent': '#00dc82',
      },
      fontFamily: {},
      backgroundImage: {
        'header-example': "url('~/assets/images/header-example.jpg')",
        'header-example-2': "url('~/assets/images/header-example-2.png')",
      },
      transitionProperty: {
        width: 'width',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
            top: '-50px',
          },
          to: {
            opacity: 1,
            top: '0px',
          },
        },
      },
    },
  },
  plugins: [],
}
