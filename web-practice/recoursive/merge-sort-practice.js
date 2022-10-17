function mergeSort(arr) {
    if (arr.length === 1) return arr;

    const middle = ~~(arr.length / 2);

    return merge(
        mergeSort(arr.splice(0, middle)),
        mergeSort(arr)
    );
}

function merge(arr1, arr2) {
    const res = [];

    while (arr1.length > 0 || arr2.length > 0) {
        switch (true) {
            case arr2.length === 0:
            case arr1[0] < arr2[0]:
                res.push(arr1.shift());
                break;
            case arr1.length === 0:
            case arr2[0] < arr1[0]:
                res.push(arr2.shift());
                break;
        }
    }
    return res;
}

const a1 = [999, 213, 454, 7, 0, -999];
const a2 = [2, 3, 5, -7, 8, -1];
const result = merge(mergeSort(a1), mergeSort(a2));
console.log(result);
