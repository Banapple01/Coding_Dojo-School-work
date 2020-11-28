/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

function orderedIntersection(array1, array2){
    let array3 = array1.filter(value => array2.includes(value));
    return array3.filter((i, index) => array3.indexOf(i) === index);
}

console.log(orderedIntersection([1,2,3,3,4,4,5],[3,4,5,6,7,8]));