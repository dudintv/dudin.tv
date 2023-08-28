<template>
  <div class="article-item mb-16">
    <span class="date">{{ displayDate }}</span>
    <div class="title">
      <div class="icons"><img class="icon" v-for="icon in icons" :src="`/icons/${icon}.png`" /></div>
      <nuxt-link :to="article._path">
        <h2 class="title text-left my-2">{{ article.title }}</h2>
      </nuxt-link>
    </div>
    <p class="description mb-0">{{ article.description }}</p>
    <small> <nuxt-link :to="article._path">read more ...</nuxt-link></small>
  </div>
</template>

<script setup lang="ts">
import { Article } from '@/types';
import { PropType } from 'vue';

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
});

const icons = computed(() => props.article.tags.split(' '));

const displayDate = computed(() => {
  const date = new Date(props.article.date || 0);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});
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
