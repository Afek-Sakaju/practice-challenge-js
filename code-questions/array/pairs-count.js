/* Given an array and an integer K, find the number 
of pairs of elements in the array whose sum is equal to K.

Example 1:
    Input:
        arr[] = {1, 5, 7, 1}
        K = 6
    Output: 
        2
    Explanation:
        arr[0] + arr[1] = 1 + 5 = 6 
        and arr[1] + arr[3] = 5 + 1 = 6.

Example 2:
    Input:
        arr[] = {1, 1, 1, 1}
        K = 2
    Output: 
        6
    Explanation:
        Each 1 will produce sum 2 with any 1.

Your Task:
    You don't need to read input or print anything. 
    Your task is to complete the function getPairsCount()
    which takes arr[], n and k as input parameters 
    and returns the number of pairs that have sum K.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N) */

module.exports.getPairsCount = function (arr, k) {
    let pairsCount = 0;

    const obj = arr.reduce(
        (acc, n) => ({ ...acc, [n]: (acc[n] ?? 0) + 1 }),
        {}
    );

    for (const num of arr) {
        if (k - num === num) {
            if (obj[k - num] > 1) {
                pairsCount += obj[k - num] - 1;
                obj[num]--;
            }
        } else {
            if (obj[k - num] > 0) {
                pairsCount += obj[k - num];
                obj[num]--;
            }
        }
    }

    return pairsCount;
};
