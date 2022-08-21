/* Given an array arr[], its starting position l and its ending position r. 
Sort the array using merge sort algorithm.

Example 1:

Input:
N = 5
arr[] = {4 1 3 9 7}
Output:
1 3 4 7 9
Example 2:

Input:
N = 10
arr[] = {10 9 8 7 6 5 4 3 2 1}
Output:
1 2 3 4 5 6 7 8 9 10

Your Task:
You don't need to take the input or print anything. 
Your task is to complete the function merge() 
which takes arr[], l, m, r as its input parameters 
and modifies arr[] in-place such that it is sorted 
from position l to position r, and function mergeSort() 
which uses merge() to sort the array in ascending order 
using merge sort algorithm.

Expected Time Complexity: O(nlogn) 
Expected Auxiliary Space: O(n) */

// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr, l, r) {
    if (l >= r) {
        return; //returns recursively
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

// UTILITY FUNCTIONS
// Function to print an array
function printArray(A, size) {
    for (var i = 0; i < size; i++) document.write(A[i] + ' ');
}

var arr = [12, 11, 13, 5, 6, 7];
var arr_size = arr.length;

document.write('Given array is <br>');
printArray(arr, arr_size);

mergeSort(arr, 0, arr_size - 1);

document.write('<br>Sorted array is <br>');
printArray(arr, arr_size);

// This code is contributed by SoumikMondal
