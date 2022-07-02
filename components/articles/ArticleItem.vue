<template lang="pug">
  .article-item.mb-16
    span.date {{ date }}
    .title
      .icons
        img.icon(v-for="icon in icons" :src="`/images/icons/${icon}.png`")
      nuxt-link(:to="permalink()")
        h2.title.text-left.my-2 {{ article.attributes.title }}
    p.description.mb-0 {{ article.attributes.description }}
    small: nuxt-link(:to="permalink()") read more ...
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    icons() {
      return this.article.attributes.tags.split(' ')
    },
    date() {
      const date = new Date(this.article.attributes.date)
      return date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  },
  methods: {
    slug() {
      return this.article.meta.resourcePath
        .split('\\')
        .pop()
        .split('/')
        .pop()
        .split('.')[0]
    },
    permalink() {
      return `/articles/${this.slug()}`
    },
  },
}
</script>

<style lang="scss" scoped>
.date {
  color: rgba(255, 255, 255, 0.5);
}

.icons {
  @apply flex absolute left-0 pr-2;
  transform: translateX(-100%);
}

.icon {
  @apply mx-1;
  width: 32px;
  height: 32px;
}

.title {
  color: #78beff;
}
</style>
