/* Warm-up Q5: "Write recoursive function that prints 
all numbers in array from the start to the end"*/

function printAll(arr, i = 0) {
    if (i === arr.length) return;

    console.log(arr[i]);

    return printAll(arr, i + 1);
}

printAll([-1, 2, 5, 8, 9, -50]);
