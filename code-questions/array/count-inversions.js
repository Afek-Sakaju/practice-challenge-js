/* Given an array of integers. Find the Inversion Count in the array. 
Inversion Count: For an array, inversion count indicates how far 
(or close) the array is from being sorted. If array is already sorted 
then the inversion count is 0. If an array is sorted in the reverse order 
then the inversion count is the maximum. 
Formally, two elements a[i] and a[j] 
form an inversion if a[i] > a[j] and i < j.

Example 1:

Input: N = 5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: The sequence 2, 4, 1, 3, 5 
has three inversions (2, 1), (4, 1), (4, 3).

Example 2:

Input: N = 5
arr[] = {2, 3, 4, 5, 6}
Output: 0
Explanation: As the sequence is already 
sorted so there is no inversion count.

Example 3:

Input: N = 3, arr[] = {10, 10, 10}
Output: 0
Explanation: As all the elements of array 
are same, so there is no inversion count.

Your Task:
You don't need to read input or print anything. 
Your task is to complete the function inversionCount() 
which takes the array arr[] and the size of the array 
as inputs and returns the inversion count of the given array.

Expected Time Complexity: O(NLogN).
Expected Auxiliary Space: O(N). */

module.exports.inversionCount = function (arr) {
    if (!arr.length) return 0;

    let inversions = 0;
    halving(arr);

    return inversions;

    function halving(arr) {
        if (arr.length === 1) return arr;

        const mid = parseInt(`${arr.length / 2}`);
        const leftArr = arr.slice(0, mid);
        const rightArr = arr.slice(mid, arr.length);

        return merge(halving(leftArr), halving(rightArr));
    }

    function merge(arr1, arr2) {
        const result = [];

        while (arr1.length || arr2.length) {
            switch (true) {
                case arr2.length === 0:
                    result.push(arr1.shift());
                    break;
                case arr1[0] <= arr2[0]:
                    result.push(arr1.shift());
                    break;
                case arr1.length === 0:
                    result.push(arr2.shift());
                    break;
                case arr2[0] < arr1[0]:
                    result.push(arr2.shift());
                    inversions += arr1.length; // the key to solution
                    break;
            }
        }

        return result;
    }
};
