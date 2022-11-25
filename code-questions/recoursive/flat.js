function flat(list) {
    if (!Array.isArray(list)) return [list];

    let arr = [];
    for (const item of list) {
        arr = [...arr, ...flat(item)];
    }

    return arr;
}

{
    const arr = [1, 2, [3, [4]], 5, [[6]]];
    const res = flat(arr);
    console.log('result is: ', res);
    console.log(
        'status: ',
        JSON.stringify(res) === JSON.stringify([1, 2, 3, 4, 5, 6])
    );
}

{
    const arr = [[[[[[[[[[1]]]]]]]], 1], [55, [4]], 'abc', [[6]]];
    const res = flat(arr);

    console.log('result is: ', res);
    console.log(
        'status: ',
        JSON.stringify(res) === JSON.stringify([1, 1, 55, 4, 'abc', 6])
    );
}
