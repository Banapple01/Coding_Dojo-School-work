//Algo 1:

/* 
  Array: Min to Front
  Given an array of comparable values, move the lowest element to array’s front, 
  shifting backward any elements previously ahead of it. Do not otherwise change 
  the array’s order. Given [4,2,1,3,5] , change it to [1,4,2,3,5] and return it. 
  As always, do this without using built-in functions.
*/
function minToFront(arr) {
    var minIdx = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] < arr[minIdx])
        minIdx = i;
    }
    for(var j = minIdx; j > 0; j--) {
      var temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
    return arr[0];
}
/* var arr = [4,2,1,3,5];
console.log(minToFront(arr)); */

//Algo 2:

/* 
  Array: Remove At
  Given array and an index, remove and return the array value at that index. Do this 
  without using built-in array methods except pop().
*/

function removeAt(arr, idx) {
    for(var i = idx; i < arr.length - 1; i++) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    return arr.pop();
}
/* var arr = [4,2,1,3,5];
console.log(removeAt(arr, 2));
console.log(arr); */

function flatten2DArray(arr) { // It's easy to solve this using two for loops
    var index = 0;             // I'm trying to solve it only using one. It's better just to use two.
    var newArr = [];
    for(var i = 0; i < (arr.length); i++) {
      newArr[i] = arr[index][i];
      if(i == arr[index].length - 1){
        index++;
      }
    }
    return newArr;
}
arr = [
    [1,2,3,4],
    [2,3,4],
    [3,4,5]
];
console.log(flatten2DArray(arr));
console.log(arr);