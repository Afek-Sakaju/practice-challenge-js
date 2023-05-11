function areNumbersValid(...numbers) {
    return numbers.every((num) => typeof num === 'number');
}

class Calculator {
    static minus(num1, num2) {
        if (!areNumbersValid(num1, num2)) return;
        return num1 - num2;
    }

    static plus(num1, num2) {
        if (!areNumbersValid(num1, num2)) return;
        return num1 + num2;
    }

    static double(num1, num2) {
        if (!areNumbersValid(num1, num2)) return;
        return num1 * num2;
    }

    static divide(num1, num2) {
        if (!areNumbersValid(num1, num2)) return;
        return num1 / num2;
    }
}

console.log(Calculator.plus(10, 8));

console.log(Calculator.divide(10));

console.log(Calculator.minus('10', 8));
