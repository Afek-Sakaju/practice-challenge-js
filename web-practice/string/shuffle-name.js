/* Function that accepts a string
(of a person's first and last name)
than returns string with the first and last name swapped. */

module.exports.shuffle = function (fullName) {
    for (let i = 0; i < fullName.length; i++) {
        if (fullName[i] === ' ') {
            let str2 = fullName.slice(i + 1);
            let str1 = fullName.slice(0, i);
            fullName = str2 + ' ' + str1;
            break;
        }
    }
    return fullName;
};
