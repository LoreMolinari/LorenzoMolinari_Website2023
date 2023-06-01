module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme-dark': '#0D0E10',
        'theme-secondary': '#008b8b',
        'theme-tertiary': '#313B5E',
        'theme-cta': '#008b8b',
      },
    },
  },
  variants: {},
  plugins: [],
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
  ],
}
