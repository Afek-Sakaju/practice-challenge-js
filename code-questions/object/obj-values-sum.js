// Q: write a function that accepts object and return all his values sum
module.exports.objectValueSum = function (obj) {
    return (sum = Object.values(obj).reduce(
        (total, value) => total + value,
        0
    ));
};
