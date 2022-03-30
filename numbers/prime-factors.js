function isPrime(p, n = 2){
    if(p === n) return true;
    const notDivideByN = p % n !== 0;
    return notDivideByN && isPrime(p, n + 1);
}
module.exports.isPrime = isPrime;

module.exports.getPrimeFactors = function (num) {
    let p = 2, factors = [];

    while (num !== 1){
        if(num % p === 0){
            factors.push(p);
            num = num / p;
        }
        else {
            do { p++ } while (!isPrime(p));
        }
    }

    return factors;
}