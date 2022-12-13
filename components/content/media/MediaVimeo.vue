<template lang="pug">
.media-vimeo.my-4
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe :src="videoUrl" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="LogoTransformations"></iframe>
  </div>
  //- <script src="https://player.vimeo.com/api/player.js"></script>
  //- component(:is="'script'" src="https://player.vimeo.com/api/player.js")
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    videoId() {
      // https://vimeo.com/530075847
      if (/vimeo.com\/\d+$/.test(this.url)) {
        return this.url.match(/vimeo.com\/(\d+)$/)[1];
      } else if (/\d+/.test(this.url)) {
        return this.url;
      } else {
        return "";
      }
    },
    videoUrl() {
      return `https://player.vimeo.com/video/${this.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
    },
  },
};
</script>

<style scoped>
.media-vimeo {
  display: block;
}
</style>
