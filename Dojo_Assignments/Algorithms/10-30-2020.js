/* 
    Visualization https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
    Create a function that uses yesterday’s partition to fully sort an nums in-place.
    Unstable sort
    Time Complexity
        - Best: O(n log(n)) linearithmic
        - Average: O(n log(n)) linearithmic
        - Worst: O(n^2) quadratic
    Space: O(1) constant
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the nums to partition
    Steps:
        - start by partitioning the full nums (use the previously built partition algo)
        - then partition the left side of the nums (left of the returned partition idx) and the right side (right of the returned partition idx), recursively
*/

function swap(nums, Li, Ri) {
    var temp = nums[Li];
    nums[Li] = nums[Ri];
    nums[Ri] = temp;
}

function partition (nums, left, right) {
    var pivot = nums[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i<=j) {
        while (nums[i] < pivot) {
            i++;
        }
        while (nums[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(nums, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(nums, left, right){
    var index;
    if (nums.length > 1) {
        index = partition(nums, left, right);
        if (left < index - 1) {
            quickSort(nums, left, index - 1);
        }
        if (index < right) {
            quickSort(nums, index, right);
        }
    }
    return nums;
}


var arr = [2,5,3,6,9,5,13,7,8,100];
var funCall = quickSort(arr, 0, arr.length-1);
console.log(funCall);
