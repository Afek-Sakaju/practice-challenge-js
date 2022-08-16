/* A(X) for positive integer X is 
the sum of factorials of its digits. 
For example, A(154) = 1! + 5! + 4!= 145.
Given a number N, find the minimum number X such that A(X) = N. 
You have to return a list of digits which represent the number X. 
Expected Time Complexity: O(X) where X ≤ 106
Expected Space Complexity: O(X) */

module.exports.factDigit = function (num) {
    const strOfNums = JSON.stringify(num);

    function numsStrReader(str, i = 0) {
        if (i === str.length) return;

        sum += calcRec(+str.charAt(i));

        numsStrReader(str, i + 1);
    }

    let x = 1;
    let res = factorial(x);

    while (num > res) {
        if (num === res) return x;
        else {
            x++;
        }
        res = factorial(x);
    }
};
