const arr=[10,20,30,25,50,35];
//map function
// function double(x){
//     return x*2;
// }
// const output=arr.map(double);

// const output=arr.map(function double(x){
//     return x*2;
// })

const output=arr.map((x)=>x*2);
console.log(output);

//filter function

// function isOdd(x){
//     return x%2;
// }
// const output1=arr.filter(isOdd);

// const output1=arr.filter(function isOdd(x){
//     return x%2;
// })
const output1=arr.filter((x)=>x%2);
console.log(output1)

// const output3=arr.reduce(function sum(acc,curr){
//     acc=acc+curr;
//     return acc;
// })

// const output3=arr.reduce((acc,curr)=>{
//     return acc=acc+curr
// });

const output3=arr.reduce((acc,curr)=>acc=acc+curr)
console.log(output3)

const arr2=[1,2,3,4,5];
let out=arr2.map((x)=>x*3);
console.log(out);

out=arr2.filter((x)=>x%2===0)
console.log(out)

out=arr2.reduce((acc,curr)=>acc=acc+curr);
console.log(out);

const arr3=[6,7,8,9,10];
out=arr3.map((x)=>x/2);
console.log(out)

out=arr3.filter((x)=>x>7);
console.log(out);

out=arr3.reduce((acc,curr)=>acc=acc+curr);
console.log(out);

const arr4=[20,30,10,35,62];
function power(x){
    return x*x;
}
out=arr4.map(power);
console.log(out)

function lessThan50(x){
    return x<50;
}
out=arr4.filter(lessThan50)
console.log(out);

out=arr4.reduce(function (acc,curr){
    acc=acc+curr;
    return curr;
},1);
console.log(out);




