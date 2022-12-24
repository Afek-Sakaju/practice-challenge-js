function uniqueElements(matrix) {
    const obj = {};

    for (const row of matrix) {
        for (const item of row) {
            obj[item] = !obj.hasOwnProperty(item);
        }
    }

    for (const [key, value] of Object.entries(obj)) {
        if (value) console.log(key);
    }
}

const mat = [
    [20, 15, 30],
    [1, 30, 5],
    [6, 7, 6],
];

uniqueElements(mat);
// expect 20 15 1 5 7
