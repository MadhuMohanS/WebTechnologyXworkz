// var age;
// age=10;
// console.log(age);

// let name;
// name="madhu"
// console.log(name);

// const pi=22/7;
// console.log(pi);

var age=10;
var Age=20;
console.log(age);
console.log(Age);

//self-invoking function
(function(){
    var ref=50;console.log(ref);
}())

//named function
function add(a,b){
    return a+b;
}
let c=add(2,3);
console.log("addition is:",c)

//arrow function
const subtraction=(a,b)=>{
    return a-b;
}
let d=subtraction(5,3);
console.log("the subtraction is:",d);



