class Calculator {
    static add(num1, num2) {
        return num1 + num2;
    }

    static sub(num1, num2) {
        return num1 - num2;
    }

    static multiply(num1, num2) {
        return num1 * num2;
    }

    static divide(num1, num2) {
        return num1 / num2;
    }
}

class CalculatorAdvanced extends Calculator {
    static power(num1, num2) {
        return Math.pow(num1, num2);
    }
}

const twoPlusFour = Calculator.add(2, 4);
console.log(`2 + 4: ${twoPlusFour}`);

const twoMinusFour = Calculator.sub(2, 4);
console.log(`2 - 4: ${twoMinusFour}`);

const twoFourTimes = Calculator.multiply(2, 4);
console.log(`2 * 4: ${twoFourTimes}`);

const twoDividedByFour = Calculator.divide(2, 4);
console.log(`2 / 4: ${twoDividedByFour}`);

const twoPoweredByFour = CalculatorAdvanced.power(2, 4);
console.log(`2 ^ 4: ${twoPoweredByFour}`);
