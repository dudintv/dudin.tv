<template>
  <div>
    <canvas id="multi-follow" ref="canvas" style="width: 100%; height: 100%" />
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

      // const THREE = window.THREE

      // const scene = new THREE.Scene()

      // const canvas = this.$refs.canvas
      // const renderer = new THREE.WebGLRenderer({
      //   canvas,
      //   antialias: true,
      //   alpha: true,
      // })
      // const sizes = {
      //   width: 800,
      //   height: 300,
      // }
      // renderer.setSize(sizes.width, sizes.height)

      // const GUI = new window.lil.GUI()
      // const toy = new Toy(this.$refs.canvas)

      // const THREE = window.THREE
      // const geometry = new THREE.BoxGeometry(3, 0.4, 0.04)
      // const material = new THREE.MeshBasicMaterial({ color: 0x00aa88 })
      // const sourceRect1 = new THREE.Mesh(geometry, material)
      // const sourceRect2 = new THREE.Mesh(geometry, material)
      // sourceRect1.position.y = 0.3
      // sourceRect2.position.y = -0.3
      // toy.add(sourceRect1)
      // toy.add(sourceRect2)

      // GUI.add(sourceRect1.position, 'x', -3, 3)
      // GUI.add(sourceRect2.position, 'x', -3, 3)

      // const targetGeometry = new THREE.BoxGeometry(1.2, 1.2, 0.04)
      // const targetMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff })
      // const targetRect = new THREE.Mesh(targetGeometry, targetMaterial)
      // toy.add(targetRect)

      // const camera = new THREE.PerspectiveCamera(
      //   45,
      //   toy.sizes.width / toy.sizes.height
      // )
      // camera.position.z = 3
      // toy.add(camera)

      // const controls = new THREE.DragControls(
      //   [sourceRect1, sourceRect2],
      //   camera,
      //   toy.renderer.domElement
      // )
      // console.log('controls =', controls)

      // const tick = () => {
      //   const bbox1 = new THREE.Box3().setFromObject(sourceRect1)
      //   const bbox2 = new THREE.Box3().setFromObject(sourceRect2)
      //   targetRect.position.x =
      //     Math.max(bbox1.max.x, bbox2.max.x) +
      //     targetRect.geometry.parameters.width / 2

      //   toy.renderer.render(scene, camera)
      //   window.requestAnimationFrame(tick)
      // }

      // tick()
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
            console.log('------------> THREE IS LOADED ;)')
            this.isThreejsLoaded = true

            const script = document.createElement('script')
            script.onload = () => {
              console.log('------------> DragControls IS LOADED ;)')
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
            console.log('------------> GUI IS LOADED ;)')
            this.isGuiLoaded = true
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
