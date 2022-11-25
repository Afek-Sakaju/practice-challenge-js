/* Given an array arr of size n and an integer X. 
Find if there's a triplet in the array which sums 
up to the given integer X.

Example 1:

Input:
n = 6, X = 13
arr[] = [1 4 45 6 10 8]
Output:
1
Explanation:
The triplet {1, 4, 8} in 
the array sums up to 13.

Example 2:

Input:
n = 5, X = 10
arr[] = [1 2 4 3 6]
Output:
1
Explanation:
The triplet {1, 3, 6} in 
the array sums up to 10.

Your Task:
You don't need to read input or print anything. 
Your task is to complete the function find3Numbers() 
which takes the array arr[], the size of the array (n) 
and the sum (X) as inputs and returns True if there exists 
a triplet in the array arr[] which sums up to X and False otherwise.


Expected Time Complexity: O(n2)
Expected Auxiliary Space: O(1) */

module.exports.find3Numbers = function (arr, x) {
    arr.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    for (let i = 0, j = 1, k = arr.length - 1; j < k; ) {
        let sum = arr[i] + arr[j] + arr[k];

        switch (true) {
            case sum === x:
                return true;
            case sum > x:
                k--;
                break;
            case sum - arr[j] + arr[j + 1] > x:
                if (i + 1 !== j) i++;
                else k--;
                break;
            default:
                j++;
        }
    }

    return false;
};
