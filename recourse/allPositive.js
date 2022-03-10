/**
 * the function gets array of numbers and if all 
 * the numbers are positive returns 1, else returns 0
 * 
 * @param {Array} arr1 
 * @return {Number} returns 1 if all the array numbers
 * are positive, else returns 0
 */
function allPositive(arr1){
  let i = arr1.length - 1;
  return positivity(arr1[i]);

  function positivity(currentNum){
    if(currentNum <= 0){
      return false;
    }

    if(!i) {
      return true;
    }
    else{
      positivity(arr1[i--]);
    } 
  }
}
console.log(allPositive([1,2,76,4]));