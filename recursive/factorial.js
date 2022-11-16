function* fib() {
    var current = a = b = 1;

    yield 1;

    while (true) {
        current = b;

        yield current;

        b = a + b;
        a = current;
    }
}

sequence = fib();
let res;
res = sequence.next(); //  1.  1
console.log(res);
res = sequence.next(); //  2.  1
console.log(res);
res = sequence.next(); //  3.  2
console.log(res);
res = sequence.next(); //  4.  3
console.log(res);
res = sequence.next(); //  5.  5
console.log(res);
res = sequence.next(); //  6.  8
console.log(res);
res = sequence.next(); //  7. 13
console.log(res);
res = sequence.next(); //  8. 21
console.log(res);
res = sequence.next(); //  9. 34
console.log(res);
res = sequence.next(); // 10. 55
console.log(res);


{
    function fibRec(n) {
        if (n <= 1) return n;
        return fibRec(n - 1) + fibRec(n - 2);
    }

    // console.log(fibRec(10)); // returns 55
}