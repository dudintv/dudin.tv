<template lang="pug">
  .portfolio-item.w-full.overflow-hidden
    .item-content.relative.mt-8.mb-16.mx-auto
      .bg(ref="bg")
      .content
        MediaYoutube.youtube(:url="youtube" :width="500")
        .description.flex
          .text
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
  mounted () {
    lottie.loadAnimation({
      container: this.$refs.bg,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/portfolio-bg.json'
    })
    // lottie.loadAnimation({
    //   container: this.$refs.flag,
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: '/animations/portfolio-flag.json'
    // })
  }
}
</script>

<style lang="scss" scoped>
  .item-content {
    width: 90vw;
    max-width: 1200px;
  }

  .bg {
    @apply absolute z-0 top-0 bottom-0 left-0 right-0;
    margin: -5rem;
    transform: translateX(5%);
  }

  .content {
    @apply relative flex items-center justify-center pl-16;
  }

  .text {
    padding-left: 3vw;
    padding-right: 3vw;
  }

  @media (max-width: 1150px) {
    .bg {
      margin: 0rem;
      transform: translateY(22%) translateX(-5vw);
      min-width: 1100px;
    }

    .content {
      @apply flex-col w-4_5 mx-auto pl-0 items-start;
    }

    .text {
      @apply pl-0;
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    .bg {
      transform: translateY(22%) translateX(-20%);
    }
  }
</style>
