//Q9:"How do you reverse an array in place in Java?"

module.exports.reverseArr = function (arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
