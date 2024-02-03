var city;
var state;
function locations(city,state){
    this.city=city;
    this.state=state;
    
}
locations("banglore","Karnataka");
console.log("city:",city," state:",state);

function add(a,b){
    return a+b;
}
console.log("the addition is:",add(1,2));