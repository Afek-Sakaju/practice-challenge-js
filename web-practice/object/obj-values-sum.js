// function accepts object and return all his values sum
module.exports.objectValueSum = function (obj) {
    const sum = Object.values(obj).reduce((total, value) => total + value, 0);
    return sum;
};
