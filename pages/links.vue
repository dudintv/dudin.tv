<template lang="pug">
.links-page.container.mx-auto.mb-32
  #links-bg-container
    #links-bg(ref="linksBackground")
  .content
    h2.text-left Download Free VizArtist
    p
      a(href="https://www.vizrt.com/campaign/free-viz-artist/" target="_blank") Official Vizrt Download page
      br
      i.opacity-50 Here you have to fill in a short form to download the free version of Viz Artist.
    h2.text-left.mt-8 Vizrt lessons
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
      br
      a(href="https://marketplace.visualstudio.com/items?itemName=fhareide.vizscript") VSCode plugin
      |  for vizrt-scripts highlighting.
    small.opacity-50.my-4
      | If some link doesn’t work, please let me know
      |
      a(href="https://www.facebook.com/dudintv" target="_blank") facebook.com/dudintv
</template>

<script setup lang="ts">
import { AnimationItem } from 'lottie-web';
const nuxtApp = useNuxtApp();

const rockPlayer = ref<AnimationItem | null>(null);
const linksBackground = ref<HTMLElement | null>(null);

watch(linksBackground, () => {
  if (!linksBackground.value) return;

  rockPlayer.value = nuxtApp.$lottie
    .loadAnimation({
      container: linksBackground.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/bg-rock.json',
      speed: 500,
    })
    .setSpeed(3);
});

onUnmounted(() => {
  rockPlayer.value?.destroy?.();
});
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

#links-bg-container {
  position: absolute;
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
  z-index: 0;
}

#links-bg {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
}

@media (max-width: 700px) {
  #links-bg {
    width: 180%;
  }
}

@media (max-width: 400px) {
  #links-bg {
    width: 200%;
  }
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
