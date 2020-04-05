<template lang="pug">
  .portfolio-item.w-full.mb-16
    .item-content.relative(:class="mediaQueryClasses")
      img.bg(v-if="!reverse" src="~/static/images/common/project-bg-left.svg" :class="mediaQueryClassesWithReverse")
      img.bg(v-if="reverse" src="~/static/images/common/project-bg-right.svg" :class="mediaQueryClassesWithReverse")
      .content(:class="mediaQueryClassesWithReverse")
        .description.relative(:class="mediaQueryClasses")
          .flag(ref="flag" :class="mediaQueryClassesWithReverse")
          .text(:class="mediaQueryClassesWithReverse")
            slot
        MediaYoutube.z-10(:url="youtube" :width="youtubeWidth")
</template>

<script>
import lottie from 'lottie-web'
import MediaYoutube from '~/components/media/MediaYoutube'

export default {
  components: {
    MediaYoutube,
  },
  props: {
    youtube: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      youtubeWidth: 650,
      mediaQueryClasses: '',
    }
  },
  computed: {
    mediaQueryClassesWithReverse () {
      const reverse = this.reverse ? 'reverse' : ''
      return `${reverse} ${this.mediaQueryClasses}`
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.windowSizeChanged)
      this.windowSizeChanged()
    })

    const animationFile = this.reverse ? 'project-flag-right.json' : 'project-flag-left.json'

    lottie.loadAnimation({
      container: this.$refs.flag,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `/animations/${animationFile}`
    })
  },
  methods: {
    windowSizeChanged () {
      if (document.body.clientWidth < 900) {
        this.youtubeWidth = 0.8 * document.body.clientWidth
        this.mediaQueryClasses = 'upto-900'
      } else if (document.body.clientWidth < 1240) {
        this.youtubeWidth = 500
        this.mediaQueryClasses = 'upto-1240'
      } else { // document.body.clientWidth > 1240
        this.youtubeWidth = 650
        this.mediaQueryClasses = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .item-content {
    @apply mx-auto my-16 w-full;
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
      top: -180px;
    }

    &.upto-1240 {
      width: 470px;
      top: -205px;

      &.reverse {
        left: 0;
        top: -145px;
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

  .text {
    @apply relative ml-auto pl-40 pr-8;
    margin-bottom: 5vw;
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

    &.reverse {

    }
  }
</style>
