/* Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. 
Task is to check whether a2[] is a subset of a1[] or not. 
Both the arrays can be sorted or unsorted. 
 
Example 1:

Input:
a1[] = {11, 1, 13, 21, 3, 7}
a2[] = {11, 3, 7, 1}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 2:

Input:
a1[] = {1, 2, 3, 4, 5, 6}
a2[] = {1, 2, 4}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 3:

Input:
a1[] = {10, 5, 2, 23, 19}
a2[] = {19, 5, 3}
Output:
No
Explanation:
a2[] is not a subset of a1[]
 

Your Task:  
You don't need to read input or print anything. 
Your task is to complete the function isSubset() 
which takes the array a1[], a2[], 
its size n and m as inputs 
and return "Yes" if arr2 is subset of arr1 
else return "No" if arr2 is not subset of arr1.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n) */

module.exports.isSubset = function (arr1, arr2) {
    const obj = {};
    let total = 0;

    for (const num of arr2) {
        if (!obj[num]) obj[num] = 1;
        else obj[num]++;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]] > 0) {
            obj[arr1[i]]--;
            total++;
        }
    }
    return total === arr2.length ? 'Yes' : 'No';
};
