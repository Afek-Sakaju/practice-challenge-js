/* Given a string S containing only digits, 
Your task is to complete the function genIp() 
which returns a vector containing all possible 
combinations of valid IPv4 IP addresses and takes 
only a string S as its only argument. Note: Order doesn't matter.

For string 11211 the IP address possible are 
1.1.2.11
1.1.21.1
1.12.1.1
11.2.1.1

Example 1:

Input:
S = 1111
Output: 1.1.1.1
Example 2:

Input:
S = 55
Output: -1

Your Task:
Your task is to complete the function sgenIp() 
which returns a vector containing all possible combinations 
of valid IPv4 IP addresses in sorted order or -1 
if no such IP address could be generated through the input string S,
the only argument to the function.

Expected Time Complexity: O(N * N * N * N)
Expected Auxiliary Space: O(N * N * N * N) */

module.exports.genIp = function (str) {
    if (str.length < 4) return -1;

    const result = [];
    for (let i = 0; i < 4; i++) {
        while (j--) {
            arr.push(str[0]);
            str = str.substring(1);
        }

        let excessNums = str.length - (4 - arr.length);

        // to prevent push of the same string to result
        if (excessNums === 0 && i === 1) break;

        let numsInRange = true;
        while (numsInRange) {
            while (excessNums > 0) {
                if (excessNums <= 3) {
                    let current = splitedString
                        .splice(0, excessNums + 1)
                        .join('');
                    if (current > 255) {
                        numsInRange = false;
                        break;
                    }
                    arr.push(current);
                } else if (excessNums > 3) {
                    let current = splitedString.splice(0, 4).join('');
                    if (current > 255) {
                        numsInRange = false;
                        break;
                    }
                    arr.push(current);
                }
                excessNums = splitedString.length - (4 - arr.length);
            }
            if (splitedString.length === 0) break;
            arr.push(splitedString.splice(0, 1)[0]);
        }
        if (numsInRange) result.push(arr.join('.'));
    }

    return result.length ? result : -1;
};
