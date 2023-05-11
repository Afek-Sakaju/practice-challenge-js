/* Write a function that accepts num and return its value 
based on the place (which is num) on the  fibonacci series.
Bonus: the solution should be memoized to prevent 
too much recursive calls*/

module.exports.memoFibonacci = function (num) {
    const obj = { 1: 1, 2: 1 };

    const findNum = (n) => obj[n] || (obj[n] = findNum(n - 1) + findNum(n - 2));

    return num > 0 ? findNum(num) : null;
};
