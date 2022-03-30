                                                 // R: O(N)      M: O(1)
module.exports.missingNumber_NLOGN = function (nums) { // R: O(N*logN) M: O(N)
    const sortedNums = nums.slice(0).sort(); // O(N) + O(N*logN)
    const positiveNums = sortedNums.filter(n => n > 0); // O(N)
    let c = 1;
    for(const n of positiveNums){ // O(N)
        if(n === c) c++;
        else return c;
    }
    return c;
}

module.exports.missingNumber_N = function (nums) { // R: O(N) M: O(N)
    nums = nums.filter(n => n > 0); // O(N)
    const exists = new Array(nums.length).fill(0); // O(N)
    for(const n of nums){ // O(N)
        if(n-1 < exists.length) exists[n-1] = 1;
    }
    const missingIndex = exists.find(n => !n); // O(N)
    return missingIndex
        ? missingIndex + 1
        : exists.length + 1;
}

module.exports.missingNumber = function (nums) { // R: O(N) M: O(1)
    for(let i = nums.length-1; i >= 0; i--) { // O(N)
        if(nums[i] <= 0) nums.splice(i, 1);
    }

    for(let i = nums.length-1; i >= 0; i--) { // O(N)
        if(nums[i] > nums.length) nums.splice(i, 1);
    }

    let i = 0;
    while(i < nums.length) { // 2*O(N)
        if(nums[i] === i + 1) {
            i++;
            continue;
        }

        let k = nums[i];
        let j = nums[k-1];

        if(k === j) i++;
        else {
            // swap
            nums[i] = j;
            nums[k-1] = k;
        }
    }

    let c = 1
    for(const n of nums) { // O(N)
        if(n === c) c++;
    }

    return c;
}