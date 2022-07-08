const memoFibo = function (num) {
    const obj = {};

    function fiboRec(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;

        if (!obj[n]) obj[n] = fiboRec(n - 1) + fiboRec(n - 2);
    }

    fiboRec(num);

    return obj[num];
};

memoFibo(5);

//accept N and return the number in the fibo series
/*
function mFibo(n) {
    const memoized = {};

    function fibo(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (!memoized[n - 1]) memoized[n - 1] = fibo(n - 1);
        if (!memoized[n - 2]) memoized[n - 2] = fibo(n - 2);
        return memoized[n - 1] + memoized[n - 2];
    }

    return fibo(n);
}*/
