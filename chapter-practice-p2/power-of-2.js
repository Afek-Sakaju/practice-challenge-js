/* Q13: "Power of 2"
Given a non-negative integer N.
The task is to check if N is a power of 2. 
More formally, check if N can be expressed as 2x for some x. 
Expected Time Complexity : O(log N)
Expected Auxiliary Space : O(1) */

module.exports.isPowerofTwo = function (num) {
    let power = 0;
    let res = 1; // 2^0 equal 1

    while (res <= num) {
        res = Math.pow(2, power);

        if (res === num) return true;

        power++;
    }

    return false;
};
