<template lang="pug">
  .media-youtube.my-4
    .youtube-wrapper
      .youtube-player(ref="player" :id="videoId")
</template>

<script>
import YouTubePlayer from 'youtube-player'

export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      debounceTimer: null,
    }
  },
  computed: {
    videoId() {
      if (/v=.+$/.test(this.url)) {
        return this.url.match(/v=(.+)$/)[1]
      } else {
        return this.url.match(
          /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
        )[1]
      }
    },
    videoWidth() {
      return this.width > 0 ? this.width : this.$el.offsetWidth
    },
    videoHeight() {
      return this.width > 0 ? (this.width * 9) / 16 : this.$el.offsetHeight
    },
  },
  watch: {
    width() {
      this.changeYoutubeSize()
    },
  },
  mounted() {
    this.loadYoutube()
    setTimeout(() => {
      this.changeYoutubeSize()
    }, 1000)
  },
  methods: {
    loadYoutube() {
      if (this.videoId) {
        YouTubePlayer(this.$refs.player, {
          videoId: this.videoId,
          width: this.videoWidth,
          height: this.videoHeight,
        })
      }
    },
    changeYoutubeSize() {
      clearTimeout(this.debounceTimer)
      this.debounceTimer = setTimeout(() => {
        const youtubePlayer = document.getElementById(this.videoId)
        if (youtubePlayer) {
          youtubePlayer.setAttribute('width', this.videoWidth)
          youtubePlayer.setAttribute('height', this.videoHeight)
        }
      }, 200)
    },
  },
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
