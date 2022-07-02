/* Q2: "Write recoursive function that accepts array 
and return the biggest number in it" */

module.exports.maxNum = function (arr) {
    function maxNumRec(max, i) {
        if (!i) return max;

        if (arr[i] > max) max = arr[i];

        return maxNumRec(max, i - 1);
    }

    return arr.length !== 0 ? maxNumRec(arr[0], arr.length - 1) : undefined;
};
