export function merge(left, right) {
    // O(LEFT-LENGTH(N/2) + RIGHT-LENGTH(N/2) = N)
    const sorted = [];
    let l = 0;
    let r = 0;

    while (l < left.length || r < right.length) {
        const num1 = left[l];
        const num2 = right[r];

        switch (true) {
            case num1 === undefined:
            case num1 > num2:
                sorted.push(num2);
                r++;
                break;
            case num2 === undefined:
            case num1 <= num2:
                sorted.push(num1);
                l++;
                break;
        }
    }

    return sorted;
}

export function mergeSort(arr) {
    // O(N*LogN)
    // stop condition
    if (arr.length === 1) {
        return arr;
    }

    // logic step
    const middleIndex = Math.ceil(arr.length / 2);
    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex);

    // step recursive function
    return merge(mergeSort(left), mergeSort(right));
}

export function bubbleSort(arr) {
    // O(N^2)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
