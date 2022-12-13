<template lang="pug">
.social-networks.relative.flex.justify-center.items-end
  img.ellipse-shadow(src="/common/ellipse-shadow.svg")
  .content.flex.flex-col.justify-center.items-center
    .links.w-full.flex.justify-center.items-center.relative
      a#youtube.cursor-pointer(href="https://www.youtube.com/channel/UCNAcWv6Eybjq7BCz7JHkxiw" target="_blank" @mouseover="hover('youtube')" @mouseleave="leave('youtube')")
      a#facebook.cursor-pointer.mx-4(href="https://www.facebook.com/dudintv" target="_blank" @mouseover="hover('facebook')" @mouseleave="leave('facebook')")
      a#linkedin.cursor-pointer(href="https://www.linkedin.com/in/dudintv" target="_blank" @mouseover="hover('linkedin')" @mouseleave="leave('linkedin')")
    span.mt-2.mb-10.font-bold dudin.tv
</template>

<script>
// import lottie from 'lottie-web'
const nuxtApp = useNuxtApp()

export default {
  data: () => ({
    youtube: null,
    facebook: null,
    linkedin: null,
    youtube_hover: false,
    facebook_hover: false,
    linkedin_hover: false,
  }),
  mounted() {
    this.youtube = this.loadLottie('youtube')
    this.facebook = this.loadLottie('facebook')
    this.linkedin = this.loadLottie('linkedin')
  },
  methods: {
    loadLottie(name) {
      const animation = nuxtApp.$lottie.loadAnimation({
        container: document.getElementById(name),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: `/animations/dudintv-${name}.json`,
      })
      animation.addEventListener('loopComplete', () => {
        if (!this[`${name}_hover`]) {
          animation.stop()
        }
      })
      return animation
    },
    hover(name) {
      this[name].play()
      this[`${name}_hover`] = true
    },
    leave(name) {
      this[`${name}_hover`] = false
    },
  },
}
</script>

<style lang="scss" scoped>
.social-networks {
  height: 300px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.052698) 17.71%,
    rgba(0, 0, 0, 0.196154) 34.9%,
    rgba(0, 0, 0, 0.5) 68.75%,
    rgba(0, 0, 0, 0.137363) 83.33%,
    rgba(0, 0, 0, 0.05) 90.62%,
    rgba(0, 0, 0, 0) 100%
  );
}
.links {
  a {
    width: 52px;
  }
}
.ellipse-shadow {
  width: 500px;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
}
</style>
