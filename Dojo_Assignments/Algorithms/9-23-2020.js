/* 
  Array: Concat
  .push allowed
  Replicate JavaScript’s concat() . 
  Create a standalone function that 
  accepts two arrays. Return a new 
  array containing the first array’s 
  elements, followed by the second 
  array’s elements. Do not alter the 
  original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) 
  should return new array ['a','b',1,2] .
*/
// 1.
function concat(arr, arr2){
    var newArr = [];
    for (var i = 0; i < array.length-1; i++) {
        newArr[i] = arr[i];
    }
    for (var j = 0; j < array.length-1; j++) {
        newArr.push(arr2[j]);
    }
    return newArr;
}


/* 
  Array: Reverse
  Given a numerical array, reverse 
  the order of values, in-place. The 
  reversed array should have the same 
  length, with existing elements 
  moved to other indices so that order 
  of elements is reversed. Working 
  ‘in-place’ means that you cannot use 
  a second array – move values within 
  the array that you are given . As 
  always, do not use built-in array 
  functions such as splice() .
*/
// 2.
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
console.log(reverseArr([2,4,6,8,10]));

// 3.
function zip(arr, arr2){
    var newArr = [];
    var indexarr = 0;
    var indexarr2 = 0;
  
    for(var i=0; i<arr.length+arr2.length; i++){
      if(arr[indexarr] <= arr2[indexarr2]){
        newArr[i] = arr[indexarr];
        indexarr++;
      }
      else{
        newArr[i] = arr2[indexarr2];
        indexarr2++;
      }
    }
    return newArr;
}
  
// console.log(zip([9,22,25,27],[10,23,24,24,28]));