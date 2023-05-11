/* Given a string 's'. The task is to find the smallest window length 
that contains all the characters of the given string at least one time.

Example 1:
    Input: 
        "AABBBCBBAC"
    Output: 
        3
    Explanation: 
        Sub-string -> "BAC"

Example 2:
    Input: 
        "aaab"
    Output: 
        2
    Explanation: 
        Sub-string -> "ab"

Example 3:
    Input: 
        "GEEKSGEEKSFOR"
    Output: 
        8
    Explanation: 
        Sub-string -> "GEEKSFOR"

Your Task:  
    You don't need to read input or print anything. 
    Your task is to complete the function findSubString() 
    which takes the string S as input and returns 
    the length of the smallest such window of the string.

Expected Time Complexity: O(256.N)
Expected Auxiliary Space: O(256) */

module.exports.findSubString = function (str) {
    function countDistinctChars(string) {
        const distinctChars = {};
        for (const char of string) {
            distinctChars[char] ||= 0;
            distinctChars[char]++;
        }

        return distinctChars;
    }
    const distinctChars = countDistinctChars(str);

    let smallestSubStrLength = 0;
    while (smallestSubStrLength === 0 && str) {
        const length = str.length;
        const firstChar = str[0];
        const lastChar = str[length - 1];

        switch (true) {
            case distinctChars[firstChar] > 1:
                distinctChars[firstChar]--;
                str = str.substring(1, length);
                break;
            case distinctChars[lastChar] > 1:
                distinctChars[lastChar]--;
                str = str.substring(0, length - 1);
                break;
            default:
                smallestSubStrLength = length;
                break;
        }
    }

    return smallestSubStrLength;
};
