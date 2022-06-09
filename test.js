// 𝑋=GAGTTCG
// 𝑌=AATACTG
// 𝑋𝑌=𝐴𝑇𝐶𝐺
function LCS(x,y){
    const X = x.length + 1;
    const Y = y.length + 1;
    const c = buildMatrix(X, Y, 0);
    const b = buildMatrix(X, Y, '.');
    for(let i = 1; i < X; i++){
        for(let j = 1; j < Y; j++){
            const [xi, yj] = [x[i-1], y[j-1]]
            if(xi === yj){
                c[i][j] = c[i-1][j-1] + 1;
                b[i][j] = '↖';
            }
            //          '↑'   >=     '←'
            else if(c[i-1][j] >= c[i][j-1]){
                c[i][j] = c[i-1][j];
                b[i][j] = '↑';
            }
            //          '↑'   <      '←'
            else {
                c[i][j] = c[i][j-1];
                b[i][j] = '←';
            }
        }
        console.log(`iteration ${i}`)
        printMatrix(x, y, c, b);
    }

    return b;
}

function buildMatrix(R, C, F) {
    const m = new Array(R).fill([])
    for(let i = 0; i < R; i++){
        m[i] = new Array(C).fill(F);
    }
    return m;
}

function printMatrix(x, y, ...ms) {
    let r = 0;
    let done = false
    let str = '* * ' + ms.map(i => y.split('').join(' ')).join('   * * ') + '\n';
    while (!done){
        str += ms.map((m, i) => (x[r-1] ?? '*')+ ' ' + m[r]?.join(' ') ?? '').join('\t') + '\n';
        r++;
        if(ms.every(m => m[r] === undefined)){
            done = true;
        }
    }
    console.log(str);
}

function printLCS(b, X, Y, i = X.length, j = Y.length) {
    let result = '';
    function print(b, X, Y, i, j) {
        if(i === 0 || j === 0) return;

        console.log(`Go b[${i}][${j}] = ${b[i][j]}`);

        if(b[i][j] === '↖'){
            print(b, X.substring(0, i-1), Y.substring(0, j-1), i-1, j-1);
            result += Y[j-1];
        }
        else if(b[i][j] === '←'){
            print(b, X.substring(0, i), Y.substring(0, j-1), i, j-1);
        }
        else{
            print(b, X.substring(0, i-1), Y.substring(0, j), i-1, j);
        }
    }
    print(b, X, Y, i, j)
    console.log();
    console.log('LSC is:', result);
    return result;
}

const X = 'GAGTTCG';
const Y = 'AATACTG';
printLCS(LCS(X,Y), X, Y)