/* Q1: "Last index of one "
Given a string S consisting only '0's and '1's,  
find the last index of the '1' present in it.
Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1). */

module.exports.lastIndex = function (str) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '1') {
            return i;
        }
    }

    return -1;
};
