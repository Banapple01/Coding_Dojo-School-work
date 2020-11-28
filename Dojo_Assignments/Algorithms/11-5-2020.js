/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.
*/
function nonConsecutive(input){//   value  value+1  index of value+1
    let step1 = input.map((x,i) => [x, input[i+1], i+1]);
    console.log(step1);
    let step2 = step1.filter(([b,f,i]) => b+1 != f && f != undefined);
    console.log(step2);
    let step3 = step2.map(([a,number,index])=>({number,index}));
    return step3;
}

//console.log(nonConsecutive([1,3,4,5,7,8,9,11,14]));

function nonConsecutive(input){//   value  value+1  index of value+1
    let output = input.map((x,i) => [x, input[i+1], i+1]).filter(([b,f,i]) => b+1 != f && f != undefined).map(([a,number,index])=>({number,index}));
    return output;
}

//console.log(nonConsecutive([1,3,4,5,7,8,9,11,14]));

function noConsecutive(array){
    let newArray = [];
    for(i=1; i<array.length; i++){
        if((array[i - 1] + 1) !== array[i]){
            newArray.push({i: i, n: array[i]});
        }
    }
    return newArray;
}
console.log(noConsecutive([1,3,4,5,7,8,9,11,14]))
