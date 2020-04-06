import path from 'path'
import Mode from 'frontmatter-markdown-loader/mode'
import glob from 'glob'

async function getDynamicPaths (urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`)
    })
  )
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'dudin.tv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vizrt scripts and article from Dmitry Dudin' },
      { name: 'msapplication-TileColor', content: '#603cba' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#9804d0' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#243B61' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/fonts' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META]
        }
      })
    }
  },

  generate: {},
}
