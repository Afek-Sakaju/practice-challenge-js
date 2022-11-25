/* Given an array arr[] denoting heights of N towers and a positive integer K.
For each tower, you must perform exactly one of the following operations exactly once.

- Increase the height of the tower by K
- Decrease the height of the tower by K
Find out the minimum possible difference between the height 
of the shortest and tallest towers after you have modified each tower.

Note: It is compulsory to increase or decrease the height by K for each tower. 
After the operation, the resultant array should not contain any negative integers.

Example 1:

Input:
K = 2, N = 4
Arr[] = {1, 5, 8, 10}
Output:
5
Explanation:
The array can be modified as 
{3, 3, 6, 8}. The difference between 
the largest and the smallest is 8-3 = 5.

Example 2:

Input:
K = 3, N = 5
Arr[] = {3, 9, 12, 16, 20}
Output:
11
Explanation:
The array can be modified as
{6, 12, 9, 13, 17}. The difference between 
the largest and the smallest is 17-6 = 11. 

Your Task:
You don't need to read input or print anything. 
Your task is to complete the function getMinDiff() 
which takes the arr[], n, and k as input parameters 
and returns an integer denoting the minimum difference.

Expected Time Complexity: O(N*logN)
Expected Auxiliary Space: O(N) */

module.exports.getMinDiff = function (arr, k) {
    arr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    let min = arr[0] + k;
    let max =
        k < arr[arr.length - 1]
            ? arr[arr.length - 1] - k
            : arr[arr.length - 1] + k;

    if (min < 0) return;
    /* After the operation, the resultant array 
    should not contain any negative integers. 
    so smallest number + k can't be negative */

    for (let i = 1; i < arr.length - 1; i++) {
        //loop skips the first and last number as they were already calculated
        switch (true) {
            case arr[i] - k < 0:
            case arr[i] + k < max:
                arr[i] += k;
                break;
            case arr[i] - k > min:
                arr[i] -= k;
                break;
            default:
                /* in case that adding k to current is higher than max
                and subtracting k from him is lower than min,
                take the option that leads to less difference from max to min */
                if (min - arr[i] - k > arr + k - max) arr[i] += k;
                else arr[i] -= k;
        }
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return max - min;
};

//todo refactor code
