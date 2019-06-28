import pkg from './package'
export default {
  mode: 'universal',
  cfg: pkg.cfg,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.cfg.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, minimal-ui' },
      { hid: 'description', name: 'description', content: pkg.cfg.description },
      { name: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { name: 'theme-color', content: '#2f3e5d' },

      { 'http-equiv': 'X-UA-Compatible', content: 'IE: Edge, chrome: 1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset: UTF-8' },

      // facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: pkg.cfg.url },
      { hid: 'og:image', property: 'og:image', content: pkg.cfg.url + pkg.cfg.image },

      { hid: 'og:title', property: 'og:title', content: pkg.cfg.title },
      { hid: 'og:description', property: 'og:description', content: pkg.cfg.description },

      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: pkg.cfg.url + pkg.cfg.image },

      { hid: 'twitter:title', name: 'twitter:title', content: pkg.cfg.title },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.cfg.description },

    ],

    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald&display=swap' },
      { rel: 'stylesheet', href: '/mdi.css' },

      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'manifest', href: '/icons/manifest.json' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#2f3e5d' },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: pkg.cfg.colors.scooter },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/stylus/main.styl',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/countup.client.js',
    '@/plugins/viewport.client.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/ngrok',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-NP9HJPR', pageTracking: false }],
    ['@nuxtjs/pwa', { manifest: false }],
  ],
  devModules: [
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
    }
  }
}
