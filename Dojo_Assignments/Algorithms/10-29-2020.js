/* 
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be the last idx
        - later these params will be used to specify a sub section of the array to partition
        
    Steps:
        1. Pick an number out of the arr to be your pivot value
            - usually the middle idx
        2. Partition the array IN PLACE such that all values less than the pivot value are to the left of it
        and all values greater than the pivot value are to the right (not perfectly sorted)
        3. return: new idx of the pivot value or the index where the left section of smaller items ends
    "Choosing a random pivot minimizes the chance that you will encounter worst-case O(n2) performance (always choosing first or last would cause worst-case performance for nearly-sorted or nearly-reverse-sorted data). Choosing the middle element would also be acceptable in the majority of cases." https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/
array=[8,4,10,3,7,2,9];
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

console.log(partition(array))