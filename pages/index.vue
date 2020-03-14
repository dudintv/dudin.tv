<template lang="pug">
  .content
    TheIntro
    TheScriptsLogo
    section
</template>

<script>
import TheIntro from '~/components/TheIntro'
import TheScriptsLogo from '~/components/TheScriptsLogo'

export default {
  components: {
    TheIntro,
    TheScriptsLogo,
  }
}
</script>

<style>
  /* .content {
    position: relative;
  } */
</style>
