export const longestFlatSequence = function (arr) {
    let counter = 0;
    let num1 = arr[0];
    let num2 = null;
    let result = [num1];

    function rec(arr, i = 1) {
        let current = arr[i];
        if (current === undefined) {
            return;
        }
        if (num2 === null) {
            if (current !== num1 && Math.abs(current - num1) === 1) {
                num2 = current;
            }
        }
        if (num2 === current || num1 === current) {
            result.push(current);
        } else {
            let prev = arr[i - 1];
            if (Math.abs(prev - current) === 1) {
                result = [prev, current];
                num1 = current;
                num2 = prev;
            } else {
                result = [current];
                num2 = null;
                num1 = current;
            }
        }
        if (result.length > counter) {
            counter = result.length;
        }
        rec(arr, i + 1);
    }
    rec(arr);
    return counter;
};
