/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best:     O(n) linear when array is already sorted
        - Average:  O(n^2) quadratic
        - Worst:    O(n^2) quadratic when the array is reverse sorted
    Space: O(1) constant
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

// function bubbleSort(array) {
//     var temp = array[0];
//     for (var i = 0; i < array.length; i++) {
//         for (var j = array.length; j >= i; j--) {
//             if (array[i] > array[j]) {
//                 temp = array[j];
//                 array[j] = array[i];
//                 array[i] = temp;
//             };
//         };
//     };
//     return array;
// };

// console.log(bubbleSort([0,4,3,2,7]));

function bubbleSort(array){
    for(var i = 0; i < array.length; i++){
        for(var j = i+1; j < array.length; j++){
            if(array[i] > array[j]){
                var temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

// console.log(bubbleSort([0,2,4,3,2,9]));

// Teacher Solution

function bubbleSort01(array){
    // The key part of this sort is that we run it until it's actually
   // sorted. In order to be able to tell that, we need some variable,
   // either numerical or boolean, to keep track. We'll use a boolean in 
   // this instance

   // As mentioned previously, we're going to run our little swap session
   // until things are actually sorted, so:
    do {
       // Now, we're going to go into each loop with the assumption that
       // the array is sorted, and change it back to false if we make a swap.
        let sorted = true;

       // Now, we want to start at the 0 index, and "bubble up" to the end

       // NOTE: this for loop stops one BEFORE the last element, since we'll
       // comparing each index to the NEXT index. This will prevent errors
        for(let i = 0; i < array.length - 1; i++){
           // Let's check to see if the number at index i is greater than the
           // number at the next index
            if(array[i] > array[i+1]){
               // If it is, we need to swap sorted back to false
                sorted = false;

               // and swap the elements
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        counter++;
    } while(sorted == false)

   // If we've broken out of the while loop, then it means the array has been sorted!
    return array;
}

/* 
    https://visualgo.net/en/sorting
        
    Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1. This continues until all values are sorted.
    Unstable sort
    
    Time Complexity
        - Best:     O(n^2) quadratic
        - Average:  O(n^2) quadratic
        - Worst:    O(n^2) quadratic
    Space: O(1) constant
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example, you run selection sort for 10 iterations only to display the first 10 sorted items
*/

function selectionSort(array){
    for (var i = 0; i < array.length; i++){
        var minIndex = i;
        for (var k = i + 1; k < array.length; k++){
            if (array[k] < array[minIndex]){
                minIndex = k;
            }
        }
        var temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

console.log(selectionSort([12,3,4,7,3,5,9]));

// Teacher Solution

function selectionSort01(array){
    // The jist of selection sort is this:
    // We want to find the smallest element and move it to the first index,
    // then find the second smallest element and move it to the second index, etc. etc.

    // So, our outer for loop will run through the full array
    for(let start = 0; i < array.length; start++){
    // Now, given we want to find the smallest element, we'll
    // start by labeling our element at index 0 as the smallest
    let min = start;

    // But, unless we loop through to find the REAL smallest value,
    // we'll be stuck assuming index 0 is our smallest element.
    for(let i = start; i < array.length; i++){
        // At each index, we'll check to see if that element
        // is smaller than our previously deemed min number
        if(array[min] > array[i]){
            // If it is, let's set min to be that index
            min = i;                
        }
    }

    // After looping through from 0 to our next smallest index,
    // we'll swap that min value with the start index
    let temp = array[min];
    array[min] = array[end];
    array[end] = temp;
}

// And finally, return the array
return array;
}

