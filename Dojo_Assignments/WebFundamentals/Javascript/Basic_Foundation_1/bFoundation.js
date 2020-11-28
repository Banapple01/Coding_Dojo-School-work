function oneTo255() {
    var array = [];
    for (var index = 1; index <= 255; index++) {
        array.push(index);
    }
    return array;
}
//console.log(oneTo255());

function getEven1000() {
    var sum = 0;
    for (var i = 1; i < 1000; i++) {
        if(i % 2 == 0){
            sum += i;
        }
    }
    console.log(sum);
}
//console.log(getEven1000());

function sumOdd5000() {
    var sum = 0;
    for (var i = 1; i < 5000; i++) {
        if(i % 2 != 0){
            sum += i;
        }
    }
    return sum;
}
//console.log(sumOdd5000());

function iterate(array) {
    var sum = 0;
    for (var index = 0; index <= array.length - 1; index++) {
        sum += array[index];
    }
    return sum;
}
//console.log(iterate([1,2,3,4,5,6]));

function findMax(array) {
    var max = array[0];
    for (var index = 0; index <= array.length - 1; index++) {
        if(max < array[index]){
            max = array[index];
        }
    }
    return max;
}
//console.log(findMax());

function findAverage(array) {
    var average = 0;
    for (var index = 0; index <= array.length - 1; index++) {
        average += array[index];
    }
    average = average / array.length;
    return average;
}
//console.log(findAverage());

function arrayOdd() {
    var array = [];
    for (var index = 1; index <= 50; index++) {
        if(index % 2 != 0){
            array.push(index);
        }
    }
    return array;
}
//console.log(arrayOdd());

function greaterThanY(array, Y) {
    var num = 0;
    for (var index = 0; index <= array.length - 1; index++) {
        if(Y < array[index]){
            num++;
        }
    }
    return num;
}
//console.log(greaterThanY());

function squares(array) {
    for (var index = 0; index <= array.length - 1; index++) {
        array[index] *= array[index];
    }
    return array;
}
//console.log(squares());

function negatives(array) {
    for (var index = 0; index <= array.length - 1; index++) {
        if(array[index] < 0){
            array[index] = 0;
        }
    }
    return array;
}
//console.log(negatives());

function maxMinAvg(array) {
    var max = array[0];
    var min = array[0];
    var avg = 0;
    for (var index = 0; index <= array.length - 1; index++) {
        if(max < array[index]){
            max = array[index];
        }
        if(min > array[index]){
            min = array[index];
        }
        avg += array[index];
    }
    avg = avg / array.length;
    var newArr = [max,min,avg];
    return newArr;
}
//console.log(minMaxAvg());

function swapValues(array) {
    var temp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    return array;
}
//console.log(swapValues());

function numToString(array) {
    for (var index = 0; index <= array.length - 1; index++) {
        if(array[index] < 0){
            array[index] = "Dojo";
        }
    }
    return array;
}
//console.log(numToString());