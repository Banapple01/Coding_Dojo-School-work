/*
  Array: Pop Front
  Given array, remove and return the value at the beginning
  of the array. Do this without using any built-in array
  methods except pop().
*/

// .pop() allows us to remove the last item of an array
// option 1 store first item and move every index forward, then pop the last
// option 2 move first item to end, then move every index forward and double pop



function poppedFront(arr) {
    if (arr.length == 0) {
        return 'This Array is Empty.';
    }
    var temp = arr[0];
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    console.log(arr);
    arr[arr.length - 1] = temp;
    console.log(arr);
    return arr.pop();
}

function poppedFront2(arr) {
    if (arr.length == 0) {
        return 'This Array is Empty.';
    }
    arr[arr.length] = arr[0]; //arr = [6,4,3,2,1,6]
    console.log(arr);
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
        console.log(arr);
    }
    var firstVal = arr.pop();
    arr.pop();
    console.log(firstVal);
    console.log(arr);
    return firstVal; //6, [4,3,2,1]
}



var myArr = [6, 4, 3, 2, 1]; // expected output 6, [4,3,2,1]
var myArr2 = [1];
var myArr3 = [];
//console.log(poppedFront2(myArr3));