/* Given an array arr of size n and an integer X. 
Find if there's a triplet in the array 
which sums up to the given integer X. 
Expected Time Complexity: O(n2)
Expected Auxiliary Space: O(1) */

module.exports.find3Numbers = function (arr, x) {
    if (arr.length < 3) return false;

    arr.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    const n = arr.length;
    let i = 0,
        j = i + 1,
        k = n - 1;

    while (true) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === x) return true;

        if (k > j + 1) {
            if (sum > x) k--;
            if (sum < x) j++;
        } else if (sum < x) i++;
        else return false;
    }
    /* the important key to solve the problem 
    is defining - k(third pointer) to start from the end, 
    and than increasing the sum compared to x, if its lower getting 
    smaller number to the sum, and the opposite case
    instead of the first intuitive solution of Brute Force */
};
