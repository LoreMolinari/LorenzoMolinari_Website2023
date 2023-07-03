const path = require('path')

export default {
  head: {
    title: 'Lorenzo Molinari',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Lorenzo Molinari official website',
      },
      { property: 'og:title', content: 'Lorenzo Molinari website' },
      {
        property: 'og:description',
        content: 'New 2023 Website of Molinari Lorenzo',
      },
      { name: 'twitter:card', content: 'Lorenzo Molinari Website 2023' },
      { name: 'twitter:title', content: 'Lorenzo Molinari Website' },
      {
        name: 'twitter:description',
        content: 'New 2023 Website of Molinari Lorenzo',
      },
      { name: 'author', content: 'Lorenzo Molinari' },
      {
        name: 'keywords',
        content: 'LorenzoMolinari, Lore.Molinari, Valfurva, Lorenzo, Molinari',
      },
      {
        name: 'google-site-verification',
        content: 'EYw6yNIiZX3ZWTCjkdAV8cWWvHD28nmACTnO5zEmTFg',
      },
      { name: 'msvalidate.01', content: 'D562AF97E6D0F43894D25CFB5203B31F' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'theme-color', content: '#0D0E10' },
    ],
  },

  css: ['~assets/css/tailwind.css', '~assets/css/style.css'],

  plugins: [
    { src: '~plugins/slide-menu', ssr: false },
    { src: '~plugins/vue-sequential-entrance', ssr: false },
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'it',
      name: 'Lorenzo Molinari',
      short_name: 'Lore.Molinari',
      description: 'Lorenzo Molinari official website',
      background_color: '#0D0E10',
      theme_color: '#008b8b',
      icons: [
        {
          src: 'static/icon192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'static/icon512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Configurazione del percorso di output
    buildDir: 'dist', // Specifica il percorso desiderato per la directory di output
  },
}
