<template>
  <div class="portfolio-item">
    <div class="item-content" :class="mediaQueryClasses">
      <div class="content" :class="mediaQueryClasses">
        <MediaYoutube class="z-10" :url="youtube" :width="youtubeWidth"></MediaYoutube>
        <div class="description" :class="mediaQueryClasses">
          <div class="flag-container">
            <div class="flag" ref="flag" :class="mediaQueryClasses" :style="flagStyle"></div>
          </div>
          <div class="text-container">
            <div class="text" ref="text" :class="mediaQueryClasses">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
import { useWindowSize } from '@/composables/windowSize';

defineProps({
  youtube: {
    type: String,
    required: true,
  },
});

const flag = ref('');
const youtubeWidth = ref(650);
const mediaQueryClasses = ref('');
const flagStyle = ref('');
const { windowSizeChanged } = useWindowSize({ youtubeWidth, mediaQueryClasses, flagStyle });

onMounted(() => {
  nextTick(() => {
    window.addEventListener('resize', windowSizeChanged);
    windowSizeChanged();
  });
  nuxtApp.$lottie
    .loadAnimation({
      container: flag.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/project-flag-right.json',
    })
    .setSpeed(2);
});
</script>

<style lang="scss" scoped>
.portfolio-item {
  @apply w-full;
}

h3 {
  @apply mt-1 mb-2;
}

.item-content {
  @apply relative mx-auto;
  max-width: 1200px;
}

.bg-container {
  width: 100vw;
  overflow: hidden;
  @apply absolute z-0 top-0 bottom-0 left-0 right-0;
  transform: translateX(-5%);
  margin: -6rem;
}

.bg {
  width: 140%;
}

@media (max-width: 900px) {
  .bg-container {
    width: 150%;
    transform: translateY(-25%);
    visibility: hidden;
  }
}

.content {
  @apply relative flex items-center justify-center pl-16;

  &.upto-900 {
    @apply flex-col p-0 w-full;
  }
}

.description {
  @apply relative w-full;
}

.flag-container {
  @apply relative top-0 left-0 z-0 overflow-hidden;
}

.flag {
  width: 600px;
  transform: translateY(-40px);

  &.upto-1240 {
    width: 480px;
    transform: translateY(-30px);
  }

  &.upto-900 {
    @apply absolute;
    top: auto;
    width: 170%;
    bottom: -55vw;
  }
}

@media (max-width: 400px) {
  .flag-container {
    width: 100vw;
    bottom: -90vw;
    // padding-bottom: 100%;
  }
}

.text {
  @apply absolute left-0 z-10;
  top: 110px;
  padding-left: 40px;
  padding-right: 40px;
  width: 500px;

  &.upto-1240 {
    top: 80px;
    width: 400px;
    font-size: 0.8rem;
  }
}

@media (max-width: 900px) {
  .text-container {
    @apply relative w-full;
    top: -4rem;
    background: linear-gradient(57.8deg, #4421c9 1.82%, #2b69d0 95.41%);
    padding: 4rem 0 2rem 0;
  }

  .text {
    @apply relative mx-auto;
    width: 90vw;
    top: 0;
  }
}
</style>
