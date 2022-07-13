import Debug from './utils/Debug.js'
import Timer from './utils/Timer.js'
import Sizes from './utils/Sizes'
import sources from './sources.js'
import Resources from './utils/Resources.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World.js'

export default class Scene {
  static instance = null

  constructor(canvas) {
    if (Scene.instance) {
      return Scene.instance
    }
    Scene.instance = this

    this.canvas = canvas

    this.debug = new Debug()
    this.time = new Timer()
    this.sizes = new Sizes()

    const THREE = self.THREE
    this.scene = new THREE.Scene()

    this.resources = new Resources(sources)

    this.camera = new Camera()

    this.renderer = new Renderer()

    this.world = new World()

    this.sizes.on('resize', () => {
      this.resize()
    })

    this.time.on('tick', () => {
      this.update()
    })
  }

  add(obj) {
    this.scene.add(obj)
  }

  onUpdate(action) {
    this.actionOnUpdate = action
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  update() {
    this.renderer.update()
    this.world.update()
    this.actionOnUpdate()
  }
}
