var obj = { a: 1, b: 2, c: 3 }
delete obj.a
delete obj['b']
delete obj['C'.toLowerCase()] // 대괄호 안에 함수 실행 가능
console.log(obj) // {}

delete Array.prototype.push
var arr1 = [1, 2, 3]
arr1.push(4) // push not a function