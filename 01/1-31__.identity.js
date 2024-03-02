import {_filter} from "./1-29_인자_늘리기.js";

export const _identity = v => v

// const a = 10
// console.log(_identity(a))
// console.log(_filter([true, 0, 10, 'a', false, null], _identity)) // [true, 10, 'a']

const _falsy = v => !v
const _truthy = v => !!v
