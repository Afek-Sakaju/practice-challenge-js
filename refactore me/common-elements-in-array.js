function commonElements(arr1, arr2, arr3) {
    let i = 0,
        j = 0,
        k = 0;

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            console.log(arr1[i]);
            i++;
            j++;
            k++;
        } else {
            switch (true) {
                case arr1[i] <= arr2[j] && arr1[i] <= arr3[k]:
                    i++;
                    break;
                case arr2[j] <= arr1[i] && arr2[j] <= arr3[k]:
                    j++;
                    break;
                case arr3[k] <= arr1[i] && arr3[k] <= arr2[j]:
                    k++;
                    break;
            }
        }
    }
    return;
}

commonElements(
    [1, 5, 10, 20, 40, 80],
    [6, 7, 20, 80, 100],
    [3, 4, 15, 20, 30, 70, 80, 120]
);

commonElements([1, 5, 5], [3, 4, 5, 5, 10], [5, 5, 10, 20]);
