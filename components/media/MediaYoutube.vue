<template lang="pug">
  .media-youtube
    .youtube-wrapper
      .youtube-player(ref="player" :id="videoId")
</template>

<script>
import YouTubePlayer from 'youtube-player'

const debounce = (action, time) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => action(...args), time)
  }
}

const youtubeWidthChanged = debounce((vThis) => {
  const youtubePlayer = document.getElementById(vThis.videoId)
  if (youtubePlayer) {
    youtubePlayer.setAttribute('width', vThis.videoWidth)
    youtubePlayer.setAttribute('height', vThis.videoHeight)
  }
}, 500)

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 0
    }
  },
  computed: {
    videoId () {
      let id
      if (/v=.+$/.test(this.url)) {
        id = this.url.match(/v=(.+)$/)[1]
      } else {
        id = this.url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)[1]
      }
      return id
    },
    videoWidth () {
      if (this.width > 0) {
        return this.width
      } else {
        return (this.$el).offsetWidth
      }
    },
    videoHeight () {
      if (this.width > 0) {
        return this.width * 9 / 16
      } else {
        return (this.$el).offsetHeight
      }
    },
  },
  watch: {
    width () {
      this.changeYoutubeSize()
    }
  },
  mounted () {
    this.loadYoutube()
  },
  methods: {
    loadYoutube () {
      if (this.videoId) {
        YouTubePlayer(
          this.$refs.player,
          {
            videoId: this.videoId,
            width: this.videoWidth,
            height: this.videoHeight,
          }
        )
      }
    },
    changeYoutubeSize () {
      youtubeWidthChanged(this)
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
