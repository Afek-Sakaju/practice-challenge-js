/* Q10: "Majority element"
Given an array A of N elements. 
Find the majority element in the array. 
A majority element in an array A of size N is 
an element that appears more than N/2 times in the array.
Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1). */

module.exports.majorityElement = function (numbers) {
    const obj = {};

    for (const num of numbers) {
        if (!obj.hasOwnProperty(num)) {
            obj[num] = 0;
        }
        obj[num]++;
    }

    for (const [key, value] of Object.entries(obj)) {
        if (value > numbers.length / 2) {
            return +key;
        }
    }

    return -1;
};
