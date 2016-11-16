const TEST = 'THIS IS A CONSTANT'

function log (thing) {
  return console.log(thing)
}

function alert (thing) {
  return window.alert(thing)
}

export { TEST, alert }

export default log
