function moneyCounter(sum){
    if(sum > 1500 || sum < 1) {
        return -1;
    }    
    let arr = [1000, 500, 200, 100, 50];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        while (sum - arr[i] >= 0) {
            sum -= arr[i];
            count++;
        }
    }
    return count;
}

console.log(moneyCounter(1000));