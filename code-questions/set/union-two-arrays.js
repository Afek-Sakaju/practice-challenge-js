/* Given two arrays arr1[] and arr2[].
Your task is to find union count between these two arrays.
Union of the two arrays can be defined as the set containing 
distinct elements from both the arrays. 
If there are repetitions, then only one occurrence of element 
should be in the union.

Expected Time Complexity : O((n+m)log(n+m))
Expected Auxilliary Space : O(n+m) */

module.exports.doUnion = function (arr1, arr2) {
    const { size } = new Set([...arr1, ...arr2]);
    return size;
};
