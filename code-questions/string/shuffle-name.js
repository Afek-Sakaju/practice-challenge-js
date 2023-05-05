/* Write a function that accepts a string
(of a person's first and last name)
than returns string with the first and last name swapped. */

module.exports.shuffle = function (fullName) {
    const [first, last] = fullName?.split(' ');

    return first && last ? `${last} ${first}` : fullName;
};
