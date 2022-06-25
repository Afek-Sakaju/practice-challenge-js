// Q4: "How do you count the occurrence of a given character in a string?"

module.exports.countCharacters = function (str) {
    const obj = {};

    for (const char of str) {
        if (obj.hasOwnProperty(char)) obj[char]++;
        else obj[char] = 1;
    }

    return obj;
};

//alternative way using reduce:
module.exports.countCharactersReduce = function (str) {
    return str
        .split('')
        .reduce((obj, c) => ({ ...obj, [c]: (obj[c] || 0) + 1 }), {});
};
