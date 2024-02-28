import {map} from "./1-8_map.js";
import {filter} from "./1-6_filter.js";

const users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "BJ", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HI", age: 24 }
]

function addMaker(a) {
    return function(b) {
        return a+b
    }
}

function bvalue(key) {
    return function (obj) {
        return obj[key]
    }
}

bvalue('a')({a: 'hi', b: 'hello'}) // hi

// 1-14
console.log(map(filter(users, function (user) { return user.age < 30 }), bvalue('age')))