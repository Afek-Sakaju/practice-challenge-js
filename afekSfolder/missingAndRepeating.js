/**
 * function gets unsorted array of positive numbers
 * that finds one missing number and one number that occurs twice
 * 
 * @param {array} arr1 is unsorted array of positive numbers
 * @param {number} size of the array
 * @returns {array} resultArray that contains first number that is repeating twice
 *  and second number that is missing
 */

function missingAndRepeating(arr1, size){
  const object = {};
  const resultArray = [];

  for(let i = 0; i < size; i++){
    const nextNum = arr1[i + 1];
    const expectedNextNum = arr1[i] + 1;

    if(!resultArray[1]){
      if((arr1[0] === 1)){
        if(!(nextNum === expectedNextNum)){
          resultArray[1] = expectedNextNum; 
        }
      }
      else resultArray[1] = 1;
    }
    
    if(!object.hasOwnProperty(arr1[i])){
      object[arr1[i]] = false;
    }
    else resultArray[0] = arr1[i];
  }
  
  return resultArray;
}
module.exports = missingAndRepeating;
