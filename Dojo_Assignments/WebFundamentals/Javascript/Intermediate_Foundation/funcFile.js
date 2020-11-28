function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
//console.log(sigma(7));

function Factorial(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum *= i;
    }
    return sum;
}
//console.log(Factorial(7));

function secondToLast(arr) {
    if(arr.length > 1){
        return arr[arr.length - 2];
    }
    else{
        return null;
    }
}
//console.log(secondToLast([1,387]));

function nToLast(arr, i) {
    if(arr.length > i){
        return arr[arr.length - i];
    }
    else{
        return null;
    }
}
//console.log(nToLast([1,3,8,7], 2));

function secondLargest(arr) {
    var max = arr[0];
    var tmax = arr[0];
    if(arr.length > 2){
        for (var index = 0; index <= arr.length - 1; index++) {
            if(max < arr[index]){
                max = arr[index];
            }
        }
        for (var i = 0; i <= arr.length - 1; i++) {
            if(max > arr[i] && arr[i] > tmax){
                tmax = arr[i];
            }
        }
        return tmax;
    }
    else{
        return null;
    }
}
//console.log(secondLargest([1,3,8,7,6,9]));
/* 
function doubleTrouble(arr){
    var newArr = [];
    for (var i = 0; i < (arr.length * 2 - 1); i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i]);
        arr.shift();
    }
    console.log(newArr);
    for (var index = 0; index < newArr.length - 1; index++) {
        arr.push(newArr[index]);
    }
    arr.shift();
    return arr;
}
console.log(doubleTrouble([1,3,8,7,6,9])); */