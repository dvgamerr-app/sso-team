export default {
  ssr: true,
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    ssoRedirectURL: process.env.SSO_REDIRECT_URL || 'http://localhost:8080/sign-in',
    ssoAppID: process.env.SSO_APPLICATION_ID || '',
  },
  head: {
    titleTemplate: `%sTEAM TOUNO.io`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src: 'https://static.cloudflareinsights.com/beacon.min.js?token=42e216b9090ru59384ygu891dce9eecde&spa=false',
        defer: true,
      },
    ],
  },
  // serverMiddleware: ['~/server-middleware/sign-in'],
  css: [
    '~/assets/scss/global.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  plugins: [
    '~/plugins/vue-fontawesome.js',
    '~/plugins/vue-tabindex.js',
  ],
  modules: [
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  bootstrapVue: { icons: false },
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000/'
  },
  build: {
    babel: { compact: true },
    parallel: true,
    terser: {
      parallel: true,
      cache: true,
      sourceMap: false,
    },
  },
  loaders: {
    scss: {},
  },
}
