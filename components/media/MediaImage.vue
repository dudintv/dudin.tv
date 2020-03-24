<template lang="pug">
  img.my-4(:src="src" :class="{'transparent-background': transparent}")
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
    }
  },
  computed: {
    src () {
      return `/images${this.$route.path}/${this.name}`
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
