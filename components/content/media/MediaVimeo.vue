<template>
  <div class="media-vimeo my-4">
    <div style="padding: 56.25% 0 0 0; position: relative">
      <iframe
        :src="videoUrl"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        title="LogoTransformations"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const videoId = computed(() => {
  // https://vimeo.com/530075847
  if (/vimeo.com\/\d+$/.test(props.url)) {
    return props.url.match(/vimeo.com\/(\d+)$/)?.[1];
  }

  if (/\d+/.test(props.url)) {
    return props.url;
  }

  return '';
});

const videoUrl = computed(
  () => `https://player.vimeo.com/video/${videoId.value}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`
);
</script>

<style scoped>
.media-vimeo {
  display: block;
}
</style>
