<template lang="pug">
  .script-item
    nuxt-link.thumbnail.flex.items-center.justify-center.cursor-pointer(
      :to="permalink()"
      :style="gradByName(script.attributes.category)"
      )
      img(:src="thumbnailUrl()")
      .hover
    .header.relative
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 340 82" class="header-bg">
        <path :fill="`url(#grad0_${script.attributes.category})`" d="M319 0s11 45 0 81c0 0-40-25-183-15C-8 77 9 0 9 0h310z"/>
        <path :fill="`url(#grad1_${script.attributes.category})`" d="M340 0v67s-62-9-169-1C63 73 0 68 0 68V0h340z"/>
        <defs>
          <linearGradient :id="`grad0_${script.attributes.category}`" x1="8" x2="324" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" :stop-color="shadowGradByName(script.attributes.category)[0]"/>
            <stop offset="1" :stop-color="shadowGradByName(script.attributes.category)[1]"/>
          </linearGradient>
          <linearGradient :id="`grad1_${script.attributes.category}`" x1="0" x2="340" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" :stop-color="darkGradByName(script.attributes.category)[0]"/>
            <stop offset="1" :stop-color="darkGradByName(script.attributes.category)[1]"/>
          </linearGradient>
        </defs>
      </svg>
      .title-group.w-full.flex.justify-between.items-center.absolute.top-0.left-0.px-6.py-1
        .title-and-category
          span.category(:style="colorByName(script.attributes.category)") {{ script.attributes.category }}
          a(href="#")
            h3.title {{ script.attributes.title }}
        .codes
          a.code(
            v-if="script.attributes.file"
            @click.prevent="copyCode(script)"
            )
            //- span.absolute.top-0.pt-5(v-if="script.attributes.codes.length > 1") {{ index+1 }}
      p.description {{ script.attributes.description }}
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
    slug () {
      return this.script.meta.resourcePath.split('\\').pop().split('/').pop().split('.')[0]
    },
    permalink () {
      return `scripts/${this.slug()}`
    },
    thumbnailUrl () {
      return `/images/scripts/${this.slug()}/thumbnail.svg`
    },
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
    copyCode (script) {
      this.$store.dispatch('copyCode', script)
    },
  }
}
</script>

<style lang="scss" scoped>
  .script-item {
    background-color: #455C82;
    max-width: 355px;
    box-shadow: 0 0px 0px rgba(0,0,0,0.4);
    transition: box-shadow 0.2s ease-in-out;
    z-index: 10;
    transition: background-color .1s linear;

    &:hover {
      box-shadow: 0 7px 30px rgba(0,0,0,0.4);
      z-index: 100;
      background-color: rgb(52, 81, 128);
    }
  }
  .thumbnail {
    position: relative;
    width: 355px;
    height: 200px;

    .hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 50;
      background-color: hsla(0, 100%, 100%, 0);
      transition: background-color .1s linear;
    }

    &:hover {
      .hover {
        background-color: hsla(0, 100%, 100%, 0.2);
      }
    }
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
  .description {
    padding: 5px 30px 10px;
    line-height: 1.4em;
  }
</style>
