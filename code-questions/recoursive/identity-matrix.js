/* Write a function that will accept matrix and 
variable X that represent x and y placements on the metrix, 
and variable size which represent the size of the matrix that you
are going to check, if the checked metrix that start from point(x,x)
on the matrix in the given size is identityMatrix return true, 
else return false.
(This is a question iv'e seen from my friend that had 
in his degree exams, i took the challange, here is my solution.) */

module.exports.identityMatrixCheck = function (mat, x, size) {
    function sliceMatrix(matrix, x, size) {
        let temp = [];
        let tempX = x;
        for (let n = 0; n < size; n++) {
            temp.push(matrix[tempX].slice(x, x + size));
            tempX++;
        }
        return temp;
    }

    function isIdentityRec(i = 0, j = 0) {
        if (i === size || j === size) return true;

        if (mat[j][i] !== 0 && i !== j) return false;

        if (mat[j][i] !== 1 && i === j) {
            return false;
        }

        return isIdentityRec(i, j + 1) && isIdentityRec(i + 1, j);
    }

    if (size > 1) {
        mat = sliceMatrix(mat, x, size);
        return isIdentityRec();
    }
    return mat[x][x] === 1;
};
