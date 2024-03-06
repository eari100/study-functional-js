const users = [
    { id: 1, name: 'HA', age: 25 },
    { id: 2, name: 'PJ', age: 28 },
    { id: 3, name: 'JE', age: 27 }
]

$('.user-list').append(
    _.map(users, user => {
        const { name } = user
        return $('<button>').text(name).click(() => console.log(name))
    })
)