/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
        - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
        - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization: https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/
function symmetricDifference(arrA, arrB) {
    let difference = arrA
                .filter(x => !arrB.includes(x))
                .concat(arrB.filter(x => !arrA.includes(x)));
    let union = [...new Set(difference)];
    return union;
}

console.log(symmetricDifference([1,1,2,3],[3,4,5]));
