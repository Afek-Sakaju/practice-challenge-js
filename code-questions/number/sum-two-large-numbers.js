/* Given two strings denoting non-negative numbers X and Y. 
Calculate the sum of X and Y.

Example 1:
    Input:
        X = "25"
        Y = "23"
    Output:
        48
    Explanation:
        The sum of 25 and 23 is 48.

Example 2:
    Input:
        X = "2500" 
        Y = "23"
    Output:
        2523
    Explanation:
        The sum of 2500 and 23 is 2523.

Your Task:
Your task is to complete the function findSum() 
which takes two strings as inputs and returns 
the string without leading zeros. 
You do not need to take any input or print anything.

Expected Time Complexity: O(|X| + |Y|)
Expected Auxiliary Space: O(1) */

module.exports.findSum = (str1, str2) => +str1 + +str2;
