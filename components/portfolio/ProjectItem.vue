<template lang="pug">
  .portfolio-item.w-full.mb-16
    .item-content.relative
      img.bg(v-if="!reverse" src="~/static/images/common/project-bg-left.svg")
      img.bg(v-if="reverse" src="~/static/images/common/project-bg-right.svg")
      .content(:class="{'flex-row-reverse': this.reverse}")
        .description.relative(:class="{'description-reverse': this.reverse}")
          .flag(ref="flag")
          .text(:class="{'text-reverse': this.reverse}")
            slot
        MediaYoutube.youtube(:url="youtube" :width="500")
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
  mounted () {
    const animationFile = this.reverse ? 'project-flag-right.json' : 'project-flag-left.json'

    lottie.loadAnimation({
      container: this.$refs.flag,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `/animations/${animationFile}`
    })
  }
}
</script>

<style lang="scss" scoped>
  .item-content {
    @apply mx-auto;
    width: 90vw;
    max-width: 1200px;
  }

  .bg {
    @apply absolute z-0 top-0 bottom-0 left-0 right-0 mx-auto;
    // margin: -5rem;
    transform: translateY(-40px);
  }

  .content {
    @apply relative flex items-center justify-center pl-16;
  }

  .description {
    min-width: 430px;
  }

  .description-reverse {
    top: 30px;
  }

  .flag {
    position: relative;
    top: -64px;
  }

  .text {
    position: absolute;
    top: 200px;
    left: 100px;
    transform: translateY(-60%);
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .text-reverse {
    top: 150px;
    left: 20px;
    padding-right: 100px;
  }

  @media (max-width: 1050px) {
    .item-content {
      @apply mx-0;
    }

    .flag {
      top: -32px;
    }

    .description-reverse {
      .flag {
        top: -64px;
      }
    }
  }

  @media (max-width: 970px) {

  }
</style>
