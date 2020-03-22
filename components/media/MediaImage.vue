<template lang="pug">
  img(:src="src")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    }
  },
  computed: {
    src () {
      return `/images${this.$route.path}/${this.name}`
    }
  },
  mounted () {
    console.log('MediaImage created')
  }
}
</script>
