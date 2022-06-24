/* Q3:"Merge 2 arrays without extra space"
Given two sorted arrays arr1[] and arr2[] 
(of sizes n and m in non-decreasing order). 
Merge them in sorted order without using any extra space. 
Modify arr1 so that it contains the first N elements 
and modify arr2 so that it contains the last M elements.
Expected Time Complexity : O((n+m)log(n+m))
Expected Auxilliary Space : O(1) */

module.exports.merge = function (arr1, arr2) {
    for (let i = 0, j = arr1.length - 1; i < arr2.length && j >= 0; i++, j--) {
        if (arr1[j] > arr2[i]) {
            let temp = arr1[j];
            arr1[j] = arr2[i];
            arr2[i] = temp;
        } else break;
    }
    const nonDecreasing = (a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        else return 0;
    };
    return [arr1.sort(nonDecreasing), arr2.sort(nonDecreasing)];
};
