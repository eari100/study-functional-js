import {_compose} from "./1-37__.compose.js";
import {negativeIndex, positive} from "./1-36_함수_쪼개기.js";
import {beq, not} from "./1-34_아주_작은_함수_not_beq.js";

const _some = _compose(not, not, positive)
const _every = _compose(beq(-1), negativeIndex)