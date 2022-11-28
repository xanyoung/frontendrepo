function zeroCounter(arr){
    resArr = [];
    count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            count += 1;
        } else {
            resArr.push(arr[i]);
        }
    }

    for(let k = 0; k < count; k++){
        resArr.push(0);
    }

    return resArr;
}

console.log(zeroCounter([2,3,2,0,5,6,2,0,8]));