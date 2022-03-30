module.exports.subarraySum_ON = (arr, N, sum) => {
    let c = 0, l = 0, r = 0;

    while (r < N && l < N){
        if(r < N) c += arr[r++];
        if(c > sum) {
            c -= arr[l];
            l++;
        }
        if(c === sum) return [l+1, r];
    }

    return -1;
}


module.exports.subarraySum_ON2 = (arr, N, sum) => {
    let c = 0,r = 0,l = 0;

    while (l < N) {
        c += arr[r];
        if(isNaN(c)) break;

        if(c > sum) {
            l++;
            r = l;
            c = 0;
        }
        else if(c === sum) return [l+1, r+1];
        else r++;
    }
    return -1;
}