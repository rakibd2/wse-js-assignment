// Problem 1: Write a function to calculate the area of a triangle.

function triangleArea(base, height) {

    return 0.5 * base * height;
    
}
let baseLength = 3;
let heightLength = 6;

let area = triangleArea(baseLength, heightLength);
console.log('Problem 1 Ans: The area of the triangle is: ' + area);

//  -----------------------------------------------------------------------------------
//  Problem 2: Write a function to convert degrees to radians.
  

function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
  }
  
  let degrees = 180;
  let radians = degToRad(degrees);
  console.log( 'Problem 2 Ans: ' +   degrees + ' degrees is equal to ' + radians + ' radians.');

//   -----------------------------------------------------------------------
//   Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function calculateFactorial(number) {
    if (number < 0) {
      return "Undefined";
    } else if (number === 0 || number === 1) {
            return 1;
    } else {
      
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial = factorial * i;
      }
      return factorial;
    }
  }
  
  let num = 4;
  let result = calculateFactorial(num);
  console.log('Problem 3 Ans: The factorial of ' + num + ' is: ' + result);

//   ----------------------------------------------------------------------------------------------------------------------------
//   Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(number) {
    if (number <= 1) {
      return false; 
    }
  
        for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
  
    return true; 
  }
  
  
  let num1 = 11;
  if (isPrime(num1)) {
    console.log('Problem 4 Ans: ' + num1 + ' is a prime number.');
  } else {
    console.log('Problem 4 Ans: ' + num1 + ' is not a prime number.');
  }

// ------------------------------------------------------------------------------------------------------------------------------
// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays(array1, array2) {
        return array1.concat(array2);
  }
  

  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  
  let mergedArray = mergeArrays(arr1, arr2);
  console.log('Problem 5 Ans: Merged Array:', mergedArray);  


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return "Problem 6 Ans: This is a leap year";
    } else {
      return "Problem 6 Ans: Not leap year";
    }
  }
  
    let testYear = 2048;
  console.log(isLeapYear(testYear));
  

//------------------------------------------------------------------------------------------------------------------------
// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
function removeDuplicates(array) {

    return [...new Set(array)];
  }
  
  
  let originalArray = [1, 1, 1, 2, 2, 3, 4, 4, 5,];
  let newArray = removeDuplicates(originalArray);
  console.log('Problem 7: Original Array:', originalArray);
  console.log('Problem 7 Ans: Array with Duplicates Removed:', newArray);
  
//-----------------------------------------------------------------------------------------------------------------------------------------
// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(fahrenheit) {
        let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  let fahrenheitTemp = 99;
  let celsiusTemperature = convertToCelsius(fahrenheitTemp);
  
  console.log('Problem 8 Ans: ' + fahrenheitTemp + '°F is equal to ' + celsiusTemperature.toFixed(2) + '°C');
  

//------------------------------------------------------------------
// Problem 9: Write a function to find the maximum of five numbers.

function findMax(num1, num2, num3, num4, num5) {
    return Math.max(num1, num2, num3, num4, num5);
  }
  
    let maxNumber = findMax(1, 2, 3, 4, 5);
  console.log('Problem 9 Ans: The maximum number is: ' + maxNumber);
  

//------------------------------------------------------------------------------
// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]  

function evenOdd(inputString) {
    let length = inputString.length;
  
    if (length % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  
  let result1 = evenOdd('JavaScript');
  let result2 = evenOdd('Hello');
  
  console.log('Problem 10 Ans: For "JavaScript": ' + result1);
  console.log('Problem 10 Ans: For "Hello": ' + result2);
  

//---------------------------------------------------------------------------------------
/*
2. What is JavaScript, and what is its primary purpose in web development?

JavaScript is a high-level, interpreted programming language primarily used for building dynamic and interactive web pages. It was initially created to make web pages more interactive and responsive to user actions. JavaScript is a key component of web development and plays a crucial role in modern web applications.


Primary Purpose in Web Development of JavaScript is represented by some key points, those are:
Enhancing User Interaction,
Client-Side Scripting,
Asynchronous Programming,
DOM Manipulation,
AJAX (Asynchronous JavaScript and XML),
Frameworks and Libraries,
Cross-Browser Compatibility,
Form Validation.


3. Explain the difference between var, let, and const when declaring variables in JavaScript.

var: Variables declared with "var" are function-scoped. This means they are only accessible within the function where they are declared. "var" can be reassigned and updated.

let: Variables declared with "let" are block-scoped. They are only accessible within the block where they are declared."let" can be reassigned, but they cannot be redeclared in the same scope.

const: Like let, variables declared with const are block-scoped. Const variable cannot be reassigned or can't be changed . They are constants. 


4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

In JavaScript, the term "scope" refers to the context in which variables are declared and the accessibility of those variables during runtime. It defines the area of the program where a variable can be accessed. Understanding scope is crucial for managing variables and preventing unintended conflicts or overwrites.

Global Scope: Variables declared outside of any function or block have global scope. Variables are accessible throughout the entire program, both inside and outside functions. They exist for the entire duration of the program.

Local Scope: Variables declared within a function or a block (if statements, loops) have local scope. Variables are only accessible within the function or block where they are declared. They exist only as long as the function or block is executing.


5. What is the difference between "null" and "undefined" in JavaScript?

Null is a value that represents the intentional absence of an object value. It is often explicitly assigned by developers to indicate no value or no object.

Undefined is a default value assigned by JavaScript to variables that have been declared but have not yet been assigned a value or to function parameters that have not been provided with a value. 

*/