const prompt = require ("prompt-sync")();
let number = prompt(" denne le nombre:");
if (number % 3 === 0 && number % 5 === 0){
    console.log("FizzBuzz");
} else if (number % 5 === 0){
    console.log("Buzz")
} else if (number % 3 === 0){
    console.log("Fizz");
} else{
    console.log(number);
}