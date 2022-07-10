import Toy from '../Toy.js'
import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter {
  constructor() {
    super()
    this.toy = new Toy()
    this.canvas = this.toy.canvas
    this.aspect = 2
    this.setup()

    self.addEventListener('resize', () => {
      this.setup()
      this.trigger('resize')
    })
  }

  setup() {
    this.canvas.style.width = this.canvas.parentElement.clientWidth + 'px'
    this.canvas.style.height = this.canvas.clientWidth / this.aspect + 'px'
    this.width = this.canvas.clientWidth
    this.height = this.canvas.clientHeight
    this.pixelRatio = Math.min(self.devicePixelRatio, 2)
  }
}
