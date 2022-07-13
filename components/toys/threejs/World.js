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

    // const THREE = window.THREE

    // if (this.debug.active) {
    //   this.debugFolder = this.debug.ui.addFolder('fox')
    //   this.debugFolder.add(this.items.sourceRect1.position, 'x', -3, 3)
    //   this.debugFolder.add(this.items.sourceRect2.position, 'x', -3, 3)
    // }
  }

  update() {}
}
