/* Q: Write a function that accept 3 params: 
object, path(string), defaultValue(string).
The function should return the value from the 
object using the provided path, if the path is 
undefined, return the defaultValue

For example: 

const obj = {a:{c:8}}
input: (obj ,'a.c' , 'NoMeaning')
output: 8 */

module.exports.getLodash = function (obj, path, defaultValue = undefined) {
    if (!obj) return defaultValue;
    let value = obj;

    const keys = path?.split('.') ?? [];

    for (const key of keys) {
        value = value[key];
        if (value === undefined) return defaultValue;
    }

    return value;
};
