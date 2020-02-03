
export default {
  mode: "universal",
  /*
  ** Headers of the page
  */
  head: {
    title: "Touch Belgium",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.npm_package_description || "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#30a8d8'
  },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/css/main.scss"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // https://github.com/richardtallent/vue-simple-calendar/issues/132
    "~/plugins/calendar-view.client.js",
    "~/plugins/calendar-view-header.client.js",
    // Vue gallery: https://github.com/RobinCK/vue-gallery
    "~plugins/vue-gallery.client.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    "@nuxtjs/moment"
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "nuxt-leaflet",
    "nuxt-fontawesome",
    "nuxt-rfg-icon",            // Using all default config, check docs
    ['nuxt-matomo', { matomoUrl: '//touchbelgium-analytics.duckdns.org/', siteId: 1 }],
    [
      "nuxt-i18n", {
        strategy: "no_prefix",
        locales: ["en", "fr", "nl"],
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: {
              calendar: "Calendar",
              news: "Latest news"
            },
            fr: {
              calendar: "Calendrier",
              news: "Dernières nouvelles"
            },
            nl: {
              calendar: "Kalender",
              news: "Laatste nieuws"
            }
          }
        },
        // By default a store module is registered and kept in sync
        // with the app's i18n current state
        vuex: {
          // Module namespace
          moduleName: "i18n",
          // If enabled, current app's locale is synced with nuxt-i18n store module
          syncLocale: true
        }
      }
    ],
    "@nuxtjs/sitemap"
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // The environment variable API_URL can be used to override the
    // following:
    baseURL: "http://localhost:8000/api/"
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  styleResources: {
    scss: [
      "bootstrap/scss/_functions.scss",
      "bootstrap/scss/_variables.scss",
      "bootstrap/scss/_mixins.scss",
      "~assets/css/_colours.scss"
   ]
  },
  moment: {
    defaultLocale: "en",
    locales: ["fr", "nl"],
    timezone: {
      matchZones: /^Europe/,
      startYear: 2014,
      endYear: 2040
    }
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"]
      }
    ],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    standalone: true,
    extend (config, ctx) {
    }
  },
};
