/*
Given two sorted arrays arr1[] and arr2[] 
of sizes n and m 
in non-decreasing order.
 Merge them in sorted order 
 without using any extra space. 
Modify arr1 so that it contains the 
first N elements and 
modify arr2 so that it contains the
last M elements.
*/

function mergeWithoutExtraSpace(arr1,arr2) {
  if(!arr1.length) return arr2.slice(0);
  if(!arr2.length) return arr1.slice(0);

  const result = [];
  let i = 0, j = 0;

  while (i < arr1.length || j < arr2.length) {
    const a = arr1[i];
    const b = arr2[j];

    if(a === undefined){
      result.push(b);
      j++;
      continue;
    }

    if(b === undefined){
      result.push(a);
      i++;
      continue;
    }

    if(a <= b) {
      result.push(a);
      i++;
    }
    else {
      result.push(b);
      j++;
    }
  }

  return result;
}

module.exports = mergeWithoutExtraSpace;