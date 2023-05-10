// Write a function that accepts object and return all his values sum
module.exports.objectValueSum = function (obj) {
    return Object.values(obj)?.reduce((total, val) => total + val, 0);
};
