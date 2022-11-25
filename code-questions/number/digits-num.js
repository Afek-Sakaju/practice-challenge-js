/* Find the smallest number such that the sum of 
its digits is N and it is divisible by 10N.

Example 1:

Input: N = 5
Outptut: 500000
Explanation: Sum of digits of 500000
is 5 and divisible by 105.

Example 2:

Input: N = 20
Output: 29900000000000000000000
Explanation: Sum of digits of 
29900000000000000000000 is 20 and
divisible by 220.

Your Task:
You don't need to read or print anything. 
Your task is to complete the function digitsNum() 
which takes the input parameter N and returns the 
smallest number such that sum of its digits is 
N and divisible by 10N.

Expected Time Complexity: O(N)
Expected Space Complexity: O(N) */

module.exports.digitsNum = function (num) {
    if (num <= 0) return null;

    let digits = [1];
    let sum = 1;

    while (sum !== num) {
        // just to make the code quicker
        // in case num too high
        if (num - sum > 9) {
            sum += 9;
            digits.push(9);
        } else {
            if (digits[0] === 9) digits.unshift(1);
            else digits[0]++;

            sum++;
        }
    }

    return +digits.join('') * Math.pow(10, num);
};
