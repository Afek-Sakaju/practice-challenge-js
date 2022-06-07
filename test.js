function LCS(X, Y){
    const M = X.length;
    const N = Y.length;
    const c = new Array(N).fill(new Array(M).fill(0));
    const b = new Array(N).fill(new Array(M).fill(''));
    debugger
    for(let i = 1; i < N; i++){
        for(let j = 0; j < M; j++){
            if(X[j] === Y[i]){
                c[i][j] = (c[i-1][j-1])+1;
                b[i][j] = '↖';
            }
            //          '↑'   >=     '←'
            else if(c[i-1][j] >= c[i][j-1]){
                c[i][j] = (c[i-1][j]);
                b[i][j] = '↑';
            }
            //          '↑'   <      '←'
            else {
                c[i][j] = (c[i][j-1]);
                b[i][j] = '←';
            }
        }
    }

    return b;
}

function printLCS(b, X, Y, i = X.length, j = Y.length) {
    if(i === 0 || j === 0){
        return;
    }
    if(b[i][j] === '↖'){
        printLCS(b, X.substring(0, i-1), Y.substring(0, j-1), i-1, j-1);
        console.log(X[i]);
    }
    else if(b[i][j] === '←'){
        printLCS(b, X.substring(0, i), Y.substring(0, j-1), i, j-1);
    }
    else{
        printLCS(b, X.substring(0, i-1), Y.substring(0, j), i-1, j);
    }
}

const X = 'DBACA';
const Y = 'ADACB';
const b = LCS(X,Y);
printLCS(b, X, Y)