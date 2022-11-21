import Toy from './Toy.js'
// import Environment from './Environment.js'

export default class World {
  constructor() {
    this.toy = new Toy()
    this.scene = this.toy.scene
    this.debug = this.toy.debug
    this.camera = this.toy.camera
    this.renderer = this.toy.renderer

    this.items = {}

    const THREE = window.THREE

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(ambientLight)

    // const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 3, 1.5, 0.5)
    // rectAreaLight.position.x = -0.2
    // rectAreaLight.position.z = 0.2
    // rectAreaLight.castShadow = true
    // this.scene.add(rectAreaLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(-0.2, 0.3, 2)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    console.log('directionalLight.shadow =', directionalLight.shadow)
    this.scene.add(directionalLight)

    const directionalLightHelper = new THREE.DirectionalLightHelper(
      directionalLight,
      0.2
    )
    this.scene.add(directionalLightHelper)
  }

  update() {}
}
