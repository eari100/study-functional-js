function f2() {
    var a = 10
    var b = 20

    // 클로저가 아닙니다.
    function f3(c, d) {
        return c + d
    }

    return f3()
}

var f4 = f2()
f4(5, 7)