export const _compose = function () {
    const args = arguments
    const start = args.length - 1

    return function () {
        let i = start
        let result = args[start].apply(this, arguments)
        while(i--)
            result = args[i].call(this, result)

        return result
    }
}

const greet = name => `hi: ${name}`
const exclaim = statement => `${statement.toUpperCase()} !`
const welcome = _compose(greet, exclaim)
// console.log(welcome('moe')) // hi: MOE!