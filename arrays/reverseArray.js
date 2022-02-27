module.exports.reverseArrayInPlace = function (arr) { // O(N/2)
    for (
        let i = 0, j = arr.length - 1;
        i < j;
        i++, j--
    ) {
        // swap
        //   0  1  2    (i=0, j=2)
        // [ A, B, C]
        // [ C, B, C]
        // [ C, B, ?]   (temp = A)
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}