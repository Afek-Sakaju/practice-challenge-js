/* Q14: "Party of couples " 
In a party of N people, each person is denoted by an integer.
Couples are represented by the same number.
Find out the only single person in the party of couples. 
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1) */

module.exports.findSingle = function (arr) {
    let bit = 0;

    for (const char of arr) {
        bit ^= char;
    }

    if (arr.length % 2 !== 0) {
        return bit;
    }

    return undefined;
};

module.exports.findSingleWithObject = function (arr) {
    const countObject = {};
    let singleNum = undefined;

    for (const num of arr) {
        if (countObject.hasOwnProperty(num)) {
            countObject[num] = true;
        } else countObject[num] = false;
    }

    for (let [key, value] of Object.entries(countObject)) {
        if (!value) {
            singleNum = +key;
            break;
        }
    }
    return singleNum;
};
