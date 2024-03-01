import {find} from "./find.js";

const users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "BJ", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HI", age: 24 }
]

const object = (key, val) => {
    var obj = {}
    obj[key] = val

    return obj
}

const match = (obj, obj2) => {
    for(var key in obj2) {
        if(obj[key] !== obj2[key])
            return false

        return true
    }
}

function bmatch(obj2, val) {
    if(arguments.length === 2)
        obj2 = object(obj2, val)

    return (obj) => match(obj, obj2)
}

console.log(
    match(find(users, bmatch('id', 3)), find(users, bmatch('name', 'BJ')))
)

console.log(
    find(users, (u) => u.age === 32 && u.name === 'JM')
)

console.log(
    find(users, bmatch({name: 'JM', age: 32}))
)