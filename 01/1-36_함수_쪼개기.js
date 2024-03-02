import {_identity} from "./1-31__.identity.js";
import {_find, _findIndex} from "./1-29_인자_늘리기.js";
import {beq, not} from "./1-34_아주_작은_함수_not_beq.js";

const positive = list => _find(list, _identity)

const negativeIndex = list => _findIndex(list, not)

const _some = list => not(not(positive(list)))

const _every = list => beq(-1)(negativeIndex(list))

console.log(_some([0, null, 2]))
console.log(_some([0, null, false]))
console.log(_every([0, null, 2]))
console.log(_every([{}, true, 2]))