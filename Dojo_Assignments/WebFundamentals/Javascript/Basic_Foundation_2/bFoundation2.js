function biggieSize(array) {
    for (var index = 0; index <= array.length - 1; index++) {
        if(array[index] > 0){
            array[index] = "Big";
        }
    }
    return array;
}
//console.log(BiggieSize());

function PlowRhigh(array) {
    var max = array[0];
    var min = array[0];
    for (var index = 0; index <= array.length - 1; index++) {
        if(max < array[index]){
            max = array[index];
        }
        if(min > array[index]){
            min = array[index];
        }
    }
    console.log(min);
    return max;
}
//console.log(PlowRhigh());

function p1RA(array) {
    console.log(array[array.length - 2]);
    
    for (var index = 0; index < array.length - 1; index++) {
        if(array[index] % 2 != 0){
            return array[index];
        }
    }
}
//console.log(p1RA([2,8,3,5,7]));

function dblVision(array) {
    var newArr = [];
    var int = 0;
    for (var index = 0; index <= array.length - 1; index++) {
        int = array[index];
        newArr.push(int * int);
    }
    return newArr;
}
//console.log(dblVision([2,4,6,8,10]));

function countPositives(array) {
    var num = 0;
    for (var index = 0; index <= array.length - 1; index++) {
        if(array[index] > 0){
            num++;
        }
    }
    array[array.length - 1] = num;
    return array;
}
//console.log(countPositives([1,-2,-3,4,5,6]));

function evenOdds(array) {
    var odd = 0;
    var even = 0;
    for (var index = 0; index <= array.length - 1; index++) {
        if(array[index] % 2 == 0){
            even++;
        }
        else{
            even = 0;
        }
        if(array[index] % 2 != 0){
            odd++;
        }
        else{
            odd = 0;
        }
        if(even == 3){
            print("Even more so!");
        }
        if(odd == 3){
            print("That's odd!");
        }
    }
}
//evenOdds([1,1,1,1,2,2,4,4])

function incrementSeconds(arr) {
    for (var index = 0; index <= arr.length - 1; index++) {
        if(index % 2 != 0){
            arr[index] += 1;
        }
        console.log(arr[index]);
    }
    return arr;
}
//console.log(incrementSeconds([1,-2,-3,4,5,6]));

function preLengths(array) {
    for (var index = array.length - 1; index > 0 ; index--) {
        array[index] = array[index - 1].length;
    }
    return array;
}
//console.log(preLengths(["hello", "dojosea", "awesome"]));

function addSeven(array) {
    var newArr = [];
    for (var index = 0; index <= array.length - 1; index++) {
        newArr.push(7 + array[index]);
    }
    return array;
}
//console.log(addSeven([2,4,6,8,10]));

function reverseArr(array) {
    var temp = 0;
    var lastSpot = array.length - 1;
    for (var index = 0; index < (array.length / 2); index++) {
        temp = array[index];
        array[index] = array[lastSpot - index];
        array[lastSpot - index] = temp;
    }
    return array;
}
//console.log(reverseArr([2,4,6,8,10]));

function outNegative(array) {
    var newArr = [];
    for (var index = 0; index <= array.length - 1; index++) {
        if(array[index] > 0){
            newArr.push(-array[index]);
        }
        else{
            newArr.push(array[index]);
        }
    }
    return newArr;
}
//console.log(outNegative([-2,4,6,-8,10]));

function hungry(arr) {
    var counter = 0;
    for (var index = 0; index <= arr.length - 1; index++) {
        if(arr[index] == "food"){
            print("Yummy");
            counter++;
        }
    }
    if(counter == 0){
        print("I'm hungry");
    }
    return arr;
}
//console.log(hungry([1,-2,-3,"food",5,6]));

function reverseArrOdd(array) {
    var temp = 0;
    var lastSpot = array.length - 1;
    for (var index = 0; index < (array.length / 2); index += 2) {
        temp = array[index];
        array[index] = array[lastSpot - index];
        array[lastSpot - index] = temp;
    }
    return array;
}
//console.log(reverseArrOdd([2,4,6,8,1,9,5,3,7]));

function scale(array, num) {
    for (var index = 0; index <= array.length - 1; index++) {
        array[index] *= num;
    }
    return array;
}
//console.log(scale([2,4,6,8,10], 3));