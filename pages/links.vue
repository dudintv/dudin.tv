<template lang="pug">
  .links-page.conatiner.mx-auto
    #links-bg
    .content
      h2.text-left Vizrt lessons
      p
        | Official, by Vizrt —&nbsp;
        a(href="http://vizuniversity.learnupon.com" target="_blank") vizuniversity.learnupon.com
        br
        | tutsGFX —&nbsp;
        a(href="http://tutsgfx.com/free-vizrt-training" target="_blank") tutsgfx.com/free-vizrt-training
      h2.text-left.mt-8 Vizrt scripts
      p
        a(href="http://erizos.tv/scripts" target="_blank") erizos.tv/scripts
        br
        a(href="http://viztoolkit.com" target="_blank") viztoolkit.com
      h2.text-left.mt-8 Vizrt tools
      p
        a(href="https://idonix.com/graphics/viz-script-notepadplusplus?fbclid=IwAR0HiX_9Z-TkM5fAKYg4tqpVzUarByCZqlLeJ7ysaNpTfpCbfTfuIVwEsSw" target="_blank") IDONIX Notepad++ conector for scripting
        br
        | VBN Converter —
        a(href="https://app.box.com/s/i8e6djm6moewtxfu550c848052bouri2" target="_blank") Viz Image Converter 3.0.0.14629
      small
        | If some link doesn’t work, please let me know facebook.com/dudintv
</template>

<script>
import lottie from 'lottie-web'

export default {
  mounted () {
    lottie.loadAnimation({
      container: document.getElementById('links-bg'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/bg-rock.json',
      speed: 500,
    }).setSpeed(3)
  }
}
</script>

<style lang="scss" scoped>
  .links-page {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: -10%;
    margin-bottom: -10%;
  }

  #links-bg {
    position: absolute;
    top: 5vw;
    width: 100%;
  }

  .content {
    // position: absolute;
    top: 5vw;
    display: flex;
    flex-direction: column;
    z-index: 100;
    padding: 0 1rem;
  }
</style>
