/* Given three arrays sorted in increasing order. 
Find the elements that are common in all three arrays.
Note: can you take care of the duplicates 
without using any additional Data Structure? 
Expected Time Complexity: O(n1 + n2 + n3)
Expected Auxiliary Space: O(n1 + n2 + n3)

Example 1:

Input:
n1 = 6; A = {1, 5, 10, 20, 40, 80}
n2 = 5; B = {6, 7, 20, 80, 100}
n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
Output: 20 80
Explanation: 20 and 80 are the only
common elements in A, B and C. */

module.exports.commonElements = function (arr1, arr2, arr3) {
    const res = [];
    let i = 0;
    let j = 0;
    let k = 0;

    for (; i < arr1.length; i++) {
        for (; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                for (; k < arr3.length; k++) {
                    if (arr2[j] === arr3[k]) res.push(arr3[k]);
                    else if (arr2[j] < arr3[k]) {
                        break;
                    }
                }
            } else if (arr1[i] < arr2[j]) {
                break;
            }
        }
    }
    return res;
};

//todo check if the running time is good 
