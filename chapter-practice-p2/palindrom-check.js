/* Q2: "How do you check if a given string is a palindrome?" 
Task2: "Find the longest palindrome in a string" 
Given a string S, find the longest palindromic substring in S.
You don't need to read input or print anything. 
Your task is to complete the function longestPalin() 
which takes the string S as input and returns 
the longest palindromic substring of S.
Expected Time Complexity: O(|S|2).
Expected Auxiliary Space: O(1). */

const isPalindrome = function (str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) return false;
    }

    return true;
};

const longestPalin = function (str) {
    let longest = str ? str[0] : '';

    for (let i = 0, j = str.length - 1; i < j; i++) {
        let sub = str.substring(i, j + 1);

        if (str[i] === str[j]) {
            if (longest.length <= sub.length) {
                longest = isPalindrome(sub) ? sub : longest;
                j = str.length - 1;
            }
        } else if (j !== i + 1) {
            j--;
            i--;
        } else j = str.length - 1;
    }

    return longest;
};

module.exports.isPalindrome = isPalindrome;
module.exports.longestPalin = longestPalin;
