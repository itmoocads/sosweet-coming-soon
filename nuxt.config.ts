// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js' },
        {src:'https://unpkg.com/splitting/dist/splitting.min.js'}
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://unpkg.com/splitting/dist/splitting.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/splitting/dist/splitting-cells.css' }
      ],
    }
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    /* module options */
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code:"en",
        iso:"en-US",
      },
      {
        code:"zh",
        iso:"zh-CN",
      }
    ], 
    defaultLocale: 'en',
  }
})
