<template lang="pug">
  div
    .container.mx-auto
      ScriptHero(:attributes="attributes")
      component(:is="markdownContent")
      SourceCode(:path="attributes.source")
</template>

<script>
import MediaImage from '~/components/media/MediaImage'
import MediaYoutube from '~/components/media/MediaYoutube'
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
    }
  },
  created () {
    this.markdownContent = () => import('~/content/scripts/' + this.$route.params.slug + '.md').then((md) => {
      this.attributes = md.attributes
      return {
        extends: md.vue.component,
        components: {
          MediaImage,
          InterfaceDescription,
          MediaYoutube,
        }
      }
    }).catch((e) => {
      console.log('ERROR in markdown parsing', e)
    })
  },
}
</script>
