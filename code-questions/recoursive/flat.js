/* Write a function that implements the flat method of given array */

const flat = (module.exports.flat = function (list) {
    if (!Array.isArray(list)) return [list];

    let arr = [];
    for (const item of list) {
        arr = [...arr, ...flat(item)];
    }

    return arr;
});
