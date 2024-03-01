export const find = (list, predicate) => {
    for(let i=0, len=list.length; i<list.length; i++) {
        if(predicate(list[i]))
            return list[i];
    }
}