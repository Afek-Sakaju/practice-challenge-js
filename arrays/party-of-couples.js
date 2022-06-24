/* In a party of N people, each person is denoted by an integer.
Couples are represented by the same number.
Find out the only single person in the party of couples. */
module.exports.partyOfCouple = function (arr) {
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
