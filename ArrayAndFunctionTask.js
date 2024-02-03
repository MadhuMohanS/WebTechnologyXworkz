let ages=[10,20,30,40,50];
console.log(ages);
let index=ages.push(1);
console.log("pushed element at:",index);
console.log(ages);
let element=ages.pop();
console.log("poped element:"+element);
console.log(ages);

element=ages.shift();
console.log("removes first element:",element);
console.log(ages)

let newArrLength=ages.unshift(100);
console.log("the new array length:",newArrLength);
console.log(ages)

let newArr=ages.slice(1,4);
console.log(newArr);
console.log(ages);

ages.splice(0,2,1,2,3,4);
console.log(ages);

function add(a,b){
    return a+b;
}
console.log("add:",add(2,1));

function subtract(a,b){
    return a-b;
}
console.log("subtract:",subtract(8,6));

function mul(a,b){
    return a*b;
}
console.log("multiplication:",mul(3,4));

function div(a,b){
    return a/b;
}
console.log("division:",div(6,3))

function mod(a,b){
    return a%b;
}
console.log("modulus:",mod(4,3))

function power(a,b){
    return a**b;
}
console.log("power:",power(2,2));