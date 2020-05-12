<template lang="pug">
  .script-content.container.mx-auto
    ScriptHero(:attributes="attributes" :code="code")
    component(:is="markdownContent")
    SourceCode(:attributes="attributes" :code="code")
</template>

<script>
import MediaImage from '~/components/media/MediaImage'
import MediaYoutube from '~/components/media/MediaYoutube'
import MediaFile from '~/components/media/MediaFile'
import InterfaceDescription from '~/components/scripts/InterfaceDescription'
import ScriptHero from '~/components/scripts/ScriptHero'
import SourceCode from '~/components/scripts/SourceCode'

export default {
  components: {
    ScriptHero,
    SourceCode,
  },
  data () {
    return {
      markdownContent: {},
      attributes: {},
      code: '',
    }
  },
  computed: {
    ogPageUrl () {
      if (process.env.NODE_ENV === 'development') {
        return window.location.href
      } else {
        return `https://dudin.tv${this.$route.path}/`
      }
    },
    ogImagePath () {
      const domain = process.env.NODE_ENV === 'development' ? window.origin : 'https://dudin.tv'
      return `${domain}/images/scripts/${this.$route.params.slug}/opengraph.png`
    }
  },
  created () {
    this.markdownContent = () => import('~/content/scripts/' + this.$route.params.slug + '.md').then((md) => {
      this.attributes = md.attributes
      const codePath = md.attributes.link.match(/(?<=https:\/\/bitbucket\.org\/).*/)[0]
      if (codePath && this.attributes.file) {
        fetch(`https://api.bitbucket.org/2.0/repositories/${codePath}/${this.attributes.file}`)
          .then((response) => response.text())
          .then((code) => {
            this.code = code
          })
      } else {
        this.code = ''
      }
      return {
        extends: md.vue.component,
        components: {
          InterfaceDescription,
          MediaImage,
          MediaYoutube,
          MediaFile,
        }
      }
    }).catch((e) => {
      console.log('ERROR in markdown parsing', e)
    })
  },
  head () {
    return {
      title: this.attributes.title,
      meta: [
        { hid: 'og:site_name', property: 'og:site_name', content: 'dudin.tv' },
        { hid: 'og:url', property: 'og:url', content: this.ogPageUrl },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:type', property: 'article:author', content: 'Dmitry Dudin' },
        { hid: 'og:title', property: 'og:title', content: this.attributes.title },
        { hid: 'og:description', property: 'og:description', content: this.attributes.description },
        { hid: 'og:image', property: 'og:image', content: this.ogImagePath },
        { hid: 'og:image:alt', property: 'og:image:alt', content: `"${this.attributes.title}" script from Dmitry Dudin` },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '627' },
        { hid: 'fb:app_id', property: 'fb:app_id', content: '2634632720190560' },
      ]
    }
  },
}
</script>

<style scoped>
  .script-content {
    padding-left: 5vw;
    padding-right: 5vw;
  }
</style>
