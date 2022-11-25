/* A(X) for positive integer X is 
the sum of factorials of its digits. 
For example, A(154) = 1! + 5! + 4!= 145.
Given a number N, find the minimum number X such that A(X) = N. 
You have to return a list of digits which represent the number X. 
Expected Time Complexity: O(X) where X ≤ 106
Expected Space Complexity: O(X) */

module.exports.factDigit = function (num) {
    const obj = {
        1: 1,
        2: 2,
        3: 6,
        4: 24,
        5: 120,
        6: 720,
        7: 5040,
        8: 40320,
        9: 362880,
    };

    let res = 0;
    let arr = [];

    for (let i = 9; i > 0; i--) {
        if (res + obj[i] <= num) {
            res += obj[i];
            arr.unshift(i);
            i++;
            if (res === num) return +arr.join('');
        }
    }
    return 0;
};
