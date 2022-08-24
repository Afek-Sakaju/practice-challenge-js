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

//module.exports.
genIp = function (str) {
    if (str.length < 4) return -1;

    let i = 0;
    let strInArr = str.split('');
    const result = [];
    const arr = [];
    const excessCalc = function () {
        return strInArr.length - (4 - arr.length);
    };

    while (i <= 4) {
        let strInArr = str.split('');
        let j = 0;
        while (i > j) {
            arr.push(strInArr.splice(0, 1).join(''));
            j++;
        }

        let excessNums = excessCalc();
        while (strInArr.length > 0) {
            while (excessNums > 0) {
                excessNums = excessCalc();

                if (excessNums <= 3) {
                    arr.push(strInArr.splice(0, excessNums + 1).join(''));
                } else if (excessNums > 3) {
                    arr.push(strInArr.splice(0, 4).join(''));
                }
            }
            arr.push(strInArr.splice(0, 1));
        }
        result.push(arr.join('.'));
    }
    console.log(`res:${result},strArr:${strInArr}`);
};

genIp('123332');
