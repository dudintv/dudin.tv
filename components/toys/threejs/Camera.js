import Toy from './Toy.js'

export default class Camera {
  constructor() {
    this.toy = new Toy()
    this.sizes = this.toy.sizes
    this.scene = this.toy.scene
    this.canvas = this.toy.canvas

    this.setInstance()
  }

  setInstance() {
    const THREE = self.THREE
    this.instance = new THREE.PerspectiveCamera(
      50,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    )
    this.instance.position.z = 3
    this.scene.add(this.instance)
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }
}
