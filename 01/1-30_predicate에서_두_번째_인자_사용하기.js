import {_filter} from "./1-29_인자_늘리기.js";

console.log(_filter([1,2,3,4], (val, idx) => idx > 1))
console.log(_filter([1,2,3,4], (val, idx) => idx % 2 === 0))