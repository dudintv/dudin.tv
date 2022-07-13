<template>
  <div>
    <canvas id="multi-follow" ref="canvas" style="width: 100%" height="1" />
  </div>
</template>

<script>
import Toy from './threejs/Toy.js'

let THREE = null

export default {
  data() {
    return {
      isThreejsLoaded: false,
      isDragControlsLoaded: false,
      isGuiLoaded: false,
      items: {},
      clock: null,
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

      THREE = window.THREE
      const toy = new Toy(this.$refs.canvas)

      const geometry = new THREE.BoxGeometry(2, 0.45, 0.04)
      const material = new THREE.MeshBasicMaterial({ color: 0x00aa88 })
      this.items.sourceRect1 = new THREE.Mesh(geometry, material)
      this.items.sourceRect2 = new THREE.Mesh(geometry, material)
      this.items.sourceRect1.position.y = 0.25
      this.items.sourceRect2.position.x = -0.3
      this.items.sourceRect2.position.y = -0.25
      toy.add(this.items.sourceRect1)
      toy.add(this.items.sourceRect2)

      const controls = new THREE.DragControls(
        [this.items.sourceRect2],
        toy.camera.instance,
        toy.renderer.instance.domElement
      )
      console.log('controls =', controls)

      const targetGeometry = new THREE.BoxGeometry(1.2, 1.2, 0.04)
      const targetMaterial = new THREE.MeshBasicMaterial({ color: 0x0066ff })
      this.items.targetRect = new THREE.Mesh(targetGeometry, targetMaterial)
      toy.add(this.items.targetRect)

      this.clock = new THREE.Clock()
      toy.onUpdate(() => {
        this.updateAnimationOne()
        this.updateMultiFollow()
      })
    },
    updateAnimationOne() {
      const elapsedTime = this.clock.getElapsedTime()
      this.items.sourceRect1.position.x = 0.1 * Math.cos(elapsedTime * 2) - 0.3
    },
    updateMultiFollow() {
      const bbox1 = new THREE.Box3().setFromObject(this.items.sourceRect1)
      const bbox2 = new THREE.Box3().setFromObject(this.items.sourceRect2)
      this.items.targetRect.position.x =
        Math.max(bbox1.max.x, bbox2.max.x) +
        this.items.targetRect.geometry.parameters.width / 2
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
