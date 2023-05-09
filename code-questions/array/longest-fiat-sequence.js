/* Write a function that accepts array, then returns the length
of the longest flat sequence inside the array
flat-sequence have to contain two numbers in descending
or ascending order by only 1 count, for example : 
input : [3, 3, 7, 9, 1, 2, 1, 2, 1]
output : 5
explanation : the longest flat sequence in the array
is "1, 2, 1, 2, 1" which contains 5 numbers */

module.exports.longestFlatSequence = function (arr) {
    let num1 = null;
    let num2 = null;

    let currentFlatLength = 0;
    let maxFlatLength = 0;

    arr?.forEach((currentNumber) => {
        switch (true) {
            case num1 === null:
                num1 = currentNumber;
                currentFlatLength++;
                break;
            case num2 === null && Math.abs(currentNumber - num1) === 1:
                num2 = currentNumber;
                currentFlatLength++;
                break;
            case num2 === null:
                num1 = currentNumber;
                currentFlatLength = 1;
                break;
            case currentNumber === num1 || currentNumber === num2:
                currentFlatLength++;
                break;
        }

        if (currentFlatLength > maxFlatLength) {
            maxFlatLength = currentFlatLength;
        }
    });

    return maxFlatLength;
};
