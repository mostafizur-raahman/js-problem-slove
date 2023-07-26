const mostFrequent = array => {
    let ans,cnt = 1,preCnt;
    array.sort();
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]){
            cnt++;
            continue;

        }
        else {
            if(preCnt > cnt ){
                cnt = 1;
                continue;
            }
            preCnt = cnt;
            cnt = 1;
            ans = array[i-1];
        }

    }
    return ans;
}
console.log(mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]));