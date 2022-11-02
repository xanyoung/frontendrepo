// 1

function Counter(){
    let res = 0;
    return function(){
        return res += 1;
    }
}

let test = Counter();

console.log(test());

// 2

function Sum(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}

console.log(Sum(1)(2)(3));

// 3

function GenerateFrom1To100(){
    let arr = [];
    return function(){
    if(arr.length == 100){
        return;
    }
    while(true){
        let numbers = Math.floor(1 + Math.random() * 100);
        if (!arr.includes(numbers)){
            arr.push(numbers)
            return numbers;
            }
        }
    }
}

let res = GenerateFrom1To100();
for(let i = 0; i < 100; i++){
    console.log(res());
}

// 4

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    let copy = i;
    setTimeout(function() {
    console.log('Index: ' + copy + ', element: ' + arr[copy]);
    }, 3000);
}

// or 

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//       console.log('Index: ' + i + ', element: ' + arr[i]);
// }