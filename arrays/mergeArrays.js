/**
 * function gets two sorted arrays and their sizes
 * and merges them in sorted order without using any extra space
 * she modify arr1 that will contain the size1 elements
 * and arr2 that will contaion the size2 elements
 * 
 * @param {Array} arr1 is an given sorted array of size1
 * @param {Array} arr2 is an given sorted array of size2
 * @param {number} size1 is the size of arr1 -optional
 * @param {number} size2 is the size of arr2 -optional
 * @returns {Array} arr1 that will contain the sorted size1 elements
 * @returns {Array} arr2 that will contain the sorted size2 elements
 */

function mergeArrays(arr1, arr2,) {
  let max1 = Math.max(...arr1);
  let min2 = Math.min(arr2);
  let i = 0;

  while(min2 < max1){
    arr1.unshift(min2);
    arr2[i] = max1;
    arr1.pop();
    i++;
    max1 = Math.max(...arr1);
    min2 = Math.min(...arr2);
  }

  arr1.sort();
  arr2.sort();
  console.log(arr1);
  console.log(arr2);
  return [arr1,arr2];
}

console.log(mergeArrays([1,3,5,7],4,[0,2,6,8,9],5));
module.exports = mergeArrays;

