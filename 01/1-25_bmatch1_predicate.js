import {find} from "./find.js";
import {filter} from "./1-6_filter.js";
import {map} from "./1-8_map.js";

const users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "BJ", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HI", age: 24 }
]
const bmatch1 = (key, val) => (obj) => obj[key] === val

console.log( find(users, bmatch1('id', 1)) )
console.log( find(users, bmatch1('name', 'HI')) )
console.log( find(users, bmatch1('age', 27)) )

console.log( filter(users, bmatch1('age', 32)) )
console.log( map(users, bmatch1('age', 32)) )