// Task 1 — var, let, const
// Create three variables:
// •	var → student name
// •	let → student age
// •	const → college name
// Requirements:
// 1.	Print all three values.
// 2.	Change the var value.
// 3.	Change the let value.
// 4.	Try changing the const value and observe the error.
// 5.	Try redeclaring the var variable.
// // 6.	Try redeclaring the let variable and observe the error.

// var studentName="Prudhvi"
// let age=26;
// const collegeName="GITAM"

// // 1.Print all three values.
// console.log(studentName);
// console.log(age);
// console.log(collegeName);
// 2.	Change the var value.
// var studentName="Prudhvi Marisetti";
// console.log(studentName);
// // 3.	Change the let value.

// let age=27;
// console.log(age);
// 4.	Try changing the const value and observe the error.

// const collegeName = "VIT";

// Try redeclaring the var variable.
// var studentName = 'rajesh';
// console.log(studentName)

// Try redeclaring the let variable and observe the error.
// let age = 29;
// console.log(age)

// _________________________________________________________________________________________________
// 🟢 Task 2 — User Information
// Get the following information from the user using prompt():
// •	Name
// •	Age
// •	City
// Print the result in the console.
// Expected:
// Name: Naveen
// Age: 22
// City: Trichy

// var Name=prompt("Enter Your Name");
// var Age=prompt("Enter Your Age");
// var City=prompt("Enter Your City");

// console.log(Name)
// console.log(Age)
// console.log(City)

// ____________________________________________________________________________________________________________
// 🟢 Task 3 — Welcome Message
// Get the user's name using prompt().
// Display:
// Welcome Naveen!
// Use alert().

// let name=prompt("Enter your Name");
// alert("Welcome" +" "+ name +" "+ "!");
// ____________________________________________________________________________________________________________
// 🟢 Task 4 — Age Calculator
// Ask the user for their birth year.
// Calculate their approximate age using:
// Current Year - Birth Year
// Print the age in the console.
// Example:
// Birth Year: 2000
// Age: 26
// let birthYear = prompt("Enter your year");
// let currentYear = 2026;
// let age = currentYear - birthYear;
// console.log("Age", age);

// _________________________________________________________________________________________________________________
// 🔵 Data Type Tasks
// Task 5 — Identify Data Types
// Create variables containing:
// "Hello"
// 100
// 25.5
// true
// false
// undefined
// null
// Use typeof and print each data type.
// let say="Hello";
// console.log(typeof(say))
// let num=100;
// console.log(typeof(100))
// let decinmalNum=25.5;
// console.log(typeof(25.5))
// let isTrue=true;
// console.log(typeof(isTrue))
// let isFalse=false;
// console.log(typeof(isFalse))
// let valueUndefined=undefined;
// console.log(typeof(valueUndefined))
// let valueNull=null;
// console.log(typeof(valueNull))

// _______________________________________________________________________________________________________________
// Task 6 — Student Data
// Create an object:
// name
// age
// city
// qualification
// isStudent
// Print:
// 1.	Complete object
// 2.	Name
// 3.	Age
// 4.	Qualification
// 5.	isStudent

// let studentData = {
//   name: "Prudhvi",
//   age: 26,
//   city: "kakinada",
//   qualification: "B.tech",
//   isStudent: true,
// };
// console.log(studentData);
// console.log(studentData.name);
// console.log(studentData.age);
// console.log(studentData.qualification);
// console.log(studentData.isStudent);

// ________________________________________________________________________________________________________
// Task 7 — Fruit Array
// Create an array containing 6 fruits.
// Apple
// Mango
// Orange
// Banana
// Grapes
// Papaya
// Print:
// 1.	First fruit
// 2.	Second fruit
// 3.	Last fruit
// 4.	Total number of fruits
// Hint:
// array.length
// array.length - 1

// let Fruit=["Apple","Mango","Orange","Banana","Grapes","Papaya"];
// console.log(Fruit[0]);
// console.log(Fruit[2]);
// console.log(Fruit[Fruit.length-1]);
// console.log(Fruit.length)

// ___________________________________________________________________________________________________
// 🟡 Arithmetic Operator Tasks
// Task 8 — Basic Calculator
// Create two numbers:
// let a = 20;
// let b = 5;
// Perform:
// •	Addition
// •	Subtraction
// •	Multiplication
// •	Division
// •	Modulus
// •	Exponentiation
// Print every result separately.

// let a = 20;
// let b = 5;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);
// __________________________________________________________________________________________________________
// Task 9 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Calculate the total price.
// Expected:
// Total = 4497

// let shirt = 999;
// let pant = 1499;
// let shoes =1999;

// total = shirt+pant+shoes
// console.log("total:" + total)

// ______________________________________________________________________________________________
// Task 10 — Simple Marks Calculation
// Create marks for 3 subjects:
// Tamil = 80
// English = 75
// Maths = 90
// Calculate:
// •	Total marks
// •	Average marks

// let Tamil = 80;
// let English = 75;
// let maths = 90;

// totalmarks = Tamil+English+maths
// averagemarks=totalmarks/3
// console.log(totalmarks)
// console.log(averagemarks)

// _____________________________________________________________________________________________________
// 🟠 Increment & Decrement Tasks
// Task 11 — Post Increment
// Predict the output before running the code:
// let a = 10;

// let b = a++;

// Output
// console.log(a); =11
// console.log(b);=10

// Write your expected output first, then run it.
// _____________________________________________________________________________________________________
// Task 12 — Pre Increment
// Predict the output:
// let a = 10;

// let b = ++a;

// console.log(a);=11
// console.log(b);=11

// ______________________________________________________________________________________________________
// Task 13 — Post Decrement
// Predict:
// let a = 20;

// let b = a--;

// console.log(a);=19
// console.log(b);=20
// _________________________________________________________________________________________________
// Task 14 — Pre Decrement
// Predict:
// let a = 20;

// let b = --a;

// console.log(a);=19
// console.log(b);=19
// ________________________________________________________________________________________________
// 🔴 Challenge Tasks
// Task 15 — Find the Final Values
// Without running the code, find the output:
// let a = 5;

// let b = a++;

// let c = ++a;

// let d = b--;

// console.log(a); =7;
// console.log(b);=5;
// console.log(c);=7;
// console.log(d);=4;
// Students should write the answer first and then verify it.
// ___________________________________________________________________________________________________
// Task 16 — Assignment Operators
// Given:
// let num = 10;
// Perform each operation separately:
// += 15
// -=5
// *=50
// /=2
// %=0
// **=100000
// Example:
// num **= 5;
// console.log(num);
// _________________________________________________________________________________________________________
// 🏆 Task 17 — Mini Student Profile
// Create a student profile using:
// Variables
// Name
// Age
// City
// College
// Array
// Store 5 favorite subjects.
// Object
// Create an employee/student object containing:
// name
// age
// city
// subjects
// isStudent
// Then print:
// 1.	Student name
// 2.	Student age
// 3.	City
// 4.	First subject
// 5.	Last subject
// 6.	Total subjects
// 7.	Complete object

// var name = "Prudhvi";
// var age = 26;
// var city = "vizag";
// var college = "Gitam";
// var subjects = ["Telugu", "Hindi", "English", "Maths", "Thermodynamics"];
// var employee = {
//   name: "prudhvi",
//   age: 26,
//   city: "Hyderabad",
//   subject: "Maths",
//   isStudent: true,
// };
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(subjects[0]);
// console.log(subjects[subjects.length - 1]);
// console.log(subjects.length);
// console.log(employee);

// _______________________________________________________________________________________________________
// 🔥 Final Challenge — User + Calculator
// Get two numbers from the user using prompt().
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Power
// Then display all results using console.log().

// var num1 = Number(prompt("enter the first number"));
// var num2 = Number(prompt("enter the second number"));

// console.log("addition", num1 + num2);
// console.log("Subtraction", num1 - num2);
// console.log("Multiplication", num1 * num2);
// console.log("Division", num1 / num2);
// console.log("Modulus", num1 % num2);
// console.log(" Power", num1 ** num2);
