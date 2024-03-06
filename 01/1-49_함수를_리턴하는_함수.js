const constant = val => () => val

var always1 = constant(10)

console.log(always1())
console.log(always1())
console.log(always1())