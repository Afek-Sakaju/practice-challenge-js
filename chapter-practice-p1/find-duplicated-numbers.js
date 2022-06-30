// Q11: "How do you find the duplicate number on a given integer array?"

module.exports.findDuplicated = function (arr) {
    const obj = {};
    const duplicated = [];

    for (const char of arr) {
        if (!obj.hasOwnProperty(char)) {
            obj[char] = true;
        } else duplicated.push(char);
    }
    return duplicated;
};
/* if the question was to find duplicated number 
but to return any duplicated one time, 
i would use Set instead of array to make sure 
that any duplicated num will be in it once */
