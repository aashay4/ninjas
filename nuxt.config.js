
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'robots', name: 'robots', content: 'noindex,nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-backtotop', ssr: false },
    { src: '~/plugins/vue-toastification', ssr: false },
    { src: '~/plugins/vueperslides', ssr: false },
    { src: '~/plugins/firebase.js', ssr: false},
],
    // { src: '~/plugins/firebase' },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/google-adsense',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios'
],

sitemap: {
    hostname: 'https://laptops.ninja'
},
'google-adsense': {
      id: 'ca-pub-6829148792481216'
    },
  css: [
    './assets/scss/styles/animate.min.css',
    './assets/scss/styles/fontawesome.min.css',
    './assets/scss/styles/style.scss',
    './assets/scss/styles/admin.scss',
    './assets/scss/styles/responsive.scss',
  ],
  /** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  /*
  ** Globally configure <nuxt-link> default active class.
  */
  router: {
    linkActiveClass: 'active'
  },
  /*
  ** Build configuration
  */
  build: {
postcss: null,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
