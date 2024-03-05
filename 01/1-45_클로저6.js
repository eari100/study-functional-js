function f9() {
    var a = 10
    var f10 = function(c) {
        return a + b + c
    }
    // 클로저는 자신이 생성되는 스코프의 모든 라인, 어는 곳에서 선언된 변수든지 참조하고 기억할 수 있다
    // 클로저가 기억하는 변수의 값은 언제든지 남이나 자신에 의해 변경될 수 있다
    // 호이스팅
    var b = 20

    return f10
}

var f11 = f9()
f11(30)