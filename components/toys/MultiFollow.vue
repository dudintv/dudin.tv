<template>
  <div>
    <canvas id="multi-follow" ref="canvas" style="width: 100%" height="1" />
  </div>
</template>

<script>
import Toy from './threejs/Toy.js'

export default {
  data() {
    return {
      isThreejsLoaded: false,
      isDragControlsLoaded: false,
      isGuiLoaded: false,
    }
  },
  watch: {
    isThreejsLoaded() {
      this.startThreejs()
    },
    isDragControlsLoaded() {
      this.startThreejs()
    },
    isGuiLoaded() {
      this.startThreejs()
    },
  },
  mounted() {
    this.startThreejs()
  },
  methods: {
    startThreejs() {
      if (!window.THREE || !window.THREE.DragControls || !window.lil) {
        return
      }

      const toy = new Toy(this.$refs.canvas)
      console.log('toy =', toy)
    },
  },
  head() {
    return {
      script: [
        {
          hid: 'threejs',
          src: 'https://unpkg.com/three@0.142.0/build/three.js',
          async: false,
          callback: () => {
            this.isThreejsLoaded = true

            const script = document.createElement('script')
            script.onload = () => {
              this.isDragControlsLoaded = true
            }
            script.src =
              'https://unpkg.com/three@0.142.0/examples/js/controls/DragControls.js'
            script.async = false
            document.body.appendChild(script)
          },
        },
        {
          hid: 'GUI',
          src: 'https://cdn.jsdelivr.net/npm/lil-gui@0.16',
          defer: true,
          callback: () => {
            this.isGuiLoaded = true
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
