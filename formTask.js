const formObj={
    firstName:'Madhu Mohan',
    lastName:'S',
    gender:'male',
    dob:'17/02/1999',
    address:'btm',
    pno:9775867492,
    alternativeNumber:239678,
    password:'123'
}

console.log(formObj);
let string=JSON.stringify(formObj);
let local=localStorage.setItem("info",string);
console.log(string)

let out=JSON.parse(string);
console.log(out);

function functionClick(){
    let fname=document.getElementById("firstName")
    console.log("first name is:",fname.value);

    let lname=document.getElementById("lastName");
    console.log("last name is:",lname.value);

    let gender=document.getElementById("gender");
    console.log("gender :",gender.value);

    let dob=document.getElementById("dob");
    console.log("date of birth:",dob.value)

    let address=document.getElementById("address");
    console.log("address:",address.value);

    let pnum=document.getElementById("pnum");
    console.log("personal number:",pnum.value);

    let alnum=document.getElementById("alnumber");
    console.log("alternative number:",alnum.value);

    let password=document.getElementById("password");
    console.log("password is:",password.value);
}