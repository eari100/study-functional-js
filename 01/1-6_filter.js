export function filter(list, predicate) {
    const new_list = []

    for(let i=0,len=list.length;i<len;i++) {
        if(predicate(list[i])) new_list.push(list[i])
    }
    return new_list
}
