export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  manifest: {
    name: '',
    short_name: '',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-256x256.png',
        sizes: '256x256',
        type: 'image/png'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone'
  },
  router: {},
  loading: { color: '#fff', height: '2px' },
  css: ['ress', '~assets/sass/global.sass'],
  plugins: ['~plugins/vue-lazyload'],
  modules: ['@nuxtjs/pwa', '@nuxtjs/eslint-module', '@nuxtjs/style-resources'],
  styleResources: {
    sass: ['~assets/sass/_variable.sass', '~assets/sass/_easings.sass']
  },
  generte: {
    fallback: true
  },
  build: {
    extend(config, ctx) {}
  }
}
