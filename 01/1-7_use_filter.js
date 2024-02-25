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

const users_under_30 = filter(users, function (user) { return user.age < 30 })
console.log(users_under_30.length)

const users_over_30 = filter(users, function (user) { return user.age >= 30 })
console.log(users_over_30.length)
