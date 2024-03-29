<template>
  <div class="portfolio-item">
    <div class="item-content relative" :class="mediaQueryClasses">
      <div class="bg-container">
        <img class="bg" v-if="!reverse" src="/common/project-bg-left.svg" :class="mediaQueryClassesWithReverse" /><img
          class="bg"
          v-if="reverse"
          src="/common/project-bg-right.svg"
          :class="mediaQueryClassesWithReverse"
        />
      </div>
      <div class="content" :class="mediaQueryClassesWithReverse">
        <div class="description relative" :class="mediaQueryClasses">
          <div class="flag" ref="flag" :class="mediaQueryClassesWithReverse"></div>
          <div class="text" :class="mediaQueryClassesWithReverse">
            <slot></slot>
          </div>
        </div>
        <MediaImage class="z-10" v-if="image" :name="imagePath" :isFullPath="true" :width="650"></MediaImage>
        <MediaYoutube class="z-10" v-if="youtube" :url="youtube" :width="youtubeWidth"></MediaYoutube>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
import { useWindowSize } from '@/composables/windowSize';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  youtube: {
    type: String,
    default: '',
    required: false,
  },
  image: {
    type: String,
    default: '',
    required: false,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});

const flag = ref('');
const youtubeWidth = ref(650);
const mediaQueryClasses = ref('');
const { windowSizeChanged } = useWindowSize({ youtubeWidth, mediaQueryClasses });

const mediaQueryClassesWithReverse = computed(() => `${props.reverse ? 'reverse' : ''} ${mediaQueryClasses.value}`);

const imagePath = computed(() => `/images${props.id}/${props.image}`);

onMounted(() => {
  nextTick(() => {
    window.addEventListener('resize', windowSizeChanged);
    windowSizeChanged();
  });

  const animationFile = `project-flag-${props.reverse ? 'right' : 'left'}.json`;

  nuxtApp.$lottie
    .loadAnimation({
      container: flag.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `/animations/${animationFile}`,
    })
    .setSpeed(2);
});
</script>

<style lang="scss" scoped>
.portfolio-item {
  @apply w-full mb-2;
}

@media (max-width: 900px) {
  .portfolio-item {
    @apply mb-8;
  }
}

h3 {
  @apply mt-1 mb-2;
}

.item-content {
  @apply mx-auto mt-16 w-full;
  width: 90vw;
  max-width: 1200px;

  &.upto-900 {
    @apply w-full;
  }
}

.bg {
  @apply absolute z-0 top-0 bottom-0 left-0 right-0 mx-auto;
  width: 80%;
  transform: translateY(-20%);
  top: 120px;

  &.upto-1240 {
    transform: translateY(-30%);

    &.reverse {
      transform: translateY(-20%);
    }
  }

  &.upto-900 {
    width: 200%;
    transform: translateX(20%) translateY(30%);

    &.reverse {
      transform: translateX(-20%) translateY(50%);
    }
  }
}

.bg-container {
  @apply absolute w-full overflow-hidden;
  height: 150%;
  padding-top: 50px;
  top: -100px;
}

.content {
  @apply relative flex items-center justify-center w-full;

  &.reverse {
    @apply flex-row-reverse;
  }

  &.upto-900 {
    @apply flex-col;
  }
}

.description {
  @apply w-full;
}

.flag {
  max-width: 100wv;
  @apply absolute z-0 right-0;

  width: 550px;
  top: -240px;

  &.reverse {
    left: 0;
    top: -200px;
  }

  &.upto-1240 {
    width: 470px;
    top: -205px;

    &.reverse {
      left: 0;
      top: -100px;
    }
  }

  &.upto-900 {
    width: 114vw;
    top: -260px;

    &.reverse {
      width: 110vw;
      top: -190px;
      left: 0;
    }
  }
}

@media (max-width: 550px) {
  .flag.upto-900 {
    top: -180px;
  }
}

@media (max-width: 450px) {
  .flag.upto-900 {
    top: -140px;
  }
}

@media (max-width: 370px) {
  .flag.upto-900 {
    top: -100px;
  }
}

.text {
  @apply relative ml-auto pl-40 pr-8;
  margin-bottom: 3vw;
  top: -30px;

  &.reverse {
    @apply ml-0 mr-auto pl-8 pr-40;
    top: 0;
  }

  &.upto-1240 {
    @apply ml-auto pl-32 pr-8;
    width: 470px;
    top: -30px;

    &.reverse {
      @apply ml-0 mr-auto pl-8 pr-24;
      top: -10px;
    }
  }

  &.upto-900 {
    padding-left: 25vw;
    padding-right: 25vw;
    top: 0;
  }
}
</style>
