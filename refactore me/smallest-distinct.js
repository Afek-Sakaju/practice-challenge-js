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
    function initDistinctCharsData(string) {
        const distinctList = {};
        for (const char of string) {
            distinctList[char] = false;
        }
        const distinctListLength = Object.values(distinctList).length;

        return { distinctList, distinctListLength };
    }

    function resetFoundDistinctData() {
        distinctFoundObject = JSON.parse(JSON.stringify(distinctList));
        distinctFoundCount = 0;
        currentSubStringLength = 0;
    }

    const subStringsFound = [];
    const { distinctList, distinctListLength } = initDistinctCharsData(str);
    let distinctFoundObject;
    let distinctFoundCount;
    let currentSubStringLength;
    resetFoundDistinctData();

    for (let i = 0; i < str.length; i++) {
        if (distinctFoundObject[char] === false) {
            distinctFoundCount++;
            distinctFoundObject[char] = true;
        }
        currentSubStringLength++;

        if (distinctListLength === distinctFoundCount) {
            subStringsFound.push(currentSubStringLength);
            resetFoundDistinctData();
        }
    }
    return Math.min(...subStringsFound);
};
