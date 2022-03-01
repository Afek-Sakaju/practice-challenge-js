/**
 * This function gets an array of numbers and sort him 
 * from the smallest number
 * to the biggest number
 * 
 * @param {array} array Of numbers that the function gets in order to sort him 
 * @returns {array} array Of numbers, sorted from the smallest number to the biggest  
 */
function bubbleSort(array){
  let length = array.length;

  if(!length) return "error";

  const reg = new RegExp(/[a-zA-Z]/);
  if(reg.test(array)) return "invalid input"; 

  while(length--){

    for(let i = 0, j = 1; j <= length ; i++, j++){
      const currentValue = array[i];

      if(array[i] > array[j]){
        array[i] = array[j];
        array[j] = currentValue;
      }  
    }
  }
  return array;
}

module.exports = bubbleSort;

