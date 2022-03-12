module.exports.towerMovement = function(matrix){
    // INIT RESULT
    let result = [];
    for(let i = 0; i < matrix.length; i++){
        result.push([]);
        for(let j = 0; j < matrix[i].length; j++){
            result[i].push(0);
        }
    }

    // MAX-RC = MAX(R,C)
    // O(R)*O(C)*O(MAX-RC)
    for(let i = 0; i < matrix.length; i++){ // O(R)
        for(let j = 0; j < matrix[i].length; j++){ // O(C)
            const bit = matrix[i][j];
            if(bit){
                for(let j = 0; j < result[i].length; j++) { // O(C)
                    result[i][j] = 1;
                }
                for(let i = 0; i < result.length; i++){ // O(R)
                    result[i][j] = 1;
                }
            }
        }
    }

    return result;
}

module.exports.towerMovementInPlace = function(matrix){ //R: O(R*C) M: O(R) + O(C)
    // INIT RESULT
    let R = {}; // O(1)
    let C = {}; // O(1)

    // collect changes data // O(R*C)
    for(let i = 0; i < matrix.length; i++){ // O(R)
        for(let j = 0; j < matrix[i].length; j++){ // O(C)
            const bit = matrix[i][j]; // O(1)
            if(bit){ // O(1)
                R[i] = true; // O(1)
                C[j] = true; // O(1)
            }
        }
    }

    // change in place // O(R*C)
    for(let i = 0; i < matrix.length; i++){ // O(R)
        for(let j = 0; j < matrix[i].length; j++){ // O(C)
            if(R.hasOwnProperty(i) || C.hasOwnProperty(j)){ // // O(1) || // O(1)
                matrix[i][j] = 1; // // O(1)
            }
        }
    }

    return matrix;
}