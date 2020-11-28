console.log(hello);                                   
var hello = 'world';    
// var hello;
// console.log(hello); // undefined
// hello = 'world';

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle); // logs 'magnet'
// }

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan = 'super cool';
// function print(){// function never called
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);// 'super cool'

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food = 'chicken';
// console.log(food);// 'chicken'
// eat(); 
// function eat(){
//     food = 'half-chicken';
//     console.log(food);// 'half-chicken'
//     var food = 'gone';
// }

//mean();
//console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
//console.log(food);

// mean();// not a function
// console.log(food);// undefined?
// var mean = function() {// not allowed
//     food = "chicken";
//     console.log(food);// 'chicken'
//     var food = "fish";
//     console.log(food);// 'fish'
// }
// console.log(food);// 'fish'

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// console.log(genre);// undefined
// var genre = "disco";
// rewind();// undefined?
// function rewind() {
//     genre = "rock";
//     console.log(genre);// 'rock'
//     var genre = "r&b";
//     console.log(genre);// 'r&b'
// }
// console.log(genre);// 'r&b' = wrong 'disco' = True

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose";
// console.log(dojo);// 'san jose'
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);// 'seattle'
//     var dojo = "burbank";
//     console.log(dojo);// 'burbank'
// }
// console.log(dojo);// 'san jose'

console.log(makeDojo("Chicago", 65));
//console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// console.log(makeDojo("Chicago", 65));// dojo{ 'name' : chicago, 'students' : students, 'hiring' : true}
// console.log(makeDojo("Berkeley", 0));// error: assignment to a const variable
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }