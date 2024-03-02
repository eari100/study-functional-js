export const _map = (list, iteratee) => {
    const new_list = []

    for(let i=0,len=list.length;i<len;i++) {
        new_list.push(iteratee(list[i], i, list))
    }

    return new_list
}

export const _filter = (list, predicate) => {
    const new_list = []

    for(let i=0,len=list.length;i<len;i++) {
        if(predicate(list[i], i, list)) new_list.push(list[i])
    }

    return new_list
}

export const _find = (list, predicate) => {
    for(let i=0,len=list.length;i<len;i++) {
        if(predicate(list[i], i, list))
            return list[i]
    }
}

export const _findIndex = (list, predicate) => {
    for(let i=0,len=list.length;i<len;i++) {
        if(predicate(list[i], i, list))
            return i
    }

    return -1
}