/* Write a function that mimics the flat method of given array
and flat the array until all its content is in one array. 

Example:
    Input:
        arr = [1, [2, [3]]]
    Output:
        flatArr = [1, 2, 3] 
    Explanation:
        After extracting all the content from the first array
        the result should be only the content in one level inside one array. */

const flat = (module.exports.flat = function (list) {
    if (!Array.isArray(list)) return [list];

    let flatArray = [];
    list.forEach((item) => {
        flatArray = [...flatArray, ...flat(item)];
    });

    return flatArray;
});
