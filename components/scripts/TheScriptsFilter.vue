<template lang="pug">
  #scripts-filter.flex.flex-wrap.items-start.cursor-pointer.text-white.font-bold.py-4
    .option.px-3.py-1(
      v-for="option in options"
      :style="gradByName(option)"
      @click="select(option)"
      :class="{selected: (option===selectedOption)}"
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
      'transformation',
      'texture',
    ],
    selectedOption: 'all'
  }),
  methods: {
    gradByName (name) {
      const gradient = this.$store.state.gradients[name]
      return `background: linear-gradient(to bottom right, ${gradient[0]}, ${gradient[1]})`
    },
    select (name) {
      this.selectedOption = name
      this.$emit('filterChanged', name)
    },
  }
}
</script>

<style lang="scss" scoped>
  .option {
    position: relative;
    margin-top: .7rem;

    &::after {
      content: '';
      width: 100%;
      height: 4px;
      background-color: transparent;
      position: absolute;
      left: 0;
      bottom: -8px;
      transition: background-color 1s ease;
    }

    &:hover::after {
      background-color: white;
      transition: background-color .2s ease;
    }

    &.selected::after {
      background-color: white;
    }
  }
</style>
