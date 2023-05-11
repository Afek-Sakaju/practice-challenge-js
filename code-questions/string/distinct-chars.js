/* Write a function that accepts string and return the string 
without repetitive chars (only distinct) */

module.exports.getDistinctChars = function (str) {
    const distinctList = {};

    for (const char of str) {
        distinctList[char] = true;
    }

    return Object.keys(distinctList).join('');
};
