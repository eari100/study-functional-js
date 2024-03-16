// 일반적인 즉시 실행 방식
(function(a) {
    console.log(a)
})(100)

// error
// function(a) {
//     console.log(a)
// }(100)

// error
// function {
//
// }

// function f1() {
//     // 함수를 값으로
//     return function () {}
// }
//
// f1()

function f1() {
    return function(a) {
        console.log(a)
    }(1)
}

f1()

// 리턴 문 뒤에서는 괄호없이도 익명함수를 즉시 실행할 수 있다