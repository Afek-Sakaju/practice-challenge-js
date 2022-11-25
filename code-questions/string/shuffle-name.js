/* Write a function that accepts a string
(of a person's first and last name)
than returns string with the first and last name swapped. */

module.exports.shuffle = function (fullName) {
    const arr = fullName.split(' ');

    return arr.length > 1 ? arr[1] + ' ' + arr[0] : fullName;
};
