//Exercise 1: Functions Syntax Practice

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

//Exercise 2: Implicit Returns

const square = x =>  x * x; 
console.log(square(12345))

const mulitply = (a, b) => a * b;

console.log(mulitply(2, 5))

const getMessage = () => "Welcome to JavaScript!";

console.log(getMessage())


//Exercise: Higher Order Functions - filter(), map(), reduce(), and find()

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

const wordFound = words.find(word => word.includes("a"));

console.log(wordFound); //output: a single string from the array of strings that meets the criteria of the function

/**/

