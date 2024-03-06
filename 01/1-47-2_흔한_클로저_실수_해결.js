const users = [
    { id: 1, name: 'HA', age: 25 },
    { id: 2, name: 'PJ', age: 28 },
    { id: 3, name: 'JE', age: 27 }
]

// 절차지향적 해결 - 함수의 도움
var buttons = []

for(var i=0;i<users.length;i++) {
    (function (user) {
        buttons.push($('<button>').text(user.name).click(() => console.log(user.name)))
    })(users[i])
}

$('.user-list').append(buttons)