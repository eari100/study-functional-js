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