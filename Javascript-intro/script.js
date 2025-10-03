
// let user = "John",
//     age = 24,
//     ethnicity = "Black-American";
// alert(user + " is " + age + " and is " + ethnicity)

// let admin, name;
// name = "John",
// admin = name;
// alert(admin)

// let planet = "Earth";
// alert(`Hello from, ${planet}`);

// let isGreaterNumber = 4 > 5;
// alert(isGreaterNumber)

// let age = prompt('How old are you?', '');
// alert(`You are ${age} years old`)

// let name = prompt("What is your name?", '')
// alert(`My name is ${name}`)


// console.log("Hello there, I am glad you're doing good!");
// alert(Boolean(" "))

// switch(25) {
//     case 20:
//         console.log("False of course!");
//         break;
//     case 5:
//         console.log("It is trueeee!");
//         break;
//     default:
//         console.log("The value was expecting the unexpected!")

// }

// let iterationCount = 1;
// while (iterationCount <= 5 ){
//     if (iterationCount === 3){
//         console.log("Iteration skipped")
//         break;
//     }

//     console.log(`Loop ${iterationCount}.`);
//     iterationCount++;
// }
// console.log("Loop Ended.");

// for( let i = 0; i < 3; i++ ) {
//   console.log( "This loop will run three times.")
// }

// function Add(x, y) {
//     console.log(x + y **2);
// };
// Add(2, 3)

function Adding(myParameter) {
    console.log(`The value is ${myParameter}`);

}
Adding(20);

// function Doing(){
//     console.log(arguments)
// }
// Doing(3, true, "My G string")

// const myVariable = function(){
//     console.log("This is good work, Chelangat!")
// };
// myVariable();

// function MyFunction(){

// }
// const myObject = new MyFunction();
//  console.log(typeof myObject);

function Housering(){
    this.myProperty = true;
}
const myBig = new Housering();
console.log(myBig.myProperty);

const myData = () => {return 2 + 2};
console.log(myData());

// Small coding exercises:
// Reverse a string using split, reverse and join
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("Rodah Chelangat"));

// Using a for loop
function reverseStringLoop(str){
    let reversedStr = "";
    for (let i = str.length - 1; i >=0; i --){
        reversedStr += str[i];
    }
    return reversedStr;

}
console.log(reverseStringLoop("Rodah Chelangat"));

// Find the largest number in an array
// Using Math.max() with the spread operator

function findLargestArray(arr){
    return Math.max(...arr);

}
console.log(findLargestArray([3, 10, 200, 4, 18]))

// Using a loop
function findLargestNumber(arr){
    let largest = arr[0];
    for (let i =1; i < arr.length; i++){
        if (arr[1] > largest) {
            largest = arr[1];
        }
    }
    return largest;
}
console.log(findLargestArray([3, 7, 90, 45, 13]))

// Javascript code for a Palindrome checker
// Using split, reverse and join
function isPalindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str ===str.split("").reverse().join("");
}
console.log(isPalindrome("Madami"))

// Using a Two-Pointer Approach
function isPalindromeManual(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = str.length -1;

    while (left < right){
        if (str[left] != str[right]){
            return false
        }
        left ++;
        right --;
    }
    return true;
}
console.log(isPalindromeManual("Madam"))

// Javascript code for a FizzBuzz
function FizzBuzz(n){
    for (let i =1; i <= n; i++){
        if (i %3 ===0 && i % 5 ===0){
            console.log("FizzBuzz")
        }
        else if (i % 3 ===0){
            console.log("Fizz")
        }
        else if (i % 5 ===0){
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}
FizzBuzz(20)

function Adding(myParameter) {
    console.log(`The value is ${myParameter}`);

}
Adding(1777777770);

// Compact 0ne-liner
function FizzBuzzOneLine(n){
    for (let i =1; i <= n; i++){
    console.log(
        i % 5 === 0 ? "Buzz":
        i % 3 === 0 ? "Fizz":
        i % 15 === 0 ? "Fizzbuzz":
        i
    );
    }
}
FizzBuzzOneLine(30);

// Javascript code for a Factorial function
// Iterative Approach
function iterativeFunction(n){
    if (n<0) return undefined;

    let result = 1;
    for (let i = 2; i <= n; i++){
        result*= i;
    }
    return result
}
console.log(iterativeFunction(3))

// Recursive Approach
function iterativeFactorial(n){
    if (n < 0) return undefined;
    if (n === 0) return 1;
    return n * iterativeFactorial(n - 1);
}
console.log(iterativeFactorial(5))

// Javascript code for a Simple calculator (add, subtract, multiply, divide)
function calculator(a, b, operator){
    switch (operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b===0){
                return "Error! Division by zero!"
            }
            return a / b;
        default:
            return "Invalid Operator";
    }
}
console.log(calculator(30, 0, "/"))

// Javascript code for a Random quote generator
const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are."
];
function generateQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length);
    return quotes[randomIndex];
}
console.log(generateQuote())
console.log(generateQuote())