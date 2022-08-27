/* Given a string 's'. The task is to find the smallest window length 
that contains all the characters of the given string at least one time.
For eg. A = aabcbcdbca, then the result would be 4 
as of the smallest window will be dbca.

Example 1:
Input : "AABBBCBBAC"
Output : 3
Explanation : Sub-string -> "BAC"

Example 2:
Input : "aaab"
Output : 2
Explanation : Sub-string -> "ab"
 
Example 3:
Input : "GEEKSGEEKSFOR"
Output : 8
Explanation : Sub-string -> "GEEKSFOR"

Your Task:  
You don't need to read input or print anything. 
Your task is to complete the function findSubString() 
which takes the string S as input and returns 
the length of the smallest such window of the string.

Expected Time Complexity: O(256.N)
Expected Auxiliary Space: O(256) */

//module.exports.
const findSubString = function (str) {
    const arr = str.split('');
    let obj = {};
    const res = [];

    for (const char of arr) {
        if (!obj.hasOwnProperty(char)) obj[char] = true;
    }
    const initialObj = obj;

    let distinctFound = 0;
    let strLength = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = arr[i + 1];

        if (obj[current] === true && current !== next) {
            obj[current] = false;
            distinctFound++;
            strLength++;
        }

        if (distinctFound === Object.entries(obj).length) {
            res.push(strLength);
            obj = initialObj;
            strLength = 0;
            distinctFound = 0;
        }
    }
    return Math.max(...res);
};

console.log(findSubString('GEEKSGEEKSFOR'));
