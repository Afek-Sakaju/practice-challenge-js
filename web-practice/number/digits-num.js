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
    return rec(num * 10);

    function rec(xTenNum) {
        let arr = JSON.stringify(xTenNum).split('');
        let sumOfDigits = arr.reduce((total, n) => {
            return (total += +n);
        }, 0);

        if (sumOfDigits === num) return num;
        else if (+arr[arr.length - 1] !== 0) {
            return rec(xTenNum * 10);
        } else return false;
    }
};
