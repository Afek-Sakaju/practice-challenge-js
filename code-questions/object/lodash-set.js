/* Q: Write a function that accept 3 params: 
object, path(string), val(string).
The function should modify the value from the 
object using the provided path, if the path inside 
is undefined, create it and insert in it the val
For example: 

const obj = {a:{c:8}};

input:  
    setLodash(obj ,'a.c' , 1)
result: 
    obj modified to - {a:{c:1}} */

module.exports.setLodash = function (initialObj, path, val) {
    if (!initialObj) initialObj = {};

    let obj = initialObj;

    const keys = path?.split('.') ?? [];

    for (const key of keys.slice(0, -1)) {
        if (obj[key] === undefined) {
            obj[key] = {};
        }
        obj = obj[key];
    }

    const lastPath = keys[keys.length - 1];
    obj[lastPath] = val;

    return initialObj;
};
