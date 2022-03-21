<template lang="pug">
  .content
    TheIntro
    .flex.items-center.justify-around.flex-wrap
      TheScriptsFilter.mx-4(@filterChanged="updateFilter")
      .flex.items-start.mx-4.mt-4
        img(src="~/static/images/common/copy.svg")
        span.mx-2 —
        span.leading-tight
          | one-click copying code.
          br
          i Be sure, you always
          br
          i get the latest version!
    section.flex.items-center.my-8
      .scripts-list
        ScriptItem(
          v-for="script in filteredScripts"
          :script="script"
          :key="script.attributes.title"
          )
    TheScriptsLogo
</template>

<script>
import TheIntro from '~/components/TheIntro'
import TheScriptsLogo from '~/components/scripts/TheScriptsLogo'
import TheScriptsFilter from '~/components/scripts/TheScriptsFilter'
import ScriptItem from '~/components/scripts/ScriptItem'
import TheSocNetworks from '~/components/TheSocNetworks'

export default {
  components: {
    TheIntro,
    TheScriptsLogo,
    TheScriptsFilter,
    ScriptItem,
    TheSocNetworks,
  },
  async asyncData () {
    const resolve = require.context('~/content/scripts/', true, /\.md$/)
    const imports = resolve.keys().map(key => {
      // const [, name] = key.match(/\/(.+)\.md$/)
      return resolve(key)
    })
    return {
      scripts: imports
    }
  },
  data: () => ({
    currentFilter: '',
    // scripts: [
    //   {
    //     name: 'AE to Vizrt',
    //     category: 'animation',
    //     description: 'For manual transfer animation from AE layers to Vizrt’s containers.',
    //     codes: [
    //       'global',
    //       'element',
    //       'buffer'
    //     ],
    //     thumbnail: '\\images\\thumbnails\\AEtoVizrt.svg'
    //   },
    //   {
    //     name: '9 part texture',
    //     category: 'texture',
    //     description: 'Script for stretching texture with saving size and quality of borders. It’s usefull for frames and shadows.',
    //     codes: [
    //       'global',
    //     ],
    //     thumbnail: '\\images\\thumbnails\\9partTexture.svg'
    //   },
    //   {
    //     name: 'Flex',
    //     category: 'position',
    //     description: 'Automatic aestetic placement of containers within certain area. Inspired by HTML/CSS flex.',
    //     codes: [
    //       'global',
    //     ],
    //     thumbnail: '\\images\\thumbnails\\Flex.svg'
    //   },
    // ]
  }),
  computed: {
    filteredScripts () {
      let filtered
      if (this.currentFilter && this.currentFilter !== 'all') {
        filtered = this.scripts.filter((script) => {
          return (script.attributes.category === this.currentFilter)
        })
      } else {
        filtered = this.scripts
      }
      return filtered
    }
  },
  methods: {
    updateFilter (filterName) {
      this.currentFilter = filterName
    },
  },
}
</script>

<style>
  .scripts-list {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 355px);
    grid-gap: .5rem;
    justify-content: center;
    width: 100%;
    max-width: 1500px;
  }
</style>
