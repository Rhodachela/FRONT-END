function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("Desmond Tutu"));


function reverseWord(str){
    let reverseStr = "";
    for (let i = str.length -1; i >= 0; --i){
        reverseStr += str[i];
    }
    return reverseStr;
}
console.log(reverseWord("Desmond Tutu"))
console.log(reverseWord("Rodah Chelangat"))


function findLargestNumber(arr){
    return Math.max(...arr);
}
console.log(findLargestNumber([3, 5, 90, 200, 453]))

function findingLargestNum(arr){
    let largest = arr[0];
    for (let i =1; i <arr.length; i++){
        if (arr[i] > largest){
            largest= arr[i];
        }
    }
    return largest;
}
console.log(findingLargestNum([34, 26, 21, 567, 798]));


function isPalindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("Racecar"));

function isPalindromee(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = str.length -1;

    while (left < right){
        if (str[left] != str[right]){
            return false
        }
        left ++;
        right ++;
    }
    return true;
}
console.log(isPalindromee("Addition"));

function fizzBuzzChallenge(n){
    for (let i = 1; i <= n; i++){
        if (i % 3 ===0 && i % 5 ===0){
            console.log("Fizzbuzz");
        }
        else if (i % 3 ===0){
            console.log("Fizz");
        }
        else if (i % 5 ===0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzzChallenge(15)

function FizzBuzzRodeo(n){
    for (let i = 1; i <= n; i++ ){
        console.log(
            i %3 === 3 ? "Fizz":
            i % 5 === 0 ? "Buzz":
            i % 15 === 0 ? "Fizzbuzz":
            i
        );
    }   
}
FizzBuzzRodeo(30);

function factorialCount(n){
    if (n <= 0){
        return undefined
    }
    let result = 1;
    for (let i = 2; i <= n; i++){
        result *= i;
    }
    return result
}
console.log(factorialCount(5))

function recussiveFactorial(n){
    if (n < 0 ) return undefined;
    if (n === 0) return 1;
    return n *= recussiveFactorial(n -1);
}
console.log(recussiveFactorial(7))

function simpleCalculator(a, b, operator){
    switch(operator){
        case ("+"):
            return a + b;
        case ("-"):
            return a - b;
        case ("*"):
            return a * b;
        case ("/"):
            if (b <= 0) {
                return ("Error by division!");
            }
            return a / b;
        default :
        return "Invalid operator"
    }
}
console.log(simpleCalculator(45, 50, "*"));

quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are."
];
function randomQuotes(){
    randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
console.log(randomQuotes());
console.log(randomQuotes());
