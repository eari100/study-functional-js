// 고차 함수
const callWith10 = (val, func) => func(10, val)

// 일반 함수
const add = (a, b) => a + b

// 일반 함수
const sub = (a, b) => a - b

callWith10(20, add) // 30
callWith10(5, sub) // 20