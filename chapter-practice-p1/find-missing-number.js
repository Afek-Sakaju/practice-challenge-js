/* Q2:"How do you find the missing number 
in a given integer array of 1 to 100? */

module.exports.getMissingNum = function (arr) {
    /*i have changed arr2 length in the creation 
    (from 100 to arr.length + 1) so that the function 
    will find missing num from 1 to any number*/
    const arr2 = new Array(arr.length + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        arr2[arr[i] - 1] = arr[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === 0) return i + 1;
    }
};
