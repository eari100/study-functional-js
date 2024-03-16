console.log(add1(10, 5)) // 15

//add2(10, 5) // TypeError: add2 is not a function (호이스팅)

// hi() // ReferenceError: hi is not defined

console.log(add1)
console.log(add2) // undefined
// 함수는 선언 단계와 초기화 단계가 구분되어있다. 호이스팅으로 참조만 가능하고 실행은 불가능하다

function add1(a, b) {
    return a + b
}

var add2 = function(a, b) {
    return a + b
}

var m = {
    add3: function(a, b) {
        return a + b
    }
}