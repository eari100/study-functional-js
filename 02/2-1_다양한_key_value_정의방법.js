var obj = { a: 1, 'b': 2}
obj.c = 3
obj['d'] = 4
var e = 'e'
obj[e] = 5
function f() { return 'f' }
obj[f()] = 6
console.log(obj)

// 띄워쓰기 가능
var obj2 = { " a a a ": 1 }
obj2[ ' b b b '] = 2
console.log(obj2)

// 특수 문자를 써도 key로 만들 수 있다
var obj3 = { "margin-top": 5 }
obj3["padding-bottom"] = 20
console.log(obj3)

// 숫자도 key로 쓸 수 있다
var obj4 = { 1: 10 }
obj4[2] = 20
console.log(obj4)

// {} 안쪽의 key 영역에서는 코드를 실행할 수 없다
// var obj5 = { (true ? "a" : "b"):1 }

// [] 안에는 문자열 가능, 코드 실행 가능
var obj6 = {}
obj6[true ? "a" : "b"] = 1
console.log(obj6)

var obj7 = { [true ? "a" : "b"]: 1 }
console.log(obj7)
