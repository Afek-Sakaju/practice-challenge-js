module.exports.factorialIterative = function (num) {
    const arr = [];

    while (num > 0) {
        arr.push(num);
        num--;
    }

    const res = arr.reduce((n, total) => {
        return (total *= n);
    }, 1);

    return res;
};

module.exports.factorialRec = function (num) {
    function calcRec(n) {
        if (n === 1) return n;

        return n * calcRec(n - 1);
    }

    return calcRec(num);
};
