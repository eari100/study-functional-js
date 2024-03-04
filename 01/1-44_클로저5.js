function f6() {
    var a = 10
    // a가 유지되므로 클로저입니다.
    function f7(b) {
        return a + b
    }
    return f7
}

// 그러나 f8이 없다면 f7은 클로저가 아니다
// f8을 계속 호출하더라도 a는 유지되므로 메모리 누수가 일어나지 않는다
var f8 = f6()
f8(20) // 30
f8(10) // 20