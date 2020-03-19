<template lang="pug">
  #scripts-filter.flex.items-start.cursor-pointer.text-white.font-bold
    .option.px-3.py-1.hover_border-b-4.border-white(
      v-for="option in options"
      :style="gradByName(option)"
      @click="select(option)"
      ) {{ option }}
</template>

<script>
export default {
  data: () => ({
    options: [
      'all',
      'animation',
      'link',
      'logic',
      'position',
      'texture',
    ]
  }),
  methods: {
    gradByName (name) {
      const gradient = this.$store.state.gradients[name]
      return `background: linear-gradient(to bottom right, ${gradient[0]}, ${gradient[1]})`
    },
    select (name) {
      this.$emit('filterChanged', name)
    },
  }
}
</script>

<style>

</style>
