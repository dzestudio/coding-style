var hello = 'world'
var test = 'thingy'

function print (test) {
  if (test === 'thingy') {
    return test
  } else {
    return [1, 2]
  }
}

window.alert(print(test))
window.alert(print(hello))
