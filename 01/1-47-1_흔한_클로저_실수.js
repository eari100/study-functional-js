const users = [
    { id: 1, name: 'HA', age: 25 },
    { id: 2, name: 'PJ', age: 28 },
    { id: 3, name: 'JE', age: 27 }
]

// 흔한 클로저 실수 - 어떤 버튼을 클릭해도 JE
var buttons = []
for(var i=0;i<users.length;i++) {
    var user = users[i]
    buttons.push($('<button>').text(user.name).click(() => console.log(user.name)))
}

$('.user-list').append(buttons)