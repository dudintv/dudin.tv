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
</template>

<script>
import TheIntro from '~/components/TheIntro'
import TheScriptsLogo from '~/components/TheScriptsLogo'
import TheScriptsFilter from '~/components/TheScriptsFilter'

export default {
  components: {
    TheIntro,
    TheScriptsLogo,
    TheScriptsFilter,
  }
}
</script>

<style>
  /* .content {
    position: relative;
  } */
</style>
