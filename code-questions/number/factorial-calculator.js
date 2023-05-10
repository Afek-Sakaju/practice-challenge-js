module.exports.factorialIterative = function (num) {
    if (num <= 0) return 0;

    let sum = 1;
    while (num > 0) {
        sum *= num;
        num--;
    }
    return sum;
};

module.exports.factorialRec = function (num) {
    if (num <= 0) return 0;

    function calcRec(n) {
        if (n === 1) return n;
        return n * calcRec(n - 1);
    }
    return calcRec(num);
};
