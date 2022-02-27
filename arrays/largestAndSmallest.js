// How do you find the _largest_ and _smallest_ number
// in an _unsorted integer array_?

function getMaxAndMin(numbers){
    if(
        !Array.isArray(numbers)  ||
        numbers.some(num => typeof num !== 'number')
    ) {
        throw 'Invalid Param';
    }

    const [firstValue] = numbers;
    let min = firstValue;
    let max = firstValue;

    for(const num of numbers){
        if(num < min) min = num;
        if(max < num) max = num;
    }

    return {min , max}
}

// const list = [3, 5, 2, 1, 50, 0, -13, -100];
// console.log(getMaxAndMin(list))
module.exports.getMaxAndMin = getMaxAndMin;