<template lang="pug">
  .scripts-logo-container.relative
    .back-space
    #scripts-logo
    img.ellipse-shadow(src="~/static/images/common/ellipse-shadow.svg")
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
  .back-space {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(179.4deg, rgba(73, 35, 54, 0) 1.48%, rgba(39, 6, 22, 0.77) 53.55%, rgba(48, 14, 30, 0.67) 67.2%, rgba(64, 30, 46, 0.478571) 74.27%, rgba(61, 29, 44, 0.287143) 80.84%, rgba(63, 29, 45, 0) 98.54%);
    mix-blend-mode: luminosity;
  }
</style>
