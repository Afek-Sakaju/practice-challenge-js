module.exports.sortArr012 = function (arr) {
    const obj = { 0: 0, 1: 0, 2: 0 };

    for (const num of arr) {
        if (num !== 0 && num !== 1 && num !== 2) {
            return;
        }

        obj[num]++;
    }

    return (
        '0'.repeat(obj[0]) +
        '1'.repeat(obj[1]) +
        '2'.repeat(obj[2])
    )
        .split('')
        .map((e) => (e = +e));
};
