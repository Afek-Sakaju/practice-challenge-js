const dec2Bin = (
    module.exports.dec2Bin = (n) => {
        return (+`${n}`).toString(2)
    }
);

const bin2dec = (
    module.exports.bin2dec = (str) => {
        return parseInt(str, 2);
    }
)

module.exports.toggleAllBitsInRange = function(N, L, R){ // O(N -> M)
    if(N <= 0) return 0;

    let binary = dec2Bin(N); // O(N)
    const l = L-1, r = R - 1;

    let i = 0;
    while (i < binary.length){ // O(M)
        if(l <= i && i <= r){
            // i =2 , '10|0|01'
            // left   '10'
            // bit       +'0' => 0 => !0 => true => +true => 1
            // right       '01'
            const left = binary.substring(0, i);
            const bit = +binary[i]
            const oppositeBit = +!bit;
            const right = binary.substring(i + 1);
            binary = `${left}${oppositeBit}${right}`;
        }

        i++;
    }

    const dec = bin2dec(binary); // O(M)
    return dec;
}