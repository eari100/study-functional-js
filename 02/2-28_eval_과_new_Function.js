var a = eval('10 + 5')
console.log(a)

var add = new Function('a, b', 'return a + b;')
console.log(add(10, 5))