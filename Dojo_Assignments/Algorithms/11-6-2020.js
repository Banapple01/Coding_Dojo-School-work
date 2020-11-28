/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time
*/
function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        let num1 = array[i];
        for (let j = 0; j < array.length; j++) {
            if(array[j] + num1 == target) {
                return [i, j];
            }
        }
    }
}

//console.log(twoSum([1,3,5,4,6], 5));

function betterTwoSum(array, target) {
    let someDict = {};
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        someDict[num] = i;
    }
    for (let i = 0; i < array.length; i++) {
        let diff = target - array[i];
        if (someDict.hasOwnProperty(diff) && someDict[diff] !== i) {
            console.log(someDict);
            return [i, someDict[diff]];
        }
    }
}

console.log(betterTwoSum([2,3,5,4,6], 6));

/* 
    Given an unsorted non-empty array of integers and int k, 
    return the k most frequent elements (in any order)
    You can assume there is always a valid solution
    These example inputs are sorted for readability, but the input is 
    NOT guaranteed to be sorted and the output does NOT need to be in any specific order
    Hard Bonus: make it O(n) time
*/
function kMostFrequent(array, k){
    
}