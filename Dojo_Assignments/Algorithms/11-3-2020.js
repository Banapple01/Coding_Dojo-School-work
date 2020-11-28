// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal

*/

function diagonalDifference(matrix){
    let x = matrix[0].length; // = 4
    let y = matrix.length; // =4
    let sumLtoR=0;
    let sumRtoL=0;
    for (var i=0; i<x; i++){
        sumLtoR += matrix[i][i]
        sumRtoL += matrix[i][matrix.length-1-i]
    };
    console.log(sumLtoR)
    console.log(sumRtoL)
    return Math.abs(sumLtoR-sumRtoL);
}
    
// console.log(diagonalDifference([[1, 2, 3, 1], [4, 5, 6, 1], [7, 8, 9, 1], [5, 7, 2, 6]]))
// console.log(diagonalDifference([[1, 2, 3, 1, 6], [4, 5, 6, 1, 9], [7, 8, 9, 1, 2], [5, 7, 2, 6, 4], [7, 10, 12, 0, 5]]))
// console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

function mergeTwo(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < (arr1.length + arr2.length)) {
    
    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;
    
    if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
        merged[current] = arr1[index1];
        index1++;
    } else if(arr1[index1] !== arr2[index2]) {
        merged[current] = arr2[index2];
        index2++;
    }
    else {
        index2++;
    }

    current++;
    }

    return merged;
}

console.log(mergeTwo([1,2,3,4], [3,4,5,6]));