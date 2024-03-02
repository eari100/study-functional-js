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

const findIndex = (list, predicate) => {
    for(let i=0,len=list.length;i<len;i++) {
        if(predicate(list[i])) {
            return i;
        }
    }

    return -1;
}

console.log( findIndex(users, bmatch({ name: 'JM', age: 32 })) )
console.log( findIndex(users, bmatch({ age: 36 })) )