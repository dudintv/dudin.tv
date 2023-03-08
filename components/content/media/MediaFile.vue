<template lang="pug">
a.file(:href="filePath")
  <svg class="download-icon" width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 17.5H14V15.5H0V17.5ZM14 6.5H10V0.5H4V6.5H0L7 13.5L14 6.5Z" fill="white"/>
  </svg>
  | {{ name }}
</template>

<script setup lang="ts">
// import { useRoute } from 'vue-router';
// import { useRoute } from '#imports';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
});

const route = useRoute();
const filePath = computed(() => `/images${route.path}/${props.name}`);
</script>

<style lang="scss" scoped>
.file {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(53, 6, 6, 0.15) 100%),
    linear-gradient(108.04deg, #6c3392 0%, #79071c 100%);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  color: white;
  display: inline-block;
}

.download-icon {
  display: inline;
  margin-right: 0.5rem;
}
</style>
