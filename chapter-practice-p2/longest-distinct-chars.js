/* Q5: "Longest distinct characters in string"
Given a string S, find length of the longest 
substring with all distinct characters. 
Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(K), where K is Constant. */

module.exports.longestSubstrDistinctChars = function (str) {
    const obj = {};
    let longest = 0;

    for (const char of str) {
        if (!obj.hasOwnProperty(char)) {
            obj[char] = true;
            longest++;
        }
    }

    return longest;
};
