/* 
    http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
    Stable sort
    Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case:    O(n log(n)) linearithmic
        - Average case: O(n log(n)) linearithmic
        - Worst case:   O(n log(n)) linearithmic
    Space: O(n) linear
*/

//  steps:
//    1. create a merge function to merge two already sorted arrays into a single sorted array
//      - you do NOT need to work in place, ok to use a new array
function merge(arr1, arr2){
    let result = [], arr1Index=0, arr2Index=0;
    while((arr1Index < arr1.length) && (arr2Index < arr2.length)){
        if(arr1[arr1Index]<arr2[arr2Index]){
            result.push(arr1[arr1Index]);
            arr1Index++;
            console.log('1', arr1Index);
        }
        else{
            result.push(arr2[arr2Index]);
            arr2Index++;
            console.log('2', arr2Index);
        }
    }
    while (arr1Index < arr1.length) {
        result.push(arr1[arr1Index]);
        arr1Index++;
    }
    while (arr2Index < arr2.length) {
        result.push(arr2[arr2Index]);
        arr2Index++;
    }
    result.pop();
    return result;
}
console.log(merge([1,2,3,5,10],[4,6,7,8,9]));

//    2. create mergeSort function to sort the provided array
//      - split the array in half and recursively merge the halves using the previously created merge function
//      - splitting of arrays stops when array can no longer be split
//      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
function mergeSort(array){

}