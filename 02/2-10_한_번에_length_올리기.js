var obj12 = []
obj12.length = 5
console.log(obj12)

var obj13 = [1, 2]
obj13[5] = 5
console.log(obj13)
console.log(obj13.length)

obj13.push(6)
console.log(obj13)
console.log(obj13.length)

// ['length'] 로 참조 및 할당
console.log(obj13['len' + 'gth']) // 7
obj13['len' + 'gth'] = 10
console.log(obj13.length) // 10
obj13.push(11)
console.log(obj13)

// 객체는 key의 참조, 수정 등에 제약이 없고 유연하다

// 성능 비교
var l = 100_000
var list = []
for(var i=0;i<l;i++) {
    list.push(i)
}
// 3ms ~ 4.8ms

var l = 100_000
var list = []
for(var i=0;i<l;i++) {
    list[list.length] = i
}
// 2.3ms ~ 3.4ms

var l = 100_000
var list = []
list.length = l
console.log(list) // empty items
for(var i=0;i<l;i++) {
    list[i] = i
}
// 1.6mx ~ 2.2ms

var l = 100_000
var list = Array(l)
console.log(list) // empty items
for(var i=0;i<l;i++) {
    list[i] = i
}
// 1.5ms ~ 1.97ms

// 안전하게 list 크기 지정
// 카일 심슨의 You Don't Know JS - 타입과 문법 중...
console.log(Array.apply(null, { length: 3 }))
// [ undefined, undefined, undefined ]


