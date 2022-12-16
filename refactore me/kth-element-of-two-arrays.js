/* Given two sorted arrays arr1 and arr2 
of size N and M respectively and an element K. 
The task is to find the element that would be 
at the k’th position of the final sorted array.

Example 1:

Input:
arr1[] = {2, 3, 6, 7, 9}
arr2[] = {1, 4, 8, 10}
k = 5

Output:
6

Explanation:
The final sorted array would be -
1, 2, 3, 4, 6, 7, 8, 9, 10
The 5th element of this array is 6.

Example 2:

Input:
arr1[] = {100, 112, 256, 349, 770}
arr2[] = {72, 86, 113, 119, 265, 445, 892}
k = 7

Output:
256

Explanation:
Final sorted array is - 72, 86, 100, 112,
113, 119, 256, 265, 349, 445, 770, 892
7th element of this array is 256.

Your Task:  
You don't need to read input or print anything. 
Your task is to complete the function kthElement() 
which takes the arrays arr1[], arr2[], its size N and M 
respectively and an integer K as inputs and returns the 
element at the Kth position.

Expected Time Complexity: O(Log(N) + Log(M))
Expected Auxiliary Space: O(Log (N)) */

module.exports.kthElement = function (arr1, arr2, k) {
    if (k > arr1.length + arr2.length || k <= 0) return;

    k--; // k relates to place (place - 1 = index)
    if (!arr1.length) return arr2[k];
    if (!arr2.length) return arr1[k];

    let middle1 = Math.floor(arr1.length / 2);
    let middle2 = Math.floor(arr2.length / 2);

    while (k !== middle1 + middle2) {
        switch (true) {
            case k > middle1 + middle2:
                if (
                    arr1[middle1] > arr2[middle2] ||
                    arr1[middle1 + 1] === undefined ||
                    arr1[middle1] === undefined
                ) {
                    middle2++;
                } else middle1++;
                break;
            default:
                if (arr1[middle1] > arr2[middle2] || middle2 === 0) middle1--;
                else middle2--;
        }
    }

    return Math.min(arr1[middle1], arr2[middle2]);
};
