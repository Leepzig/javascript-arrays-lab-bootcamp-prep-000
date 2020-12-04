var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function prependKitten(name) {
  var newArr = [name, ...kittens]
  return newArr
}

function appendKitten(name) {
  var newArr = [...kittens, name]
  return newArr
}

function removeLastKitten() {
  var newArr = Kittens.slice()
}
function removeFirstKitten() {
  
}
console.log(appendKitten('broom'))

