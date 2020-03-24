<template lang="pug">
  .media-youtube
    .youtube-wrapper
      .youtube-player(ref="player")
</template>

<script>
import YouTubePlayer from 'youtube-player'

export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  mounted () {
    let videoId
    if (/v=.+$/.test(this.path)) {
      videoId = this.path.match(/v=(.+)$/)[1]
    } else {
      videoId = this.path.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/)[1]
    }
    console.log('videoId', videoId)
    if (videoId) {
      YouTubePlayer(
        this.$refs.player,
        {
          videoId,
          width: (this.$el).offsetWidth,
          height: (this.$el).offsetHeight,
        }
      )
    }
  },
}
</script>

<style scoped>
  .media-youtube {
    display: block;
    margin: 6rem auto;
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
