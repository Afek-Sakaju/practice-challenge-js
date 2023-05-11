const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, [7, 7, 7], [1, [7, [7, [7]]]]];
const arr3 = [5, 5, 5, 8, 8];
const arr4 = [5, 1, 2, 9, -6];

// expected to be 4
// [1 < 2 < 3 < _4_ < 5]
const biggerThan3 = arr1.find((value) => value > 3);

// expected to be 9 (1 + 3 + 5)
// [_1_ , 2 , _3_ , 4 , _5_]
const oddNumbersCount = arr1.reduce((odds, num) => {
    return num % 2 ? odds + num : odds;
}, 0);

// expected to be true since arr1 made of numbers only
// [1, 2, 3, 4, 5]
const areAllNumbers = arr1.every((num) => typeof num === 'number');

// expected to be [1, 7, 7, 7, 1, 7, 7, 7]
const flatArr2 = arr2.flat(4);

// expected to be index 3
// [5, 5, 5, _8_, 8]
const findNumber8 = arr3.findIndex((num) => num === 8);

// expected to be index 0
// [_5_, 5, 5, 8, 8]
const findNumber5 = arr3.indexOf(5);

// expected to be index 4
// [5, 5, 5, 8, _8_]
const findLastNumber8 = arr3.lastIndexOf(8);

// expected to be false
// [1, 2, 3, 4, 5]
const isIncludes11 = arr1.includes(11);

// expected to be true
// [1, 2, 3, _4_, 5]
const isIncludes4 = arr1.includes(4);

// expected to be 5
// [1, 2, 3, 4, _5_]
const lastElement = arr1.pop();

// expected to be 1
// [_1_, 2, 3, 4, 5]
const firstElement = arr1.shift();

// [2, 3, 4, _5_]
arr1.push(5);

// [_1_, 2, 3, 4, 5]
arr1.unshift(1);

// expected to be "1, 2, 3, 4, 5"
// [1, 2, 3, 4, 5]
const strArr1 = arr1.toString();

// expected to be [-6, 1, 2, 5, 9]
// [5, 1, 2, 9, -6]
const sortedArr4 = arr4.sort((num1, num2) => num1 - num2);

// expected to be [9, 5, 2, 1, -6]
// [5, 1, 2, 9, -6]
const sortedOppositeArr4 = arr4.sort((num1, num2) => num2 - num1);

// expected to be [1]
// arr1 [1, 2, 3, 4, 5]
const splicedArr1 = arr1.splice(0, 1);

// expected to be [5, 5, 8, 8]
// arr3 [5, 5, 5, 8, 8]
const slicedArr3 = arr3.slice(1, 5);
