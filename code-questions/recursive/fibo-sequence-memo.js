/* Write a function that accepts place(number) and return 
its value his value based on the place on the  fibonacci series.
Bonus: the solution should be memoized to prevent 
too much recursive calls*/

module.exports.memoFibonacci = function (num) {
    const obj = { 1: 1, 2: 1 };

    function findNumRec(n) {
        return obj.hasOwnProperty(n)
            ? obj[n]
            : (obj[n] = findNumRec(n - 1) + findNumRec(n - 2));
    }

    return num > 0 ? findNumRec(num) : null;
};
