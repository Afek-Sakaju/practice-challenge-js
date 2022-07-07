/* Q12: "Toggle bits given range"
Given a non-negative number N and two values L and R. 
The problem is to toggle the bits in the range L to R
in the binary representation of N, i.e, to toggle bits 
from the rightmost Lth bit to the rightmost Rth bit. 
A toggle operation flips a bit 0 to 1 and a bit 1 to 0. 
Print N after the bits are toggled.
Expected Time Complexity: O(1)
Expected Auxiliary Space: O(1) */

module.exports.toggleAllBitsInRange = function (N, L, R) {
    if (N <= 0) return 0;

    let binNum = Number(N).toString(2);
    let arr = binNum.split('');

    for (let i = L; i <= R; i++) {
        if (arr[i] === '1') arr[i] = '0';
        else arr[i] = '1';
    }

    binNum = arr.join('');
    const dec = parseInt(binNum, 2);

    return dec;
};
