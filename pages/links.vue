<template>
  <div class="links-page container mx-auto mb-32">
    <div id="links-bg-container">
      <div id="links-bg" ref="linksBackground"></div>
    </div>
    <div class="content">
      <!-- <h2 class="text-left">Download Free VizArtist</h2>
      <p>
        <a href="https://www.vizrt.com/campaign/free-viz-artist/" target="_blank">Official Vizrt Download page</a>
        <br />
        <i class="opacity-50"> Here you have to fill in a short form to download the free version of Viz Artist. </i>
      </p> -->
      <h2 class="text-left">Vizrt Resources</h2>
      <p>
        <a href="https://forum.vizrt.com" target="_blank">Vizrt Forum</a>
        <br />
        <i class="opacity-50"> To find detailed answer to almost any question.</i>
      </p>
      <p>
        <a href="https://www.facebook.com/groups/VizArtistDesigners" target="_blank"
          >Facebook Viz Artist Designers group</a
        >
        <br />
        <i class="opacity-50"> To quickly ask questions about Vizrt products.</i>
      </p>
      <p>
        <a href="https://license.vizrt.com/" target="_blank">Vizrt License Portal</a>
        <br />
        <i class="opacity-50"> To manage (update) your Vizrt licenses.</i>
      </p>
      <p>
        <a href="https://ideas.vizrt.com/" target="_blank">Vizrt Ideas Portal</a>
        <br />
        <i class="opacity-50"> To suggest your idea and support others.</i>
      </p>
      <h2 class="text-left mt-8">Vizrt lessons</h2>
      <p>
        Official, by Vizrt —&nbsp;<a href="http://vizuniversity.learnupon.com" target="_blank">
          vizuniversity.learnupon.com
        </a>
        <br />
        tutsGFX —&nbsp;<a href="http://tutsgfx.com/free-vizrt-training" target="_blank">
          tutsgfx.com/free-vizrt-training
        </a>
      </p>
      <h2 class="text-left mt-8">Vizrt scripts</h2>
      <p>
        <a href="http://erizos.tv/scripts" target="_blank">erizos.tv/scripts</a><br /><a
          href="http://viztoolkit.com"
          target="_blank"
        >
          viztoolkit.com
        </a>
      </p>
      <h2 class="text-left mt-8">Vizrt tools</h2>
      <p>
        <a
          href="https://idonix.com/graphics/viz-script-notepadplusplus?fbclid=IwAR0HiX_9Z-TkM5fAKYg4tqpVzUarByCZqlLeJ7ysaNpTfpCbfTfuIVwEsSw"
          target="_blank"
        >
          IDONIX Notepad++ connector for scripting
        </a>
        <br />
        VBN Converter —<a href="https://app.box.com/s/i8e6djm6moewtxfu550c848052bouri2" target="_blank">
          Viz Image Converter 3.0.0.14629
        </a>
        <br />
        <a href="https://marketplace.visualstudio.com/items?itemName=fhareide.vizscript">VSCode plugin</a>
        for vizrt-scripts highlighting.
      </p>

      <h2 class="text-left mt-8">Secret documentations</h2>
      <p>
        <a href="https://disk.yandex.ru/i/HYQigK-AwT8P2A">Viz External commands Manual</a> with a lot of examples of the
        VizEngine console commands
        <br />
        Detailed <a href="https://disk.yandex.ru/i/t4Qpca-KoIWyPA">Dexter documentation</a> with examples
      </p>

      <small class="opacity-50 my-4">
        If some link doesn’t work, please let me know
        <a href="https://www.facebook.com/dudintv" target="_blank">facebook.com/dudintv</a></small
      >
    </div>
  </div>
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
  top: 5vw;
  display: flex;
  flex-direction: column;
  z-index: 100;
  padding: 0 1rem;
  margin-bottom: 10rem;
}
</style>
