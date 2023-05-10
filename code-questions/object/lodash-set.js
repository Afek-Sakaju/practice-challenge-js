/* Write a function that accepts object, path(string), val(string),
and modify the value in the object using the provided path, 
if the value of the path is undefined, create it and insert the val in it.

Example: 
    Input:
        obj = {a: {c: 8}}  
        path = "a.c"
        val = 1
    Output:
        obj = {a: {c: 1}}
    Explanation:
        The value inside the path a -> c was 8, after the change to val its 1 */

module.exports.setLodash = function (initialObject, path, val) {
    let currentObject = initialObject;

    const keys = path?.split('.') ?? [];
    for (const key of keys.slice(0, -1)) {
        if (currentObject[key] === undefined) currentObject[key] = {};
        currentObject = currentObject[key];
    }

    const lastPath = keys[keys.length - 1];
    currentObject[lastPath] = val;
    return initialObject;
};
