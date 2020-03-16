<template lang="pug">
  .script-item
    .thumbnail.flex.items-center.justify-center(:style="gradByName(script.category)")
      .image
        img(:src="script.thumbnail")
    .header
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 340 82" class="header-bg">
        <path :fill="`url(#grad0_${script.category})`" d="M319 0s11 45 0 81c0 0-40-25-183-15C-8 77 9 0 9 0h310z"/>
        <path :fill="`url(#grad1_${script.category})`" d="M340 0v67s-62-9-169-1C63 73 0 68 0 68V0h340z"/>
        <defs>
          <linearGradient :id="`grad0_${script.category}`" x1="8" x2="324" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" :stop-color="shadowGradByName(script.category)[0]"/>
            <stop offset="1" :stop-color="shadowGradByName(script.category)[1]"/>
          </linearGradient>
          <linearGradient :id="`grad1_${script.category}`" x1="0" x2="340" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" :stop-color="darkGradByName(script.category)[0]"/>
            <stop offset="1" :stop-color="darkGradByName(script.category)[1]"/>
          </linearGradient>
        </defs>
      </svg>
      .title-group.w-full.flex.justify-between.items-end.absolute.top-0.left-0.px-4.py-1
        .title-and-category
          span.category(:style="colorByName(script.category)") {{ script.category }}
          a(href="#")
            h3.title {{ script.name }}
        .codes
          a.code(
            v-for="(code, index) in script.codes"
            @click.prevent="copyCode(code)"
            )
            span.number(v-if="script.codes.length > 1") {{ index+1 }}
      p.description {{ script.description }}
</template>

<script>
const Color = require('color')

export default {
  props: {
    script: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    gradByName (name) {
      const gradient = this.$store.state.gradients[name]
      return `background: linear-gradient(10deg, ${gradient[0]}, ${gradient[1]})`
    },
    darkGradByName (name) {
      const gradient = this.$store.state.gradients[name]
      const start = Color(gradient[0]).darken(0.6).desaturate(0.5).hex()
      const end   = Color(gradient[1]).darken(0.6).desaturate(0.5).hex()
      return [start, end]
    },
    shadowGradByName (name) {
      const gradient = this.$store.state.gradients[name]
      const start = Color(gradient[0]).darken(0.8).hex()
      const end   = Color(gradient[1]).darken(0.8).hex()
      return [start, end]
    },
    colorByName (name) {
      const gradient = this.$store.state.gradients[name]
      return `color: ${gradient[0]}`
    },
    copyCode (code) {
      console.log('Copy code', code)
    },
  }
}
</script>

<style lang="scss" scoped>
  .script-item {
    background-color: #455C82;
    max-width: 355px;
  }
  .thumbnail {
    width: 355px;
    height: 200px;
  }
  .header {
    position: relative;
  }
  .title {
    line-height: 0.8em;
    color: white;
  }
  .code {
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 14px;
    display: inline-flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 5px;
    margin-left: 10px;
    width: 24px;
    height: 28px;
    background: url(/images/common/copy.svg);
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  .number {
    padding-bottom: 0.5em;
    line-height: 0.8em;
  }
  .description {
    padding: 5px 20px 20px 20px;
    line-height: 1.4em;
  }
</style>
