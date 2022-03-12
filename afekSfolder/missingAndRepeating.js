/**
 * function gets unsorted array of positive numbers
 * that finds one missing number and one number that occurs twice
 * 
 * @param {array} numbers is unsorted array of positive numbers
 * @returns {array} resultArray that contains first number that is repeating twice
 *  and second number that is missing
 */

function missingAndRepeating(numbers){ // O(N)
  let twice, missing;
  const visited = Array(numbers.length).fill(false);

  for(const n of numbers) { // O(N)
    const i = n - 1;
    if(visited[i]) twice = n;
    visited[i] = true;
  }

  const missingIndex = visited.findIndex(bit => !bit); // O(N)
  missing = missingIndex + 1;

  return [twice, missing];
}
module.exports = missingAndRepeating;

function missingAndRepeatingOptimal(numbers){ // O(N)
  let twice, missing;
  let counter = numbers.length;
  let i = 0;

  while (counter--) {
    const n = numbers[i];
    const j = n - 1;

    if(i !== j) {

      if(numbers[i] === numbers[j]){
        twice = numbers[i];
        missing = i + 1;
        break;
      }

      let t = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = t;
    }
    else {
      i++;
    }
  }

  return [twice, missing];
}
module.exports.missingAndRepeatingOptimal = missingAndRepeatingOptimal;