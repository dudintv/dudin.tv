<template lang="pug">
  #scripts-logo(ref="logo")
</template>

<script>
import lottie from 'lottie-web'

export default {
  mounted () {
    lottie.loadAnimation({
      container: document.getElementById('scripts-logo'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/script-logo.json'
    })
  }
}
</script>

<style>

</style>
