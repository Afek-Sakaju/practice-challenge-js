module.exports.sortMemo = function (arr) {
    const numbersCount = { 0: 0, 1: 0, 2: 0 };

    for (const num of arr) {
        if (![0, 1, 2].includes(num)) return false;
        numbersCount[num]++;
    }

    const sortedString =
        '0'.repeat(numbersCount[0]) +
        '1'.repeat(numbersCount[1]) +
        '2'.repeat(numbersCount[2]);

    return sortedString.split('').map((e) => (e = +e));
};

module.exports.sort = function (arr) {
    let loopLimit = arr.length;

    for (let i = 0; i < loopLimit; i++) {
        switch (arr[i]) {
            case 0:
                arr.unshift(arr.splice(i, 1)[0]);
                break;
            case 1:
                break;
            case 2:
                arr.push(arr.splice(i, 1)[0]);
                loopLimit--;
                i--;
                break;
            default:
                return false;
        }
    }

    return arr;
};
