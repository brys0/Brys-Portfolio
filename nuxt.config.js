export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Brys',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Brys Develops' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Byrs\'s Site'},
      { hid: 'og:title', property: 'og:title', content: 'Brys\'s Site | Home'},
      { hid: 'og:image', property: 'og:image', content: 'https://i.brys.tk/5ZDZ'},
      { hid: 'og:description', property: 'og:description', content: 'Just some young fullstack developer\n I LOVE YOU <3'},
      { hid: 'og:url', property: 'og:url', content: 'https://brys.tk'},
      { hid: 'og:theme-color', property: 'og:theme-color', content: '#348ceb'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/pfp.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/master.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/navsidebar.js',
    '~/plugins/md.js'
  ],
  target: 'server',
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources",
    //Font Awesome
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }]

  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: 7583, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }
}
