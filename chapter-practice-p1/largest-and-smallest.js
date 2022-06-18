/* Q1:"How do you find the largest and smallest number 
in an unsorted integer array?" */

module.exports.getMaxAndMin = function (arr) {
    let min = arr[0];
    let max = arr[0];

    for (const num of arr) {
        if (min > num) min = num;
        if (max < num) max = num;
    }

    return [min, max];
};
