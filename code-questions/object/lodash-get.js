/* Write a function that accepts object, path(string), defaultValue(string).
The function should return the value from the object using the provided path, 
if the path is undefined, return the defaultValue.
Note: the function imitating the get() function from lodash.

Example: 
    Input:
        obj = {a: {c: 8}}  
        path = "a.c"
        defaultValue = "NoMeaning"
    Output:
        8 
    Explanation:
        The value inside the path a -> c in the object provided is 8 */

module.exports.getLodash = function (obj, path, defaultValue = undefined) {
    let currentValue = obj;

    const keys = path?.split('.') ?? [];
    for (const key of keys) {
        currentValue = currentValue?.[key];

        if (currentValue === undefined) {
            currentValue = defaultValue;
            break;
        }
    }

    return currentValue;
};
