// 함수는 값으로 다룰 수 있다
function f1() {}
var a = typeof f1 == 'function' ? f1 : function () {}

// 함수를 리턴한다
function f2() {
    return function () {}
}

// 익명 함수
(function(a, b) { return a+b })(10, 5)

// 함수를 인자로
const callAndAdd = (a, b) => a() + b()
callAndAdd(function () { return 10 }, function () { return 5 })