import _ from 'underscore'


const callWith = val1 => (val2, func) => func(val1, val2)
const add = (a, b) => a + b
const sub = (a, b) => a - b

const callWith10 = callWith(10)
console.log(callWith10(20, add))

const callWith5 = callWith(5)
console.log(callWith5(5, sub))

// 괄호 두번
callWith(30)(20, add)
callWith(20)(20, sub)

console.log(callWith([1, 2, 3])(v => v * 10, _.map))

_.get = (list, idx) => list[idx]

const callWithUsers = callWith([
    { id: 1, name: 'HA', age: 25 },
    { id: 2, name: 'PJ', age: 28 },
    { id: 3, name: 'JE', age: 27 }
])

console.log(callWithUsers(2, _.get))

console.log(callWithUsers((user) => user.age > 25, _.find))

console.log(callWithUsers((user) => user.age > 25, _.filter))

console.log(callWithUsers((user) => user.age > 25, _.some))

console.log(callWithUsers((user) => user.age > 25, _.every))