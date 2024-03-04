// 클로저는 자신이 생성될 때의 스코프에서 알 수 있었던 변수 중 언젠가 자신이 실행될 때 사용할 변수들만 기억하여 유지시키는 함수입니다.
var a = 10
var b = 20

function f1() {
    return a + b
}

f1()