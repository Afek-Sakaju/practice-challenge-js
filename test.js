class Calculator {
    constructor(n1, n2){
        this.num1 = n1;
        this.num2 = n2;
    }

    add = () => {
        return this.num1 + this.num2;
    }
}
const myObj = { num1: 100, num2: 12 };
const calc = new Calculator(3,5);
console.log(calc.add())
console.log(calc.add.bind(myObj)())