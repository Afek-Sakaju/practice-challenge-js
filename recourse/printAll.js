/**
 * function gets and array and prints all its variables
 * from the end to the start
 * @param {Array} arr1 is an array given to the function
 */

function printAll(arr1){
  let i = 0;
  
  function consolePrint(i){
    if(arr1.length <= i) return;

    let currentNum = arr1[i];
    console.log(currentNum);
    return consolePrint(i + 1);
  }
  consolePrint(i);   
}
/*
i didnt know how to write a test to check printed variables
so i test it myself
*/
printAll([7,5,-33,0]);