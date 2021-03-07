
// how to USE a function: functionName();
console.log("Good Morning Eduardo!");

console.log("Goodbye!");

// Variables

// DEFINING a Variable in our program.
var myFirstVariable;
myFirstVariable = "My name is Victoria.";
console.log(myFirstVariable);

var mySecondVariable = "My name is Earl";

// The Three most common Datatypes

// Strings
"My name is Victoria.";
'What is your name?';

// Number
10;
9;
20;
0;
1000000;
10.5;
-10.5;
"10"; // NOT A NUMBER, it is a String instead.

// Boolean
true;
false;


// Mathematical Operators
(10 + 10); // 20 Addition -> Sum
(5 - 10); // -5 Subtraction -> Difference
(2 / 5); // .40 Division -> Quotient
(10 * 5); // 50 Multiplication -> Product
(10 % 3) // 1 Modulus -> Modulo

// 105 % 2 == 1; IS ODD NUMBER
// 104 % 2 == 0; IS EVEN NUMBER



var myMostImportantNumber = (50 - 10);

console.log(myMostImportantNumber);

var currentCTemp = 2800;

var cToF = ( (currentCTemp * (9/5) ) + 32) ;

console.log(cToF);

// Logical Operators

// == Equal to

(100 == 100); // becomes a true
(101 == 100); // becomes a false
(101.1 == 101.2); // different values, so becomes false
("raining" == "sunny"); // becomes a false
("raining" == "raining"); // becomes a true
("Raining" == "raining"); // becomes false because of different character
(" raining" == "raining"); // false because of extra character "space"
(true == true); // true
(true == false); // false
(false == false); // true

// >, <, >=, <=   Greater Than, Lesser Than, Greater than or Equal to, Lesser than or Equal to

(100 > 40); // true
(100 < 40); // false
(-100 < 40); // true
(100 <= 100); // true
(99 <= 100); // true

// != Not Equal to
(100 != 100); // false
(100.1 != 100); // true



(mySecondVariable == "Eduardo"); // False


// Boolean Operators

// NOT operator
!false; // true
!true; // false

// || OR operator

(true || false); // true
(false || true); // true
(false || false); // false

// && AND operator

(true && false); // false
(true && true); // true


(false || true || false);
//becomes
(true || false);
//becomes
true;


(100 == 100 || 50 == 51 || mySecondVariable == "Eduardo");
//becomes
true || mySecondVariable == "Eduardo";


var someData = "important";
someData = "not so important.";

// Arrays

// Creating an array and storing it in a variable.
var myFirstArray = ["important", "not so important"];

var daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];


console.log(myFirstArray[0]);

console.log(daysOfWeek[4]);

daysOfWeek[7] = "Superday";

daysOfWeek[2] = "Whensday";

console.log(daysOfWeek);

// Array Functions

// array.push() Adds the value to the END of the array.

myFirstArray.push("hello!");

console.log(myFirstArray);

// array.pop() Removes the value at the END of the array.

myFirstArray.pop();

console.log(myFirstArray);

// array.unshift() Add the value to the START of the array.

myFirstArray.unshift("sunny day");

console.log(myFirstArray);

// array.shift() Removes the value at the START of the array.

myFirstArray.shift();

console.log(myFirstArray);

// array.splice()

daysOfWeek.splice(3, 0, "Breakday");

console.log(daysOfWeek);


// Objects

var MEDAInstructor = {
    "firstName": "Miguel",
    "job": "MEDA",
    "age": 30
};

var myThirdArray = ["Eduardo", "MEDA", 30];

console.log(MEDAInstructor["firstName"]);
console.log(MEDAInstructor.job);

MEDAInstructor.job = "CCSF";

// Adds a new 
MEDAInstructor.favFood = "Burrito";
MEDAInstructor.age = null;

// Removes the key-value pair from the object.
delete MEDAInstructor.age;

console.log(MEDAInstructor);


console.log(typeof []);



// Conditional Statements. If statement needs to have a true value in order to run/execute the code in its code block.

// Conditional statement syntax
// if (true or false value) { code to run based on condition in parenthesis. }

if (MEDAInstructor.firstName == "Eduardo") {
    console.log("Welcome to our website, Eduardo!");
}


var numberToTest = 0;

if (numberToTest > 0) {
    console.log("The number is positive.");
}

if (numberToTest == 0) {
    console.log("The number is a zero");
}

if (numberToTest < 0) {
    console.log("The number is negative.");
}




































































for (var keeprunning = 0; keeprunning < 10; keeprunning = keeprunning + 1) {
    console.log("This for loop ran once!");
}

for (var i = 0; i < 10;)


if (valueAlreadyFound )