/* Given two arrays arr1[] and arr2[] 
The task is to find union between these two arrays.
Union of the two arrays can be defined as 
the set containing distinct elements from both the arrays. 
If there are repetitions, then only one occurrence 
of element should be printed in the union.

Expected Time Complexity : O((n+m)log(n+m))
Expected Auxilliary Space : O(n+m) */

module.exports.doUnion = function (arr1, arr2) {
    const uniqueOnly = new Set();

    for (const char of arr1) {
        uniqueOnly.add(char);
    }
    for (const char of arr2) {
        uniqueOnly.add(char);
    }
    return uniqueOnly.size;
};

//the key here to the solution is to use Set
