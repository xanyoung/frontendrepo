function anagramChecker(str1, str2) {
    let arr1 = str1.split('').sort();
    let arr2 = str2.split('').sort();

    if(str1.length == str2.length){
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

console.log(anagramChecker('gallery', 'allergy'))