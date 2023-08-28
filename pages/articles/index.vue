<template>
  <div class="articles-page">
    <div id="articles-bg" />
    <div class="articles-list">
      <ArticlesItem v-for="article in articles" :article="article" :key="article.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Article } from '@/types';

const nuxtApp = useNuxtApp();
const articles = (await queryContent('/articles').only(['_path', 'date', 'title', 'description', 'tags']).find()).sort(
  (a1, a2) => (new Date(a1.date) < new Date(a2.date) ? 1 : -1)
) as unknown as Article[];

onMounted(() => {
  nuxtApp.$lottie
    .loadAnimation({
      container: document.getElementById('articles-bg'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/bg-rock.json',
      speed: 500,
    })
    .setSpeed(2);
});
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
