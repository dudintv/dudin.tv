// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  // nitro: {
  //   preset: 'service-worker',
  // },
  typescript: {
    strict: true,
  },
  modules: [
    '@nuxt/content',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/tailwind.css',
    '@/assets/css/main.css',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'dudin.tv',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Vizrt scripts and articles by Dmitry Dudin',
        },
        { name: 'msapplication-TileColor', content: '#603cba' },
        { name: 'theme-color', content: '#ffffff' },

        { hid: 'og:site_name', property: 'og:site_name', content: 'dudin.tv' },
        { hid: 'og:url', property: 'og:url', content: 'https://dudin.tv' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Vizrt scripts by Dmitry Dudin',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Many scripts to build smart scenes',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://dudin.tv/images/common/opengraph.jpg',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Vizrt scripts from Dmitry Dudin',
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '2634632720190560',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
        {
          rel: 'mask-icon',
          href: '/favicons/safari-pinned-tab.svg',
          color: '#9804d0',
        },
      ],
    },
  },
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['r', 'xml', 'vb'],
    },
    // documentDriven: true,
  },
  imports: {
    dirs: ['store'],
  },
  plugins: [{ src: '~/plugins/lottie', mode: 'client' }],
  routeRules: {
    '/contacts': { static: true },
    '/links': { static: true },
  },
})
