// 클로저(myfn)가 되려면 외부 변수(a)가 존재해야 된다
function parent() {
    var a = 5
    function myfn() {
        console.log(a)
    }
}

function parent2() {
    var a = 5
    function parent1() {
        function myfn() {
            console.log(a)
        }
    }
}