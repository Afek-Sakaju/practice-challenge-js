/* Part-1: Write a function that accept two numbers, then returns the
biggest possible number to divide by both of them */

function biggestDivider(num1, num2) {
    if (num1 === 0 || num2 === 0) return 0;

    let divider = Math.max(num1, num2);

    while (divider--) {
        let result1 = num1 % divider;
        let result2 = num2 % divider;

        if (result1 === 0 && result2 === 0) return divider;
    }
}

/* Part-2: Write a function that accept two numbers, then returns the
smallest possible positive number that is divided by both of them */

function smallestDividedNum(num1, num2) {
    if (num1 === 0 || num2 === 0) return -1;

    for (let i = 1; i < 100; i++) {
        let divided = Math.max(num1, num2) * i;

        let result1 = divided % num1;
        let result2 = divided % num2;

        if (result1 === 0 && result2 === 0) {
            return divided;
        }
    }
    return -1;
}
