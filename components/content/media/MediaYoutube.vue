<template lang="pug">
.media-youtube.my-4(ref="root")
  .youtube-wrapper
    <iframe ref="player" v-if="videoId" width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 0,
  },
})

const root = ref(null)
const player = ref(null)

function videoWidth() {
  return props.width > 0 ? props.width : root.value?.offsetWidth
}
function videoHeight() {
  return props.width > 0 ? (props.width * 9) / 16 : root.value?.offsetHeight
}

const videoId = computed(() => {
  if (!props.url) return ''
  if (/v=.+$/.test(props.url)) return props.url.match(/v=(.+)$/)[1]

  return props.url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  )[1]
})

const debounceTimer = ref(null)
// onMounted(() => {
//   changeYoutubeSize();
// });

watch(player, () => {
  if (!player.value) return

  const resizeObserver = new ResizeObserver(changeYoutubeSize)
  resizeObserver.observe(root.value)
})

watch(
  () => props.width,
  () => {
    changeYoutubeSize()
  }
)

function changeYoutubeSize() {
  clearTimeout(debounceTimer.value)
  debounceTimer.value = setTimeout(() => {
    if (player.value) {
      player.value.setAttribute('width', videoWidth())
      player.value.setAttribute('height', videoHeight())
    }
  }, 200)
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
