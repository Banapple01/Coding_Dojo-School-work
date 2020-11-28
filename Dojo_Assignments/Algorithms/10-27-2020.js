/* 
    - Visualization with playing cards (scroll down): https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization: https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets
    Time Complexity
        - Best:     O(n) linear when array is already sorted
        - Average:  O(n^2) quadratic
        - Worst:    O(n^2) quadratic when the array is reverse sorted
    Space: O(1) constant
    - this sort splits the array into two portions (conceptually, not literally)
    - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted
    swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/

function insertionSort(array){
    const len = array.length;
    for (let i = 0; i < len; i++) {
        let x = array[i];
        let j;
        for (j = i - 1; j >= 0 && array[j] < x; j--) {
            array[j + 1] = array[j];
        }
    array[j + 1] = x;
    }
    return array;
}
console.log(insertionSort([3,5,2,7,4,9]));