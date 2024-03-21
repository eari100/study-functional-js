// 괄호 없이도 익명 함수 즉시 실행 가능
// 연산자와 함께 있고, 함수가 값으로 다뤄짐

!function(a) {
    console.log(a)
}(1)

true && function(a) {
    console.log(a)
}(1)

1 ? function(a) {
    console.log(a)
}(1) : 5

0, function(a) {
    console.log(a)
}(1)

var b = function(a) {
    console.log(a)
}(1)

function f2() {}
f2(function (a) {
    console.log(a)
}(1))

var f3 = function c(a) {
    console.log(a)
}(1)

new function () {
    console.log(1)
}