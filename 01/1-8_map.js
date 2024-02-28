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

export function map(list, iteratee) {
    var new_list = []

    for(let i=0,len=list.length;i<len;i++) {
        new_list.push(iteratee(list[i]))
    }

    return new_list
}

// const users_under_30 = filter(users, function (user) { return user.age < 30 })
// console.log(users_under_30.length)
//
// const ages = map(users_under_30, function (user) { return user.age })
// console.log(ages)
//
// const users_over_30 = filter(users, function (user) { return user.age >= 30 })
// console.log(users_over_30.length)
//
// const names = map(users_over_30, function (user) { return user.name })
// console.log(names)