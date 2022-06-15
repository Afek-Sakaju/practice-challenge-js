function mFibo(n) {
    const memoized = {};

    function fibo(n){
        if(n === 0) return 0;
        if(n === 1) return 1;
        if(!memoized[n-1]) memoized[n-1] = fibo(n-1);
        if(!memoized[n-2]) memoized[n-2] = fibo(n-2);
        return memoized[n-1] + memoized[n-2];
    }

    return fibo(n);
}

function fibo(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibo(n-1) + fibo(n-2);
}
function iFibo(n) {
    let i = 1;
    let prev = 0, curr = 1;
    while(i++ !== n){
        let temp = curr;
        curr = curr + prev;
        prev = temp;
    }
    return curr;
}
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
console.time('fibo timer');
console.log(mFibo(50));
console.timeEnd('fibo timer');