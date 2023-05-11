/* Given an array arr[], its starting position l and its ending position r. 
Sort the array using merge sort algorithm.

Example 1:
    Input:
        N = 5
        arr[] = {4 1 3 9 7}
    Output:
        1 3 4 7 9

Example 2:
    Input:
        N = 10
        arr[] = {10 9 8 7 6 5 4 3 2 1}
    Output:
        1 2 3 4 5 6 7 8 9 10

Your Task:
    You don't need to take the input or print anything. 
    Your task is to complete the function merge() which takes 
    arr[], l, m, r as its input parameters and modifies arr[] in-place 
    such that it is sorted from position l to position r, 
    and function mergeSort() which uses merge() to sort the array 
    in ascending order using merge sort algorithm.

Expected Time Complexity: O(NLogN) 
Expected Auxiliary Space: O(N) */

module.exports.mergeSort = function (initialArray) {
    return initialArray.length ? halving(initialArray) : initialArray;

    function halving(arr) {
        if (arr.length === 1) return arr;

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle, arr.length);

        return merge(halving(left), halving(right));
    }

    function merge(arr1, arr2) {
        const sortedArray = [];

        while (arr1.length || arr2.length) {
            switch (true) {
                case arr2.length === 0:
                case arr1[0] <= arr2[0]:
                    sortedArray.push(arr1.shift(0, 1));
                    break;
                case arr1.length === 0:
                case arr2[0] < arr1[0]:
                    sortedArray.push(arr2.shift(0, 1));
                    break;
            }
        }

        return sortedArray;
    }
};
