module.exports.mergeSort = function (initialArray) {
    return initialArray.length ? halving(initialArray) : initialArray;

    function halving(arr) {
        if (arr.length === 1) return arr;

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle, arr.length);

        return merge(halving(left), halving(right));
    }

    function merge(arr1, arr2) {
        const sortedArray = [];

        while (arr1.length || arr2.length) {
            switch (true) {
                case arr2.length === 0:
                case arr1[0] <= arr2[0]:
                    sortedArray.push(arr1.shift(0, 1));
                    break;

                case arr1.length === 0:
                case arr2[0] < arr1[0]:
                    sortedArray.push(arr2.shift(0, 1));
                    break;
            }
        }

        return sortedArray;
    }
};
