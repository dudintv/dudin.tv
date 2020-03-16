<template lang="pug">
  .content
    TheIntro
    TheScriptsLogo
    .flex.justify-around
      TheScriptsFilter
      .flex.items-start
        img(src="~/static/images/common/copy.svg")
        span.mx-2 —
        span.leading-tight
          | one-click copying code.
          br
          i Be sure, you always
          br
          i get the latest version!
    section
      ScriptItem(v-for="script in scripts" :script="script" :key="script.name")
</template>

<script>
import TheIntro from '~/components/TheIntro'
import TheScriptsLogo from '~/components/TheScriptsLogo'
import TheScriptsFilter from '~/components/TheScriptsFilter'
import ScriptItem from '~/components/ScriptItem'

export default {
  components: {
    TheIntro,
    TheScriptsLogo,
    TheScriptsFilter,
    ScriptItem,
  },
  data: () => ({
    scripts: [
      {
        name: 'AE to Vizrt',
        category: 'animation',
        description: 'For manual transfer animation from AE layers to Vizrt’s containers.',
        codes: [
          'global',
          'element',
          'buffer'
        ],
        thumbnail: '\\images\\thumbnails\\AEtoVizrt.svg'
      },
      {
        name: '9 part texture',
        category: 'texture',
        description: 'Script for stretching texture with saving size and quality of borders. It’s usefull for frames and shadows.',
        codes: [
          'global',
        ],
        thumbnail: '\\images\\thumbnails\\9partTexture.svg'
      },
      {
        name: 'Flex',
        category: 'position',
        description: 'Automatic aestetic placement of containers within certain area. Inspired by HTML/CSS flex.',
        codes: [
          'global',
        ],
        thumbnail: '\\images\\thumbnails\\Flex.svg'
      }
    ]
  })
}
</script>

<style>
  /* .content {
    position: relative;
  } */
</style>
