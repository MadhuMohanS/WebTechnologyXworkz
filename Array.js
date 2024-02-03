var ages=[34,20,30,50];
for(let i=0;i<ages.length;i++){
console.log(ages[i])
}
ages[1]=10;
console.log(ages)
let index=ages.push(60);//add element to last index
console.log(ages);
console.log(index);

let element= ages.pop(60);
console.log(element)

ages.unshift(1);
console.log(ages);

ages.shift();
ages.shift();
console.log(ages);

let array=[10,20,30,40,50];
console.log(array);
let newAr=array.slice(3);
console.log(newAr);

array.splice(0,2,1,2,3,4);
console.log(array)

//push:adds element to the first
//pop:deletes element of the last
//unshift:adds the element to the first
//shift:removes elelemt of the first
//slice:it will return new subarray
//splice:it will delete some elements in specified range and add some elements to the array