<template lang="pug">
  .articles-page
    #articles-bg
    .articles-list
      ArticleItem(v-for="article in articles" :article="article" :key="article.attributes.title")
</template>

<script>
import lottie from 'lottie-web'

import ArticleItem from '~/components/articles/ArticleItem'

export default {
  components: {
    ArticleItem,
  },
  async asyncData () {
    const resolve = require.context('~/content/articles/', true, /\.md$/)
    const imports = resolve.keys().map(key => {
      return resolve(key)
    }).sort((a1, a2) => {
      const data1 = new Date(a1.attributes.date)
      const data2 = new Date(a2.attributes.date)
      return data1 < data2 ? 1 : -1
    })
    return {
      articles: imports
    }
  },
  mounted () {
    lottie.loadAnimation({
      container: document.getElementById('articles-bg'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/bg-rock.json',
      speed: 500,
    }).setSpeed(2)
  },
}
</script>

<style lang="scss" scoped>
  .articles-page {
    @apply relative flex justify-center items-center w-full pl-24 pr-4;
  }

  #articles-bg {
    @apply absolute z-0;
    top: -15vw;
  }

  .articles-list {
    @apply relative flex flex-col z-10;
    max-width: 600px;
  }
</style>
