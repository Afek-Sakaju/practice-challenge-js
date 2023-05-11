/* Write a function that accepts a string 
of a person's first and last name, 
and returns string with the first and last name swapped. */

module.exports.swap = function (fullName) {
    const names = fullName?.split(' ');

    return names?.length === 2 ? names.reverse().join(' ') : fullName;
};
