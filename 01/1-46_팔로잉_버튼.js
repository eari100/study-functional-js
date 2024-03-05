const users = [
    { id: 1, name: 'HA', age: 25 },
    { id: 2, name: 'PJ', age: 28 },
    { id: 3, name: 'JE', age: 27 }
]

$('.user-list').append(
    _.map(users, (user) => { // 클로저가 아니다
        const { name } = user
        const button = $('<button>').text(name)

        button.click(() => { // 클로저
            if(confirm(`${name}님을 팔로잉 하시겠습니까?`))
                follow(user)
        })

        return button
    })
)

const follow = user => {
    const { id, name } = user
    $.post('follow', { user_id: id }, () => { // 클로저가 되었다가 없어지는 클로저
        alert(`이제 ${name}님을 소식을 보실 수 있습니다.`)
    })
}