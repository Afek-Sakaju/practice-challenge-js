const {reverseArrayInPlace} = require('../arrays/reverseArray');

module.exports.reverseWords2 = str => str.split(' ').reverse().join(' ');

module.exports.reverseWords = function (str) { // O(N)
    // separate string into word list
    const list = str.split(' '); // O(N) N = 100

    // reverse list
    reverseArrayInPlace(list); // O((N/2)/2) M = ((100/2)/2=25)

    // join all word list into str
    const reverseWordStr = list.join(' '); // O(N/2) // 60

    return reverseWordStr;
}