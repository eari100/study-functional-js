import _ from 'underscore'

function abc(a, b, c) {
    console.log(a, b, c)
}

function add() {
    var result = 0
    for(var i=0;i<arguments.length;i++)
        result += arguments[i]

    return result
}

var ac = _.partial(abc, _, 'b')
ac('a', 'c')

var b = _.partial(abc, 'a', _, 'c')
b('b')

var ab = _.partial(abc, _, _, 'c')
ab('a', 'b')

var add2 = _.partial(add, _, 2)
console.log(add2(1, 3, 4, 5))
console.log(add2(3, 5))

function equal(a, b) {
    return a === b
}

var isUndefined = _.partial(equal, undefined) // a
console.log(isUndefined(undefined)) // b

var bj = {
    name: 'BJ',
    greet: _.partial(function (a, b) {
        return a + this.name + b
    }, '저는 ', '입니다.')
}

console.log(bj.greet())

console.log(bj.greet.call( { name: 'HA' } )) // this 변경

var greetPj = bj.greet.bind({ name: 'PJ' }) // 새로운 함수 리턴
console.log(greetPj())

console.log(bj.greet()) // 여전히 잘 보전됨