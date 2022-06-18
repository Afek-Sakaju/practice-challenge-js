/* Given a non-negative integer N. (i called it num)
The task is to check if N is a power of 2. 
More formally, check if N can be expressed as 2x for some x. 
Expected Time Complexity : O(log N)
Expected Auxiliary Space : O(1) */

module.exports.isPoweredBy2 = function (num) {
    let power = 0;
    let currentRes = 1; // 2^0 equal 1

    while (currentRes <= num) {
        currentRes = Math.pow(2, power);

        if (currentRes === num) return true;

        power++;
    }
    return false;
};
