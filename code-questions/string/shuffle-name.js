/* Write a function that accepts a string
of a person's first and last name and returns 
string with the first and last name swapped. */

module.exports.shuffle = function (fullName) {
    const names = fullName?.split(' ');
    if (names?.length !== 2) return fullName;

    const [first, last] = names;
    return `${last} ${first}`;
};
