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
    const geometry = new THREE.BoxGeometry(3, 0.4, 0.04)
    const material = new THREE.MeshBasicMaterial({ color: 0x00aa88 })
    this.items.sourceRect1 = new THREE.Mesh(geometry, material)
    this.items.sourceRect2 = new THREE.Mesh(geometry, material)
    this.items.sourceRect1.position.y = 0.3
    this.items.sourceRect2.position.y = -0.3
    this.scene.add(this.items.sourceRect1)
    this.scene.add(this.items.sourceRect2)

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('fox')
      this.debugFolder.add(this.items.sourceRect1.position, 'x', -3, 3)
      this.debugFolder.add(this.items.sourceRect2.position, 'x', -3, 3)
    }

    const targetGeometry = new THREE.BoxGeometry(1.2, 1.2, 0.04)
    const targetMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff })
    this.items.targetRect = new THREE.Mesh(targetGeometry, targetMaterial)
    this.scene.add(this.items.targetRect)

    const controls = new THREE.DragControls(
      [this.items.sourceRect1, this.items.sourceRect2],
      this.camera.instance,
      this.renderer.instance.domElement
    )
    console.log('controls =', controls)
  }

  update() {
    const THREE = window.THREE
    const bbox1 = new THREE.Box3().setFromObject(this.items.sourceRect1)
    const bbox2 = new THREE.Box3().setFromObject(this.items.sourceRect2)
    this.items.targetRect.position.x =
      Math.max(bbox1.max.x, bbox2.max.x) +
      this.items.targetRect.geometry.parameters.width / 2
  }
}
