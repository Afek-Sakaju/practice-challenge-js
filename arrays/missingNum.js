//לסדר את המערך מהקטן הגדול באמצעות פונקצייה 
//לולאה שתעבור על המערך מהאינדקס הראשון עד לאחרון ותוודא שכל מספר גדול מקודמו ב1
//אם יש פער של יותר מ1 בין שני מפרים נוסיף 1 לערך באינדקס הקטן יותר וכך נגלה מה המספר החסר

function getMissingNum1(array){//running time = O(N*logN)
  let missingNum = "not found";
  const sortedArray = array.slice(0).sort();// O(N*logN)

  for(let i = 0; i < sortedArray.length-1 ; i++){//O(N)
    if(!(sortedArray[i]+1 === sortedArray[i+1])) {
      missingNum = sortedArray[i]+1;
      break;
    }
  }
  return missingNum;
}

function getMissingNum2(array){//running time = O(N)
  let missingNum;
  const seenNumbers = new Array(array.length+1).fill(0);//O(N)

  for(let i = 0; i<array.length; i++){//O(N)
    seenNumbers[array[i] - 1] = 1;
  }

  missingNum = seenNumbers.findIndex(val=>val === 0)+1;//O(N)

  return missingNum;
}

module.exports.getMissingNum = function(list){
  return getMissingNum2(list)
}