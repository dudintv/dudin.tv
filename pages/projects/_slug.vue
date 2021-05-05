<template lang="pug">
  section.project.container.mx-auto
    header.flex.justify-center.mb-8
      h1
        | {{ attributes.title }}
    component(:is="markdownContent")
</template>

<script>
import MediaImage from '~/components/media/MediaImage'
import MediaVimeo from '~/components/media/MediaVimeo'
import MediaYoutube from '~/components/media/MediaYoutube'

export default {
  data () {
    return {
      slug: '',
      markdownContent: {},
      attributes: {},
      icons: [],
      date: '',
    }
  },
  created () {
    this.markdownContent = () => import('~/content/projects/' + this.$route.params.slug + '.md').then((md) => {
      this.attributes = md.attributes
      const date = new Date(md.attributes.date)
      this.date = date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
      return {
        extends: md.vue.component,
        components: {
          MediaImage,
          MediaVimeo,
          MediaYoutube,
        },
      }
    }).catch((e) => {
      console.log('ERROR in markdown parsing', e)
    })
  },
}
</script>

<style lang="scss" scoped>
  .project {
    padding-left: 5vw;
    padding-right: 5vw;
  }
</style>
