// Task 1 — Variables
// Create variables using var, let, and const.
// Name
// Age
// City
// College
// Requirements:
// •	Print all values.
// •	Change the var value.
// •	Change the let value.
// •	Try changing the const value.
// •	Try redeclaring each variable and observe what happens.

// var Name = "Prudhvi";
// let Age = 24;
// let City = "Kakinada";
// const College = "Gitam";
// console.log(Name);
// console.log(Age);
// console.log(City);
// console.log(College);

// Name = "Sandeep";
// console.log(Name);

// Age = 26;
// console.log(Age);

// College = "VIT";
// console.log(College);

// var Name = "Vinay";
// console.log(Name);

// let Age = 35;

// const City = "Chennai";

// ________________________________________________________________________________________________________________
// Task 2 — Printing Statements
// Use:
// console.log()
// alert()
// confirm()
// prompt()
// document.writeln()
// Create one example for each.

// console.log("Hello This is Prudhvi");

// alert("Welcome to My Blog");

// confirm("Do you Want to continue?");

// let name = prompt("Enter your name");
// console.log(name);

// document.writeln("Hello Welcome to My Page .!");
// ______________________________________________________________________________________________
// Task 3 — User Details
// Get from the user:
// Name
// Age
// City
// Qualification
// Print the details in the console.

// let Name =prompt("what is your name ?");
// let Age=prompt("what is your age ?");
// let City =prompt("what is your city ?");
// let Qualification=prompt("what is your qualification");
// console.log(Name);
// console.log(Age);
// console.log(City);
// console.log(Qualification);

// ___________________________________________________________________________________________________________
// 🟡 Data Type Tasks
// Task 4 — Find Data Types
// Create variables containing:
// "JavaScript"
// 100
// 99.5
// true
// false
// undefined
// null
// Print their values and use typeof to identify their data types.

// let skill = "Javascript";
// let num = 100;
// let decimalNum = 99.5;
// let isTrue = true;
// let isFalse = false;
// let undefinedVal = undefined;
// let nullValue = null;

// console.log(skill, typeof skill);
// console.log(num, typeof num);
// console.log(decimalNum, typeof decimalNum);
// console.log(isTrue, typeof isTrue);
// console.log(isFalse, typeof isFalse);
// console.log(undefinedVal, typeof undefinedVal);
// console.log(nullValue, typeof nullValue);

// ___________________________________________________________________________________________
// Task 5 — Student Array
// Create an array containing:
// Student names
// Example:
// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// Print:
// 1.	First student
// 2.	Second student
// 3.	Last student
// 4.	Total students
// Use only:
// array[index]
// array.length

// let students = ["Arjun", "Priyanka", "Kumari", "Divyash", "Prudhvi"];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[students.length - 1]);
// console.log(students.length);

// ____________________________________________________________________________________________________
// Task 6 — Employee Object
// Create an employee object containing:
// name
// age
// role
// skills
// isWorking
// qualification
// skills and qualification should be arrays.
// Print:
// •	Employee name
// •	Age
// •	Role
// •	First skill
// •	Last qualification
// •	Working status
// This follows the same array-inside-object structure from your notes.

// let employee = {
//   name: "Prudhvi",
//   age: 26,
//   role: "Frontend Developer",
//   skills: ["JavaScript", "HTML", "CSS"],
//   isWorking: true,
//   qualification: ["B.Tech", "M.Tech"],
// };

// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.role);
// console.log(employee.skills[0]);
// console.log(employee.qualification[employee.qualification.length - 1]);
// console.log(employee.isWorking);

// ______________________________________________________________________________________________________________
// 🔵 Arithmetic Operator Tasks
// Task 7 — Calculator
// Create:
// let a = 20;
// let b = 5;
// Calculate:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation

// let a = 30;
// let b = 6;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);

// ______________________________________________________________________________________________________________
// Task 8 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Bag = 799
// Calculate:
// Total price
// Use arithmetic operators only.

// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;
// let bag = 799;

// let total = shirt + pant + shoes + bag;

// console.log(total);

// ______________________________________________________________________________________________________________
// Task 9 — Increment & Decrement
// Find the output without running the code first.
// A
// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);

// output a=11;b=10;

// B
// let a = 10;

// let b = ++a;

// console.log(a);
// console.log(b);

// output a=11,b=11;

// C
// let a = 10;

// let b = a--;

// console.log(a);
// console.log(b);

// output a=9; b=10
// D
// let a = 10;

// let b = --a;

// console.log(a);
// console.log(b);

// output a=9,b=9;
// ______________________________________________________________________________________________________________
// 🟣 Assignment Operator Tasks
// Task 10
// Start with:
// let num = 10;
// Perform separately:
// num += 5
// num -= 3
// num *= 2
// num /= 4
// num %= 3
// num **= 2
// Print the result after each operation.

// let num1=10;
// num1 += 5;
// console.log(num1);

// let num2=20;
// num2 -= 3;
// console.log(num2);

// let num3=30;
// num3 *= 2;
// console.log(num3);

// let num4=40;
// num4 /= 4;
// console.log(num4);

// let num5=50;
// num5 %= 3;
// console.log(num5);

// let num6=70;
// num6 **= 2;
// console.log(num6);

// ______________________________________________________________________________________________________________
// 🔴 Comparison Operator Tasks
// Your notes cover <, >, <=, >=, ==, !=, ===, and !==.
// Task 11 — Find Output
// Predict the result:
// console.log(10 > 5); True
// console.log(10 < 5); False
// console.log(10 >= 10); True
// console.log(10 <= 9); False

// console.log(5 == "5"); True
// console.log(5 === "5"); False

// console.log(10 != "10"); False
// console.log(10 !== "10"); True
// ______________________________________________________________________________________________________________
// 🟠 Logical Operator Tasks
// Task 12 — AND
// Find the output:
// console.log(true && true); =True
// console.log(true && false); =False
// console.log(false && true); =False
// console.log(false && false); =False
// ______________________________________________________________________________________________________________
// Task 13 — OR
// console.log(true || true); =True
// console.log(true || false); =True
// console.log(false || true); =True
// console.log(false || false); =False
// ______________________________________________________________________________________________________________
// Task 14 — NOT
// console.log(!true); False
// console.log(!false);=True
// console.log(!(5 > 10));=True
// console.log(!(10 > 5))=False
// ______________________________________________________________________________________________________________
// 🔥 Task 15 — Combination
// Find the output without executing:
// console.log(5 == "5" && !(5 === 5) || 6 > 7);  =False

// console.log(10 > 5 && 8 < 12 || 4 === "4"); =True

// console.log(7 === 7 && 10 != "10" || 5 >= 5);=True

// console.log(15 < 10 || 20 > 15 && 5 == "5");=True
// These follow the same comparison + logical style in your code.
// ______________________________________________________________________________________________________________
// 🟤 Ternary Operator Tasks
// Task 16 — Voting
// Create:
// let age = 20;
// Use the ternary operator:
// age >= 18 → "Eligible to vote"
// age < 18  → "Not eligible"

// let age = 20;

// let result = age >= 18 ? "Eligible to vote" : "Not eligible";

// console.log(result);
// ______________________________________________________________________________________________________________
// Task 17 — Password
// Create:
// let password = true;
// Use ternary:
// true  → "Login successful"
// false → "Wrong password"

// let password = true;

// let results = password ? "Login successful" : "Wrong password";

// console.log(results);
// ______________________________________________________________________________________________________________
// 🟢 Concatenation & Template String
// Task 18 — User Introduction
// Create:
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// Print:
// My name is Naveen. I am 25 years old. I live in Trichy.
// Do it two ways:
// 1.	Using +
// 2.	Using template literals `${}`
// Your notes cover both approaches.

// console.log(`My name is ${name}. I am ${age} years old. I live in ${city}.`);

// ______________________________________________________________________________________________________________
// 🔵 Type Casting Tasks
// Task 19 — String Conversion
// Use String() to convert:
// 100
// true
// undefined
// null
// [1, 2]
// Print the result and its typeof.

// let a = String(100);
// let b = String(true);
// let c = String(undefined);
// let d = String(null);
// let e = String([1, 2]);

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);
// console.log(e, typeof e);

// ______________________________________________________________________________________________________________
// Task 20 — Number Conversion
// Predict the output:
// console.log(Number()); Output=0
// console.log(Number("")); Output=0
// console.log(Number("123")); Output=123
// console.log(Number("a1")); Output=NaN
// console.log(Number(true)); Output=1
// console.log(Number(false)); Output=0
// console.log(Number(undefined)); Output=Nan
// console.log(Number(null)); Output=0
// Your notes specifically cover these conversions.

// // ______________________________________________________________________________________________________________
// Task 21 — Boolean Conversion
// Predict:
// console.log(Boolean()); Output=False
// console.log(Boolean(""));Output= False
// console.log(Boolean("hello"));Output=True
// console.log(Boolean(123));Output=True
// console.log(Boolean(true));Output= True
// console.log(Boolean(false));Output=false
// console.log(Boolean(undefined));Output=False
// console.log(Boolean(null));Output=False
// console.log(Boolean([]));Output=True
// console.log(Boolean({}));Output=True

// ______________________________________________________________________________________________________________
// 🔴 Flow Control Tasks
// Task 22 — Voting Eligibility
// Get age using prompt().
// 18 or above → "You can vote"
// Below 18   → "You can't vote"
// Use:
// if
// else

// let age =Number(prompt("Enter Your Age"));
// if(age>=18){
//     console.log("you can vote")
// }
// else{
//     console.log("you can't Vote")
// }
// ______________________________________________________________________________________________________________
// Task 23 — Positive or Negative
// Get a number from the user.
// Check:
// Positive
// Negative
// Zero
// Use if / else if / else.

// let num = Number(prompt("Enter Number"));
// if (num > 0) {
//   console.log("Positive");
// } else if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log(Zero);
// }

// ______________________________________________________________________________________________________________
// Task 24 — Grade System
// Get marks from the user.
// Create:
// 90–100 → A Grade
// 80–89  → B Grade
// 70–79  → C Grade
// 60–69  → D Grade
// Below 60 → Fail
// Use if / else if / else.
// let marks = Number(prompt("Enter Marks"));
// if (marks >= 90 && marks <= 100) {
//   console.log("A grade");
// } else if (marks >= 80) {
//   console.log("B grade");
// } else if (marks >= 70) {
//   console.log("C grade");
// } else if (marks >= 60) {
//   console.log(" D grade");
// } else {
//   console.log("Fail");
// }

// ______________________________________________________________________________________________________________
// 🟣 Nested If Task
// Task 25 — Job Eligibility
// Get:
// Age
// Height
// Weight
// Rules:
// Age >= 18
// Height >= 160
// Weight >= 60
// If all conditions are satisfied:
// "Congratulations! You are selected"
// Otherwise display the appropriate reason.
// This is based directly on the nested-if structure in your code.

// let age = Number(prompt("Enter your age"));
// let height = Number(prompt("Enter your height"));
// let weight = Number(prompt("Enter your weight"));

// if (age >= 18) {
//   if (height >= 160) {
//     if (weight >= 60) {
//       console.log("Congratulations! You are selected");
//     } else {
//       console.log("Weight should be 60 or above");
//     }
//   } else {
//     console.log("Height should be 160 or above");
//   }
// } else {
//   console.log("Age should be 18 or above");
// }
// ______________________________________________________________________________________________________________
// 🟡 Switch Tasks
// Task 26 — Traffic Light
// Get a traffic light color:
// red
// yellow
// green
// Use switch.
// red    → Stop
// yellow → Ready
// green  → Go

// let color = prompt("Enter traffic light color");

// switch (color) {
//   case "red":
//     console.log("Stop");
//     break;

//   case "yellow":
//     console.log("Ready");
//     break;

//   case "green":
//     console.log("Go");
//     break;

//   default:
//     console.log("Invalid color");
// }

// ______________________________________________________________________________________________________________
// Task 27 — Day
// Create:
// let day = 1;
// Use switch:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Add:
// default → Invalid day

// let day = 1;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   case 4:
//     console.log("Thursday");
//     break;

//   case 5:
//     console.log("Friday");
//     break;

//   case 6:
//     console.log("Saturday");
//     break;

//   case 7:
//     console.log("Sunday");
//     break;

//   default:
//     console.log("Invalid day");
// }

// ______________________________________________________________________________________________________________
// 🏆 FINAL MINI PROJECT
// Task 28 — Student Result System
// Create a small Student Result System using everything you've learned.
// Step 1 — Get user details
// Name
// Age
// City

// let name = prompt("Enter your name");
// let age = Number(prompt("Enter your age"));
// let city = prompt("Enter your city");
// Step 2 — Get marks
// Tamil
// English
// Maths

// let telugu = Number(prompt("Enter Telugu marks"));
// let english = Number(prompt("Enter English marks"));
// let maths = Number(prompt("Enter Maths marks"));
// Step 3 — Calculate
// Total
// Average

// let total = telugu + english + maths;
// let average = total / 3;
// Step 4 — Check result

// Use if / else if / else:
// 90+ → A
// 80+ → B
// 70+ → C
// 60+ → D
// Below 60 → Fail

// let grade;

// if (average >= 90) {
//   grade = "A";
// } else if (average >= 80) {
//   grade = "B";
// } else if (average >= 70) {
//   grade = "C";
// } else if (average >= 60) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }
// Step 5 — Check voting
// Age >= 18

// let voting;

// if (age >= 18) {
//   voting = "Eligible";
// } else {
//   voting = "Not Eligible";
// }

// Step 6 — Display
// Use a template string:
// Name: Naveen
// Age: 22
// City: Trichy
// Total: 250
// Average: 83.33
// Grade: B
// Voting: Eligible

// console.log(`
// Name: ${name}
// Age: ${age}
// City: ${city}
// Total: ${total}
// Average: ${average.toFixed(2)}
// Grade: ${grade}
// Voting: ${voting}
// `);
