/* Given an array of distinct elements of size N, the task is to rearrange 
the elements of the array in a zig-zag fashion so that the converted array 
should be in the below form: 

    arr[0] < arr[1]  > arr[2] < arr[3] > arr[4] < . . . . arr[n-2] < arr[n-1] > arr[n]. 

Example 1:
    Input: 
        N = 7 
        arr[] = {4, 3, 7, 8, 6, 2, 1} 
    Output: 
        arr[] = {3, 7, 4, 8, 2, 6, 1}
    Explanation: 
        The given array is in zig-zag pattern 
        as we can see 3 < 7 > 4 < 8 > 2 < 6 > 1

Example 2:
    Input: 
        N = 4 
        arr[] = {1, 4, 3, 2} 
    Output: 
        arr[] = {1, 4, 2, 3}
    Explanation: 
        The given array is in zig-zag pattern as we can see 1 < 4 > 2 < 3 */

module.exports.zigzagSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (i % 2) {
            if (arr[i - 1] > arr[i]) {
                const temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
            if (arr[i + 1] !== undefined && arr[i + 1] > arr[i]) {
                const temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        } else {
            if (arr[i - 1] < arr[i]) {
                const temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
            if (arr[i + 1] !== undefined && arr[i + 1] < arr[i]) {
                const temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
};
