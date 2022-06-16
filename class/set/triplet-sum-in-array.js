/* Given an array arr of size n and an integer X. 
Find if there's a triplet in the array 
which sums up to the given integer X. 
Expected Time Complexity: O(n2)
Expected Auxiliary Space: O(1) */

module.exports.find3Numbers = function (arr, x) {
    if (arr.length < 3) return false
    arr.sort((a, b) => {
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })

    let limit = arr.length
    for (let i = 0; i < limit - 2; i++) {
        for (let j = i + 1; j < limit - 1; j++) {
            for (let k = j + 1; k < limit; k++) {
                let sum = arr[i] + arr[j] + arr[k]
                if (sum === x) return true

                if (sum > x) {
                    limit = k
                }
            }
        }
    }
    return false
}
