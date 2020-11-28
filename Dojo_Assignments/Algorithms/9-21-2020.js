/* 
  Array: Push Front
  Given array and an additional value, insert this 
  value at the beginning of the array. Do this 
  without using any built-in array methods.
*/

var array = [5, 7, 38, 99, 2]; // 4

function pushFront(push, array) {
    array.push(push);
    for(var i = array.length - 1; i >= 0; i--) {
        array[i +1] = array[i];
    }
    array[0] = array[array.length - 1];
    array.pop();
}
pushFront(4, array);
console.log(array);

// value   result
// temp      5 => 7 
// array    [5, 7, 38, 99, 2, 4] = > [4, 7, 38, 99, 2, 4] => 