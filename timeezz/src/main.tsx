import { Timer } from './Domain/Timer'

const timer = new Timer()
timer.start()

setTimeout(() => {
  timer.stop()
  console.log('Temps final :', /*timer.getTime()/*/)
}, 5000)

setTimeout(() => {
  timer.reset()
  console.log('minuteur reset')
}, 8000)