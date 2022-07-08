// Q2: "Implement Fibonacci Sequence with memorized solution."

module.exports.memoFibo = function (n) {
    const memoized = {};

    function fibo(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;

        if (!memoized[n - 1]) memoized[n - 1] = fibo(n - 1);
        if (!memoized[n - 2]) memoized[n - 2] = fibo(n - 2);

        return memoized[n - 1] + memoized[n - 2];
    }

    return fibo(n);
};
