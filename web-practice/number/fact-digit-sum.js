/* A(X) for positive integer X is 
the sum of factorials of its digits. 
For example, A(154) = 1! + 5! + 4!= 145.
Given a number N, find the minimum number X such that A(X) = N. 
You have to return a list of digits which represent the number X. 
Expected Time Complexity: O(X) where X ≤ 106
Expected Space Complexity: O(X) */

class Stack {
    items = [];
    push = (element) => this.items.push(element);
    pop = () => this.items.pop();
    isempty = () => this.items.length === 0;
    empty = () => (this.items.length = 0);
    size = () => this.items.length;
}

function factorial(n) {
    if (n === 1) return n;

    return n * factorial(n - 1);
}

module.exports.factDigit = function (num) {
    const stack1 = new Stack();
    stack1.items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = 0;
    let arr = [];

    while (true) {
        if (stack1.isempty()) return;

        let temp = stack1.pop();
        let fTemp = factorial(temp);

        if (res + fTemp <= num) {
            res += fTemp;
            arr.unshift(temp);
            if (res === num) return +arr.join('');
            else stack1.items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
    }
};
