<template lang="pug">
  .portfolio-item.w-full.pt-2.pb-12
    .item-content(:class="mediaQueryClasses")
      //- .bg-container
      //-   .bg(ref="bg" :class="mediaQueryClasses")
      .content(:class="mediaQueryClasses")
        MediaYoutube.z-10(:url="youtube" :width="youtubeWidth")
        .description(:class="mediaQueryClasses")
          .flag(ref="flag" :class="mediaQueryClasses" :style="flagStyle")
          .text(ref="text" :class="mediaQueryClasses")
            slot
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
    }
  },
  data () {
    return {
      youtubeWidth: 650,
      mediaQueryClasses: '',
      flagStyle: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.windowSizeChanged)
      this.windowSizeChanged()
    })

    // lottie.loadAnimation({
    //   container: this.$refs.bg,
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: '/animations/portfolio-bg.json'
    // })
    lottie.loadAnimation({
      container: this.$refs.flag,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/project-flag-right.json'
    }).setSpeed(2)
  },
  methods: {
    windowSizeChanged () {
      if (document.body.clientWidth < 900) {
        this.youtubeWidth = 0.8 * document.body.clientWidth
        this.mediaQueryClasses = 'upto-900'
        this.flagStyle = 'width: ' + (1 / document.body.clientWidth) ** 0.2 * 4000.0 + 'px'
      } else if (document.body.clientWidth < 1240) {
        this.youtubeWidth = 500
        this.mediaQueryClasses = 'upto-1240'
        this.flagWidthStyle = ''
      } else { // document.body.clientWidth > 1240
        this.youtubeWidth = 650
        this.mediaQueryClasses = ''
        this.flagWidthStyle = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    @apply mt-1 mb-2;
  }

  .item-content {
    @apply relative mx-auto;
    max-width: 1200px;
    // left: 30px;

    // &.upto-1240, &.upto-900 {
    //   left: 0;
    // }

    &.upto-900 {
      @apply mb-24;
    }
  }

  .bg-container {
    width: 100vw;
    overflow: hidden;
  }

  .bg {
    @apply absolute z-0 top-0 bottom-0 left-0 right-0;
    margin: -6rem;
    transform: translateX(-5%);
    width: 140%;
    overflow: hidden;

    &.upto-900 {
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

    // &.upto-900 {
    //   overflow: hidden;
    // }
  }

  .flag {
    @apply relative top-0 left-0 z-0;
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
      // transform: translateY(50px);
      bottom: -47vw;
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

    &.upto-900 {
      @apply relative mx-auto;
      top: 30px;
      width: 90vw;
    }
  }
</style>
