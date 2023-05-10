/* A(X) for positive integer X is the sum of factorials of its digits. 
For example, A(154) = 1! + 5! + 4!= 145.
Given a number N, find the minimum number X such that A(X) = N.
You have to return a list of digits which represent the number X. 

Expected Time Complexity: O(X) where X ≤ 106
Expected Space Complexity: O(X) */

module.exports.factDigitSum = function (num) {
    const numbersFactorials = {
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

    let sum = 0;
    let digits = [];

    Object.entries(numbersFactorials)
        // Reverse looping on the object entries from the biggest to the smallest
        .reverse()
        .forEach(([digit, factorial]) => {
            if (sum === num) return;

            const shouldAddDigit = sum + factorial <= num;
            if (shouldAddDigit) {
                sum += factorial;
                digits.unshift(digit);
            }
        });

    return +digits.join('');
};
