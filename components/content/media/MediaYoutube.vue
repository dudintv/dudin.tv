<template lang="pug">
.media-youtube.my-4(ref="root")
  .youtube-wrapper
    <iframe ref="player" v-if="videoId" width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 0,
  },
});

const root = ref<HTMLDivElement>();
const player = ref<HTMLIFrameElement>();

function videoWidth(): number {
  return props.width > 0 ? props.width : root.value?.offsetWidth || 800;
}
function videoHeight(): number {
  return props.width > 0 ? (props.width * 9) / 16 : root.value?.offsetHeight || 600;
}

const videoId = computed(() => {
  if (!props.url) return '';
  if (/v=.+$/.test(props.url)) return props.url.match(/v=(.+)$/)?.[1];

  return (
    props.url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    )?.[1] || props.url
  );
});

const debounceTimer = ref<ReturnType<typeof setTimeout> | undefined>(undefined);

watch(player, () => {
  if (!player.value || !root.value) return;

  const resizeObserver = new ResizeObserver(changeYoutubeSize);
  resizeObserver.observe(root.value);
});

watch(
  () => props.width,
  () => {
    changeYoutubeSize();
  }
);

function changeYoutubeSize() {
  clearTimeout(debounceTimer.value);
  debounceTimer.value = setTimeout(() => {
    if (!player.value) return;
    player.value.setAttribute('width', videoWidth().toString());
    player.value.setAttribute('height', videoHeight().toString());
  }, 200);
}
</script>

<style scoped>
.media-youtube {
  display: block;
}
.youtube-wrapper {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
}
.youtube-player iframe.workYoutube-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
