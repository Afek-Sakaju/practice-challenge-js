/* Q7: "Write a function that accept number, 
and returns 1 if its a prime number else return 0" */

module.exports.checkPrime = function (num) {
    function remainderCheck(i) {
        if (i === 1) return 1;
        else if (num % i === 0 && num !== i) return 0;

        return remainderCheck(i - 1);
    }
    return remainderCheck(10);
};
