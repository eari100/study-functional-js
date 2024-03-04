function f4() {
    var a = 10
    var b = 20

    // f5가 사라지만 a, b가 사라지기 때문에 클로저가 아니다
    // f4가 실행 중인 때만 클로저다
    function f5() {
        return a + b
    }

    return f5()
}

f4()