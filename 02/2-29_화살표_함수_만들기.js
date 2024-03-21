import _ from 'underscore'


// 아...arrow 함수는 new Function() or eval()을 이용해 만든 건가?
function L(str) {
    var splitted = str.split('=>')

    return new Function(splitted[0], `return (${splitted[1]})`)
}

console.log(L('n => n * 10')(10))
console.log(L('n => n * 10')(20))
console.log(L('n => n * 30')(30))
console.log(L('a, b => a + b')(10, 20))
console.log(L('a, b => a + b')(10, 5))

// 10,000번 선언해 보기
console.time('익명 함수')
for(var i=0;i<10000;i++) {
    (function (v) { return v })(i)
}
console.timeEnd('익명 함수')
// 익명 함수: 2.402ms

console.time('new Function')
for(var i=0;i<10000;i++) {
    L('v => v')(i)
}
console.timeEnd('new Function')
// new Function: 20.61ms <- 성능 안좋음

// _.map을 곁들임 (성능 차이가 없음 **iteratee를 참조하고 있기 때문으로 예상**)
console.time('_.map x 익명 함수')
var arr = Array(1000)
_.map(arr, function(v, i) {
    return i * 2
})
console.timeEnd('_.map x 익명 함수')
//_.map x 익명 함수: 0.233ms

console.time('_.map x 화살표 함수')
var arr = Array(1000)
_.map(arr, L('v, i  => i * 2'))
console.timeEnd('_.map x 화살표 함수')
// _.map x 화살표 함수: 0.173ms

console.time('_.map x eval x 화살표 함수')
var arr = Array(1000)
_.map(arr, eval("L('v, i => i * 2')"))
console.timeEnd('_.map x eval x 화살표 함수')
// _.map x eval x 화살표 함수: 0.113ms


// iteratee을 매번 새로 생성해줄 경우 성능 측정
console.time('익명 중첩')
var arr = Array(10000)
_.map(arr, function(v, i) {
    return function (v, i) {
        return i * 2
    }(v, i)
})
console.timeEnd('익명 중첩')
// 익명 중첩: 1.147ms

console.time('익명 x 화살표 중첩')
var arr = Array(10000)
_.map(arr, function (v, i) {
    return L('v, i => i * 2')(v, i)
})
console.timeEnd('익명 x 화살표 중첩')
// 익명 x 화살표 중첩: 15.66ms <= bad


// ㄴ 메모이제이션으로 해결
function L2(str) {
    if(L2[str]) return L2[str] // 같은 str로 만든 함수가 있다면 리턴

    var splitted = str.split('=>')
    return L2[str] = new Function(splitted[0], `return (${splitted[1]})`)
}

console.time('익명 x 메모이제이션 x 화살표 중첩')
var arr = Array(10000)
_.map(arr, function (v, i) {
    return L2('v, i => i * 2')(v, i)
})
console.timeEnd('익명 x 메모이제이션 x 화살표 중첩')
// 익명 x 메모이제이션 x 화살표 중첩: 1.371ms <= good!!!