import EventEmitter from './EventEmitter.js'

export default class Timer extends EventEmitter {
  constructor() {
    super()

    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16 // milliseconds between two frames at 60fps

    self.requestAnimationFrame(() => {
      this.tick()
    })
  }

  tick() {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = this.current - this.start

    this.trigger('tick')

    self.requestAnimationFrame(() => {
      this.tick()
    })
  }
}
