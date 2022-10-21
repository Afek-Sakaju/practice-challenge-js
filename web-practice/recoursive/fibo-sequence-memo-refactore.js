function fibo(num) {
    const obj = { 1: 1, 2: 1 };
    return findNumRec(num);

    function findNumRec(n) {
        return obj.hasOwnProperty(n)
            ? obj[n]
            : (obj[n] = findNumRec(n - 1) + findNumRec(n - 2));
    }
}

const result = fibo(13);
console.log(result);
