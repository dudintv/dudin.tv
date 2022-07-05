<template>
  <div>
    <canvas id="multi-follow" ref="canvas" style="width:100%; height: 100%;" />
  </div>
</template>

<script>
import * as THREE from 'three'
import * as dat from 'lil-gui'
import { DragControls } from 'three/examples/jsm/controls/DragControls'

const gui = new dat.GUI()

export default {
  mounted() {
    const canvas = this.$refs.canvas
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    const sizes = {
      width: 800,
      height: 300,
    }
    renderer.setSize(sizes.width, sizes.height)

    const scene = new THREE.Scene()

    const geometry = new THREE.BoxGeometry(3, 0.4, 0.04)
    const material = new THREE.MeshBasicMaterial({ color: 0x00aa88 })
    const sourceRect1 = new THREE.Mesh(geometry, material)
    const sourceRect2 = new THREE.Mesh(geometry, material)
    sourceRect1.position.y = 0.3
    sourceRect2.position.y = -0.3
    scene.add(sourceRect1)
    scene.add(sourceRect2)
    gui.add(sourceRect1.position, 'x', -3, 3)
    gui.add(sourceRect2.position, 'x', -3, 3)

    const targetGeometry = new THREE.BoxGeometry(1.2, 1.2, 0.04)
    const targetMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff })
    const targetRect = new THREE.Mesh(targetGeometry, targetMaterial)
    scene.add(targetRect)

    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
    camera.position.z = 3
    scene.add(camera)

    const controls = new DragControls(
      [sourceRect1, sourceRect2],
      camera,
      renderer.domElement
    )
    console.log('controls =', controls)

    // const clock = new THREE.Clock()

    const tick = () => {
      // const elapsedTime = clock.getElapsedTime()
      // sourceRect1.rotation.x = elapsedTime

      const bbox1 = new THREE.Box3().setFromObject(sourceRect1)
      const bbox2 = new THREE.Box3().setFromObject(sourceRect2)
      targetRect.position.x =
        Math.max(bbox1.max.x, bbox2.max.x) +
        targetRect.geometry.parameters.width / 2

      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()
  },
}
</script>

<style lang="scss" scoped></style>
