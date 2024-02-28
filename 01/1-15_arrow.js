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

console.log(map(filter(users, u => u.age < 30), u => u.age))
console.log(map(filter(users, u => u.age >= 30), u => u.name))

const under_30 = u => u.age < 30
const over_30 = u => u.age >= 30

console.log(map(filter(users, under_30), u => u.age))
console.log(map(filter(users, over_30), u => u.name))

var ages = list => map(list, v => v.age)
var names = list => map(list, v => v.name)

console.log(ages(filter(users, under_30)))
console.log(names(filter(users, over_30)))

const bvalues = key => list => map(list, v => v[key])
const ages = bvalues('age')
const names = bvalues('name')
