<template lang="pug">
.portfolio-item
  .item-content.relative(:class="mediaQueryClasses")
    .bg-container
      img.bg(v-if="!reverse" src="/common/project-bg-left.svg" :class="mediaQueryClassesWithReverse")
      img.bg(v-if="reverse" src="/common/project-bg-right.svg" :class="mediaQueryClassesWithReverse")
    .content(:class="mediaQueryClassesWithReverse")
      .description.relative(:class="mediaQueryClasses")
        .flag(ref="flag" :class="mediaQueryClassesWithReverse")
        .text(:class="mediaQueryClassesWithReverse")
          slot
      MediaImage.z-10(v-if="image" :name="imagePath" :isFullPath="true" :width="650")
      MediaYoutube.z-10(v-if="youtube" :url="youtube" :width="youtubeWidth")
</template>

<script>
// import lottie from 'lottie-web'

export default {
  props: {
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
  },
  data() {
    return {
      youtubeWidth: 650,
      mediaQueryClasses: '',
    }
  },
  computed: {
    mediaQueryClassesWithReverse() {
      const reverse = this.reverse ? 'reverse' : ''
      return `${reverse} ${this.mediaQueryClasses}`
    },
    imagePath() {
      return `/images${this.id}/${this.image}`
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.windowSizeChanged)
      this.windowSizeChanged()
    })

    const animationFile = this.reverse
      ? 'project-flag-right.json'
      : 'project-flag-left.json'

    lottie
      .loadAnimation({
        container: this.$refs.flag,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `/animations/${animationFile}`,
      })
      .setSpeed(2)
  },
  methods: {
    windowSizeChanged() {
      if (document.body.clientWidth < 900) {
        this.youtubeWidth = 0.8 * document.body.clientWidth
        this.mediaQueryClasses = 'upto-900'
      } else if (document.body.clientWidth < 1240) {
        this.youtubeWidth = 500
        this.mediaQueryClasses = 'upto-1240'
      } else {
        this.youtubeWidth = 650
        this.mediaQueryClasses = ''
      }
    },
  },
}
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
  @apply absolute z-0 right-0;

  width: 550px;
  top: -240px;

  &.reverse {
    left: 0;
    top: -160px;
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
    top: -320px;

    &.reverse {
      width: 110vw;
      top: -210px;
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
