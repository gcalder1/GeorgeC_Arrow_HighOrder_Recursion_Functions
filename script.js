//+++Exercise: Functions Syntax Practice+++//

/*
1) OG Syntax:

function greet(name) {
   return "Hello, " + name + "!";
}

*/


const nameName = name => `Hello, ${name}!`

//or
//name => "Hello, " + name + "!";

/*
2) OG Syntax:

function square(number) {
   return number * number;
}

*/

const multiplicationNumber = number => number * number;

/*
3) OG Syntax:

function isEven(number) {
   if (number % 2 === 0) {
       return true;
   } else {
       return false;
   }
}

*/

const number1 = num => {
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}


// const num = num => num % 2 === 0 ? true : false;

//or
//you don't even need it since the function will return a true or false anyways
//because of the implicit return

//const num = num => num % 2 === 0;

//+++Exercise : Implicit Returns+++//

const square = x =>  x * x; 
console.log(square(12345))

const mulitply = (a, b) => a * b;

console.log(mulitply(2, 5))

const getMessage = () => "Welcome to JavaScript!";

console.log(getMessage())


//+++Exercise: Higher Order Functions - filter(), map(), reduce(), and find()+++//

/* filter + map
Parameters: We need to filter the array into a new array with only even numbers. 
And then, we want to use map to apply a ^2-ing to each element in the array as we
iterate through the array
 
Results: The output would be an array of numbers that would represent the parameters


Examples: 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbers = [-1, -2, 3, 4, -5, 6, 7, -8, -9, 10];

const numbers = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10];

Psuedocode:
We would want to create a copy of the OG array using filter that will ONLY contain
even numbers.

Next, we would want to use map to apply a function to each element as we iterate,
where that function would then multiply the number to itself, therefore squaring it

Finally, we would console log the new array to see an array that should only have
even numbers, where all of those even numbers are squared.

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //input = array of numbers

/* Using code from PPT
const evenNumbersSquared = numbers => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);      
    const squaredNumbers = evenNumbers.map(num => num * num);
    return squaredNumbers; <-- NEED this to return the value and use it outside of the function
};

console.log(evenNumbersSquared(numbers));
*/

const numsFiltered = numbers.filter(num => num % 2 === 0);
console.log(numsFiltered);

const numsSquared = numsFiltered.map(num => num * num);

console.log(numsSquared); //output = array of numbers that meets parameters


/* reduce
Parameters: We need to use the array of numbers that we're given (in this case
an array of prices) and apply the given discount, then return a final sum of all of
the array values 

Results: We are expected to return a SINGLE float, which would be sum of ALL of the
discounted numbers.

Examples:
const prices = [10.99, 5.49, 12.99, 8.75, 15.20];
const prices = [-10.99, -5.49, 12.99, 8.75, 15.20];
const prices = [];

Pseudocode:
Since we have an array provided, we do not need to create a variable or an array.
We would first want to create a variable that will contain the sum of everything
after the discount has been applied.
This variable will use the reduce method to add up all of the discounted value,
where we:
    - apply the reduction to the current value of the element we are at in the
    iteration of the array of numbers (prices)
    - sum that place we are in the iteration with what we have "accumulated" so far
    - bonus: since we're dealing with prices, we want to make sure we're not dealing
    with floats that have more than 2 decimal places, so we want to use math.round
    in a way to keep things to only 2 decimal places
Finally, we will console log that variable that will contain that "reduced" amount
*/

const prices = [10.99, 5.49, 12.99, 8.75, 15.20]; //input: array of floats

/* Using supplied code from PPT
const calculateDiscountedTotal = prices => {
    const discountPrice = prices.reduce((acc, curr) => {
        return Math.round((acc + (curr * .8)) * 100) / 100;
    }, 0);
    return discountPrice;
};

console.log(calculateDiscountedTotal(prices));
*/

const calculateDiscountedTotal = prices.reduce((acc, curr) => {
    // console.log(Math.round((acc + (curr * .8)) * 100) / 100); <-- To see application of function as it iterates
    return Math.round((acc + (curr * .8)) * 100) / 100;
}, 0);

console.log(calculateDiscountedTotal) //output: single float value rounded to only 2 decimal points


/* find
Parameter: We need to use the given array of strings to return the first string that
has the letter a inside of it

Results: The output should be only 1 string from the array of strings, which in this
case would be "apple"

Examples: 
const words = ["opple", "banana", "cherry", "date", "elderberry"];

const words = ["cherry", "date", "elderberry"];

const words = [];

Pseudocode: 
Create a new variable that would contain the element that is found that meets the
function's criteria (first word with the letter "a")
    - We need to create a function that breaks the word down and then checks for an
    "a". Once it finds that word with an "a", the method would cease iterating
Finally we would console log the variable contain what was found
*/

const words = ["apple", "banana", "cherry", "date", "elderberry"]; //input: array of strings

/* Using code from PPT
const findWordWithA = wordsArr => {
  const wordFound = words.find(word => word.includes("a"));
  return wordFound;
};

console.log(findWordWithA(words));
*/

const wordFound = words.find(word => word.includes("a"));

console.log(wordFound); //output: a single string from the array of strings that meets the criteria of the function

//+++Exercise: Factorial+++//

/* 
Parameter: We want to take a number input from the user and return a number that
represents the factorial value of the received number


Result: The output should be a number that takes the input number and finds the 
factorial value of the input, therefore outputing a single factorial value.

Example: 
input: 3 | output: 6 <- Because 3 * 2 * 1
input: 100 | output: 100 * 99 * 98...
input: 0 | output: 1 <- because there is one way to arrange nothing, which is just 0
input: -3 | output: 'Enter a positive number'

Pseudocode: 
We want to start off by creating a recursive function that will take a number
and then find the factorial of that number
    - The function will first check what number we're taking in. If the number
    we are taking in is 0, then we want it to return 1 because the only way
    you can arrange nothing is 1 way (!0 = 1)
    - If we don't receive 0, then we want to go ahead and return the number 
    that we give to this function and multiply it by the number the function
    is taking - 1.
        - The reason we want to do this is because factorials take a number and then
        multiply it by every other number that comes before it until you reach 0.
        The way this will happen is thanks to the recursion we're doing by calling
        the function within itself at the end.

Since we still need a way to receive numbers, to run this function against, we 
need to create a function that prompts the user to enter a number. That number is what
we will use for our factorial function.

Next, we still need to create a condition that will stop the recursion. As of right
now, the function will keep reducing the number given by 1. So we need to create
a base case that stops the factorial function, which is this case we want the 
function to stop when the number the user provides is greater than or equal to 0.
    - If the number we provide is greater than or equal to 0, then we want to
    create a variable that contains that result of whatever number the user
    provided with the function applying to that number, and then we console log
    that variable interpolated into a template literal.
    - If we do not provide a valid number (like a negative number), then we'll
    return an "error message"

*/

//Provided Code below: Break down the problem and solution arrived to below using PREPP steps

// program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x == 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// // take input from the user
// const num = prompt('Enter a positive number: ');

// // calling factorial() if num is positive
// if (num >= 0) {
//     const result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }
// else {
//     console.log('Enter a positive number.');
// }

//+++Exercise: Recusrion - Sum of An Array
/*

*/
// const arrayOfNumbers = [1, 2, 3, 4, 5, 6]; could use this

const sumOfArray = (arrayOfNumbers) => {
    if (arrayOfNumbers.length == 1){
        console.log(arrayOfNumbers);
        return arrayOfNumbers[0];
    }

    let whereWeAreAt = arrayOfNumbers.pop(); //each pop'd value is stored within this value but not this exact variable. We're storing it within the stack of recursions that this recursion has taken        

    return whereWeAreAt + sumOfArray(arrayOfNumbers);

  }

  console.log(sumOfArray([5, 4, 3, 7, 6, 10]))
  
  // Input: [1, 2, 3, 4, 5, 6]
  // Output: 21

