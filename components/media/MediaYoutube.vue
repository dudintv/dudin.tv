<template lang="pug">
  .media-youtube
    .youtube-wrapper
      .youtube-player(ref="player")
</template>

<script>
import YouTubePlayer from 'youtube-player'

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
  mounted () {
    let videoId
    if (/v=.+$/.test(this.url)) {
      videoId = this.url.match(/v=(.+)$/)[1]
    } else {
      videoId = this.url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)[1]
    }
    let videoWidth, videoHeight
    if (this.width > 0) {
      videoWidth = this.width
      videoHeight = this.width * 9 / 16
    } else {
      videoWidth = (this.$el).offsetWidth
      videoHeight = (this.$el).offsetHeight
    }
    if (videoId) {
      YouTubePlayer(
        this.$refs.player,
        {
          videoId,
          width: videoWidth,
          height: videoHeight,
        }
      )
    }
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
