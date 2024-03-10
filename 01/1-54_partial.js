// 존 레식의 partial
Function.prototype.partial = function () {
    var fn = this, args = Array.prototype.slice.call(arguments)
    return function() {
        var arg = 0
        for(var i=0;i<args.length && arg<arguments.length;i++)
            if(args[i] === undefined) args[i] = arguments[arg++]

        return fn.apply(this, args)
    }
}

function abc(a, b, c) {
    console.log(a, b, c)
}

var ac = abc.partial(undefined, 'b', undefined)
ac('a', 'c')

// 단점
// 1. 함수 인자로 undefined를 사용할 수 없음
// 2. 초기에 인자 갯수 미리 채워놓아야한다 (아래 코드 참조)
var ac2 = abc.partial(undefined, 'b')
ac2('a', 'c') // a b undefined

// 버그를 일으킬 수 있는 경우
function add() {
    var result = 0
    for(var i=0;i<arguments.length;i++)
        result += arguments[i]

    return result
}

console.log('add', add(1, 2, 3, 4, 5))

var add2 = add.partial(undefined, 2)
console.log('add2', add2(1, 2, 4, 5))

var add3 = add.partial(undefined, undefined, 3, undefined, undefined)
console.log('add3', add3(1, 2, 4, 5))

console.log('bug1', add3(50, 50, 50, 50))
console.log('bug2', add3(100, 100, 100, 100))