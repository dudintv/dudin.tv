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
    const videoId = this.path.match(/v=(.+)$/)
    if (videoId) {
      YouTubePlayer(
        this.$refs.player,
        {
          videoId: videoId[1],
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
    margin: 0 auto;
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
