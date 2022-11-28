/* Write a function that accepts array, then returns the length
of the longest flat sequence inside the array
flat-sequence have to contain two numbers in descending
or ascending order by only 1 count, for example : 
input : [3, 3, 7, 9, 1, 2, 1, 2, 1]
output : 5
explanation : the longest flat sequence in the array
is "1, 2, 1, 2, 1" which contains 5 numbers */

module.exports.longestFlatSequence = function (arr) {
    let num1 = arr[0];
    let num2 = null;

    let counter = 1;
    let max = 1;

    for (let i = 1; i < arr.length; i++) {
        switch (true) {
            case Math.abs(arr[i] - num1) === 1 && num2 === null:
                num2 = arr[i];
                counter++;
                break;
            case num2 === null:
                num1 = arr[i];
                counter = 1;
                break;
            case arr[i] === num1 || arr[i] === num2:
                counter++;
                break;
        }
        max = counter > max ? counter : max;
    }

    return arr.length ? max : 0;
};
