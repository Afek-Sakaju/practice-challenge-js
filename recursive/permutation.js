const res = [];
function permutation(list, temp = []){
    if(!list.length){
        res.push(temp);
    }
    for(let i = 0; i < list.length; i++) {
        const items = list.slice(0);
        const [item] = items.splice(i, 1);
        permutation(items, [...temp, item]);
    }
}

permutation([1,2,3])
console.log(res)