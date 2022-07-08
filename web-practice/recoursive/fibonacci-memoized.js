/* "memFibonacci" is a function that accept number "N" 
than returns the N'th number in the fibonacci series 
with memoized solution */

module.exports.memoFibonacci = function (n) {
    const obj = {};

    obj[0] = 0;
    obj[1] = 1;

    function fiboRec(n) {
        if (!obj.hasOwnProperty(n)) {
            obj[n] = fiboRec(n - 1);
        }

        if (obj.hasOwnProperty(n - 1)) return obj[n] + obj[n - 1];
    }

    if (n <= 1) return n;
    else {
        fiboRec(n);
        return obj[n];
    }
};
