// 1. Comment Your JavaScript Code
// This is an in-line comment.
/* This is a
multi-line comment */

// 2. Declare JavaScript Variables
var myName;

// 3. Storing Values with the Assignment Operator
var a;
a = 7;

// 4. Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

// 5. Initializing Variables with the Assignment Operator
var myVar = 0;
var a = 9;

// 6. Declare String Variables
var myFirstName = "Dima";
var myLastName = "Gargalyk";

// 7. Understanding Uninitialized Variables
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";

// 8. Understanding Case Sensitivity in Variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9. Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// 10. Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact);

// 11. Add Two Numbers with JavaScript
const sum = 10 + 10;

// 12. Subtract One Number from Another with JavaScript
const difference = 45 - 33;

// 13. Multiply Two Numbers with JavaScript
const product = 8 * 10;

// 14. Divide One Number by Another with JavaScript
const quotient = 66 / 33;

// 15. Increment a Number with JavaScript
let myVar = 87;
myVar++;

// 16. Decrement a Number with JavaScript
let myVar = 11;
myVar--;

// 17. Create Decimal Numbers with JavaScript
const myDecimal = 5.7;

// 18. Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;

// 19. Divide One Decimal by Another with JavaScript
const quotient = 4.4 / 2.0;

// 20. Finding a Remainder in JavaScript
const remainder = 11 % 3;

// 21. Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;

// 22. Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;

// 23. Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;

// 24. Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11; 

// 25. Escaping Literal Quotes in Strings
const myStr = " I am a \"double quoted\" string inside \"double quotes\".";

// 26. Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 27. Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// 28. Concatenating Strings with Plus Operator
const myStr = "This is the start." + " This is the end.";

// 29. Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";

// 30. Constructing Strings with Variables
const myName = "Dima";
const myStr = "My name is" + myName + "and I am well!";

// 31. Appending Variables to Strings
const someAdjective = "good";
let myStr = "Learning to code is ";
myStr += someAdjective;

// 32. Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// 33. Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// 34. Understand String Immutability
let myStr = "Jello World";
myStr = "Hello World"; 

// 35. Use Bracket Notation to Find the Nth Character in a String
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; 

// 36. Use Bracket Notation to Find the Last Character in a String
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length -1];

// 37. Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2];

// 38. Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;

// 39. Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["peanut butter", 1];

// 40. Nest one Array within Another Array
const myArray = [["array1", 1], ["array2", 2]];

// 41. Access Array Data with Indexes
const myArray = [50, 60, 70];
const myData = myArray[0];

// 42. Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0] = 45;

// 43. Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  const myData = myArray[2][1];

// 44. Manipulate Arrays With push()
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// 45. Manipulate Arrays With pop()
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// 46. Manipulate Arrays With shift()
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

// 47. Manipulate Arrays With unshift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// 48. Shopping List
const myList = [];
myList.push(["Chocolate Bar", 15], ["Milk", 1], ["Bread", 2], ["Sugar", 3], ["Salt", 2]);

// 49. Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// 50. Passing Values to Functions with Arguments
function functionWithArgs(param1, param2){
    console.log(param1 + param2);
}
functionWithArgs(1,2);

// 51. Return a Value from a Function with Return
function timesFive(num) {
    return num * 5;
}
const answer = timesFive(5);

// 52. Global Scope and Functions
let myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// 53. Local Scope and Functions
function myLocalScope() {
    let myVar = myLocalScope;
console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

// 54. Global vs. Local Scope in Functions
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  return outerWear;
}
myOutfit();

// 55. Understanding Undefined Value returned from a Function
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7)

// 56. Stand in Line
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// 57. Understanding Boolean Values
function welcomeToBooleans() {
  return true; 
}

// 58. Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
 if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// 59. Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// 60. Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

// 61. Practice comparing different values
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

// 62. Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// 63. Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

// 64. Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }
  if (val > 10) { 
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

// 65. Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 21) { 
    return "20 or Over";
  }
  if (val >= 10) {  
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

// 66. Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) { 
    return "Under 25";
  }
  if (val < 55) { 
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

// 67. Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

// 68. Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

// 69. Comparisons with the Logical Or Operator














