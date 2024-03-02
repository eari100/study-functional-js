import {_filter, _find} from "./1-29_인자_늘리기.js";
import {_identity} from "./1-31__.identity.js";

const _some = list => !!_find(list, _identity)
const _every = list => _filter(list, _identity).length === list.length

console.log(_some([0, null, 2]))
console.log(_some([0, null, false]))

console.log(_every([0, null, 2]))
console.log(_every([{}, true, 2]))