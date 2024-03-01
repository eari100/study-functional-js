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

console.log(filter(users, user => user.id == 3)[0])

var user;
for(var i=0, len=users.length;i<len;i++) {
    if(users[i].id == 3) {
        user = users[i];
        break;
    }
}

console.log(user)

function findById(list, id) {
    for(var i=0,len=list.length;i<len;i++) {
        if(list[i].id == id) {
            return list[i];
        }
    }
}

console.log(findById(users, 3))
console.log(findById(users, 5))

function findByName(list, name) {
    for(var i=0,len=list.length;i<len;i++) {
        if(list[i].name == name) {
            return list[i];
        }
    }
}

console.log(findByName(users, 'BJ'))
console.log(findByName(users, 'JE'))

function findByAge(list, age) {
    for(var i=0,len=list.length;i<len;i++) {
        if(list[i].age == age) {
            return list[i];
        }
    }
}

console.log(findByAge(users, 28))
console.log(findByAge(users, 25))

function findBy(key, list, val) {
    for(var i=0, len=list.length;i<len;i++) {
        if(list[i][key] === val) return list[i];
    }
}

console.log(findBy('name', users, 'BJ'))
console.log(findBy('id', users, 2))
console.log(findBy('age', users, 28))

function User(id, name, age) {
    this.getId = () => id
    this.getName = () => name
    this.getAge = () => age
}

var users2 = [
    new User(1, 'ID', 32),
    new User(2, 'HA', 25),
    new User(3, 'BJ', 32),
    new User(4, 'PJ', 28),
    new User(5, 'JE', 27),
    new User(6, 'JM', 32),
    new User(7, 'HI', 24),
]

console.log(findBy('age', users2, 25))

const find = (list, predicate) => {
    for(let i=0, len=list.length; i<list.length; i++) {
        if(predicate(list[i]))
            return list[i];
    }
}

console.log(find(users2, u => u.getAge() === 25).getName())
console.log(find(users, u => u.name.indexOf('P') != -1))
console.log(find(users, u => u.age === 32 && u.name === 'JM'))
console.log(find(users2, u => u.getAge() < 30).getName())