console.log('1-1')
function addMaker(a) {
    return function(b) {
        return a+b
    }
}

console.log(addMaker(10)(5))

console.log('1-2')

const add5 = addMaker(5)
console.log(add5(3))
console.log(add5(4))

console.log('1-3')
const v1 = 100, v2 = function () {}
function f1() {
    return 100
}

function f2() {
    return function () {}
}
