module.exports.commonPrefix = function (stringList) { // ['geeksforgeeks', 'geeks', 'geek', 'geezer']
    let result = '';
    let i = 0;

    if(!stringList.length) return '-1'; // ['geeksforgeeks', 'geeks', 'geek', 'geezer'].length = 4

    while (true){
        let isBreak = false;
        //                                i
        const c = stringList[0][i]; // [*geeksforgeeks*, 'geeks', 'geek', 'geezer']
        if(!c) break;

        for(const str of stringList){ // ['gee_k_sforgeeks', 'gee_k_s', 'gee_k_', 'gee_z_er']
            if(str[i] !== c){
                isBreak = true;
                break;
            }
        }

        if(isBreak) break;
        else result += c;

        i++;
    }

    return result || '-1';
}