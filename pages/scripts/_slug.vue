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
      slug: '',
      markdownContent: {},
      attributes: {},
      code: '',
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
}
</script>

<style scoped>
  .script-content {
    padding-left: 5vw;
    padding-right: 5vw;
  }
</style>
