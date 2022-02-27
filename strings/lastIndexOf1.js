function lastIndexOf1(str){
    let result = -1;
    for(let i = str.length - 1; i >= 0 ; i--){
        if(str[i] === '1'){
            return i;
        }
    }

    return -1;
}

{
    const bitStr = '01111';
    const result = 4;
    console.log(
        `S=${bitStr}, result=${result}`,
        'output: ',
        lastIndexOf1(bitStr)
    )
}

{
    const bitStr = '0';
    const result = -1;
    console.log(
        `S=${bitStr}, result=${result}`,
        'output: ',
        lastIndexOf1(bitStr)
    )
}