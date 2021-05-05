<template lang="pug">
  img.my-4(:src="imageSrc" :class="{'transparent-background': transparent}" :style="imageStyle" :width="imageWidth")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    isFullPath: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 0,
      require: false,
    },
  },
  computed: {
    imageSrc () {
      return this.isFullPath ? this.name : `/images${this.$route.path}/${this.name}`
    },
    imageWidth () {
      return this.width > 0 ? this.width : false
    },
    imageStyle () {
      return this.center ? 'margin-left: auto; margin-right: auto;' : ''
    }
  },
}
</script>

<style scoped>
  .transparent-background {
    background-image: url(~static/images/common/transparent-background.jpg);
    background-size: 25px 25px;
    margin: .5em 0;
  }
</style>
