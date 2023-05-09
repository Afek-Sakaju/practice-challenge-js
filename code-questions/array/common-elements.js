/* Given three arrays sorted in increasing order. 
Find the elements that are common in all three arrays.

Example 1:
    Input:
        n1 = 6; A = {1, 5, 10, 20, 40, 80}
        n2 = 5; B = {6, 7, 20, 80, 100}
        n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
    Output: 
        20 80
    Explanation:
        20 and 80 are the only
        common elements in A, B and C. 

Expected Time Complexity: O(n1 + n2 + n3)
Expected Auxiliary Space: O(n1 + n2 + n3) */

module.exports.commonElements = function (arr1, arr2, arr3) {
    const obj = {};
    const res = [];

    arr1.forEach((element) => (obj[element] = 0));
    arr2.forEach((element) => (obj[element] ||= 1));
    arr3.forEach((element) => {
        if (obj[element] === 1) {
            res.push(element);
            delete obj[element];
        }
    });

    return res;
};
