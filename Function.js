(function(){
    var ref=10;
    console.log(ref);
}())

function demo(){
    console.log("named function");
}
demo();

// Example 1
function greet() {
    console.log("Hello!");
}
greet();

// Example 2
// function calculateSum(a, b) {
//     console.log("Sum:", a + b);
// }
// calculateSum(5, 7);

// Example 3
// function sayName(name) {
//     console.log("My name is " + name);
// }
// sayName("Alice");

// Example 4
// function square(num) {
//     console.log("Square:", num * num);
// }
// square(4);

// Example 5
// function displayDate() {
//     const currentDate = new Date();
//     console.log("Current date:", currentDate.toDateString());
// }
// displayDate();

// Example 6
// function concatenateStrings(str1, str2) {
//     console.log("Concatenated:", str1 + str2);
// }
// concatenateStrings("Hello", "World");

// // Example 7
// function checkEvenOrOdd(number) {
//     console.log(number % 2 === 0 ? "Even" : "Odd");
// }
// checkEvenOrOdd(9);

// // Example 8
// function calculateAverage(numbers) {
//     const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
//     console.log("Average:", avg);
// }
// calculateAverage([10, 20, 30, 40]);

// // Example 9
// function greetPerson(firstName, lastName) {
//     console.log("Greetings,", firstName, lastName);
// }
// greetPerson("John", "Doe");

// // Example 10
// function printSquareRoot(value) {
//     console.log("Square root:", Math.sqrt(value));
// }
// printSquareRoot(25);


const fun=()=>{
    console.log("arrow function");
}
fun();
// Example 1
// const greet = () => {
//     console.log("Hello!");
// };
// greet();

// Example 2
const calculateSum = (a, b) => {
    console.log("Sum:", a + b);
};
calculateSum(5, 7);

// Example 3
const sayName = name => {
    console.log("My name is " + name);
};
sayName("Alice");

// Example 4
const square = num => {
    console.log("Square:", num * num);
};
square(4);

// Example 5
const displayDate = () => {
    const currentDate = new Date();
    console.log("Current date:", currentDate.toDateString());
};
displayDate();

// Example 6
const concatenateStrings = (str1, str2) => {
    console.log("Concatenated:", str1 + str2);
};
concatenateStrings("Hello", "World");

// Example 7
const checkEvenOrOdd = number => {
    console.log(number % 2 === 0 ? "Even" : "Odd");
};
checkEvenOrOdd(9);

// Example 8
const calculateAverage = numbers => {
    const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    console.log("Average:", avg);
};
calculateAverage([10, 20, 30, 40]);

// Example 9
const greetPerson = (firstName, lastName) => {
    console.log("Greetings,", firstName, lastName);
};
greetPerson("John", "Doe");

// Example 10
const printSquareRoot = value => {
    console.log("Square root:", Math.sqrt(value));
};
printSquareRoot(25);
