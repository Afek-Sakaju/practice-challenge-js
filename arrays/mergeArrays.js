/**
 * function gets two sorted arrays and merges them in place
 * of the first param, in sorted order
 * without using any extra space
 * 
 * @param {Array} arr1 is an given sorted array
 * @param {Array} arr2 is an given sorted array
 * @returns {Array} arr1 that will contain both arrays given 
 * to the function in sorted order
 */
function mergeArraysInPlace(arr1, arr2){
  function compareNums(a, b){
    if(a > b) return 1;
    else if(a < b) return -1;
    else return 0;
  }
  if(arr2.length > 0){
    for(let i = 0; i < arr2.length; i++){
      arr1.push(arr2[i]);
    }
    arr1.sort(compareNums);
  }
  return arr1;
}
module.exports.mergeArraysInPlace = mergeArraysInPlace;



