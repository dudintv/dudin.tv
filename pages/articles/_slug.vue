<template lang="pug">
  div
    .container.mx-auto
      h1
        | {{ attributes.title }}
        span.icons
          img.icon(v-for="icon in icons" :src="`/images/icons/${icon}.png`")
      component(:is="markdownContent")
</template>

<script>
import MediaImage from '~/components/media/MediaImage'
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
    this.markdownContent = () => import('~/content/articles/' + this.$route.params.slug + '.md').then((md) => {
      this.attributes = md.attributes
      this.icons = md.attributes.tags.split(' ')
      const date = new Date(md.attributes.date)
      this.date = date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
      return {
        extends: md.vue.component,
        components: {
          MediaImage,
          MediaYoutube,
        }
      }
    }).catch((e) => {
      console.log('ERROR in markdown parsing', e)
    })
  },
}
</script>

<style lang="scss" scoped>
  .icons {
    @apply relative inline-flex mb-8;
    top: 2px;
  }

  .icon {
    @apply ml-4;
    width: 32px;
  }
</style>
