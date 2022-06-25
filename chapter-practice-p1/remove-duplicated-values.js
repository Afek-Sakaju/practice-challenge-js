//Q12: "How are duplicates removed from an array without using any library?"

module.exports.removeDuplicated = function (arr) {
    const obj = {};
    const dupsArray = [];

    for (const char of arr) {
        if (!obj.hasOwnProperty(char)) {
            dupsArray.push(char);
            obj[char] = false;
        }
    }

    return dupsArray;
};

//alternative way (using Set):
module.exports.removeDuplicatedAlt = function (arr) {
    const set1 = new Set();
    const result = [];

    for (const char of arr) {
        set1.add(char);
    }

    for (const [key, value] of set1.entries()) {
        result.push(value);
    }

    return result;
};
