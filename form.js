const dto={name:"Madhu",
password:"123"
}
console.log(dto['name']);
//objects string db jsonstringfy object to objectstring
//objectstring json.parse() objectstring to object

// for(let i=0;i<Object.keys(dto).length;i++){
// console.log(Object.keys(dto)[i]," is:",dto[Object.keys(dto)[i]]);
// }
console.log(dto);
console.log(typeof dto);//object
let string=JSON.stringify(dto);
console.log(string);//object string
console.log(typeof string);

var localStorage=localStorage.setItem("store",string);//to store into local storage

let out= localStorage.getItem("store");//fetch data from local storage
console.log("output is:",out);

var parse=JSON.parse(out);
console.log(parse.name);

// const dto1={
//     name:document.getElementById("firstName")
// }
// let string1=JSON.stringify(dto1);

// var localStorage1=localStorage1.setItem("key",string1);

// let out1=localStorage1.getItem("key");


function functionClick(){
    var fname=document.getElementById("firstName");

console.log(fname.value);

var lname=document.getElementById("lastName");
console.log(lname.value);
    // alert("this is alert function");
}