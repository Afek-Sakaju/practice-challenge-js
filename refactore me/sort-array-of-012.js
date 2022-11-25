function sortArr012(arr) {
    const res = Array(arr.length);
    const count = [0, 0, 0];

    for (const num of arr) {
        if (num < 0 || num > 2) {
            throw Error('invalid input, array should contain only 1/2/3 !');
        }

        count[num]++;
    }

    let start = undefined;
    let end = undefined;

    for (let i = 0; i < 3; i++) {
        start = start === undefined ? i : end;
        end = end === undefined ? count[i] : end + count[i];

        res.fill(i, start, end);
    }

    return res;
}

const result = sortArr012([0, 0, 1, 2, 2, 0, 0, 1]);
console.log(`${result}`);

//todo write tests