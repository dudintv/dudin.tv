<template lang="pug">
  div
    component(:is="markdownContent")
</template>

<script>
import MediaImage from '~/components/media/MediaImage'
import MediaYoutube from '~/components/media/MediaYoutube'
import InterfaceDescription from '~/components/scripts/InterfaceDescription'

export default {
  data () {
    return {
      slug: '',
      markdownContent: {},
    }
  },
  created () {
    this.markdownContent = () => import('~/content/scripts/' + this.$route.params.slug + '.md').then((md) => {
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
