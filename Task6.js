// // Task 1 — Student Result Analyzer
// // Create a program that accepts a student's:
// // •	Name
// // •	Department
// // •	5 subject marks
// // Requirements:
// // •	Calculate total marks
// // •	Calculate average
// // •	Find pass/fail
// // •	Assign grade:
// // o	90+ → A
// // o	75–89 → B
// // o	60–74 → C
// // o	50–59 → D
// // o	Below 50 → Fail
// // •	Display the result using console.log()
// // Concepts: variables, arithmetic operators, if/else, functions.

// let name = "Prudhvi";
// let department = "MECH";

// let mark1 = 85;
// let mark2 = 78;
// let mark3 = 92;
// let mark4 = 70;
// let mark5 = 88;

// function result() {
//   let total = mark1 + mark2 + mark3 + mark4 + mark5;

//   let average = total / 5;

//   let result;
//   if (mark1 >= 50 && mark2 >= 50 && mark3 >= 50 && mark4 >= 50 && mark5 >= 50) {
//     result = "Pass";
//   } else {
//     result = "Fail";
//   }

//   let grade;

//   if (average >= 90) {
//     grade = "A";
//   } else if (average >= 75) {
//     grade = "B";
//   } else if (average >= 60) {
//     grade = "C";
//   } else if (average >= 50) {
//     grade = "D";
//   } else {
//     grade = "Fail";
//   }

//   console.log("Name:", name);
//   console.log("Department:", department);
//   console.log("Subject 1:", mark1);
//   console.log("Subject 2:", mark2);
//   console.log("Subject 3:", mark3);
//   console.log("Subject 4:", mark4);
//   console.log("Subject 5:", mark5);
//   console.log("Total Marks:", total);
//   console.log("Average:", average);
//   console.log("Result:", result);
//   console.log("Grade:", grade);
// }

// result();

// // ___________________________________________________________________________________________________________
// // Task 2 — Employee Salary Calculator
// // Create an employee object:
// // {
// //     name: "Arun",
// //     role: "Developer",
// //     salary: 45000,
// //     experience: 2
// // }
// // Calculate:
// // •	Basic salary
// // •	10% bonus if experience ≥ 2
// // •	15% bonus if experience ≥ 5
// // •	Final salary
// // Use a function:
// // calculateSalary(employee)
// // Concepts: objects, functions, conditions, arithmetic.

// let emp = {
//   name: "Arun",
//   role: "Developer",
//   salary: 45000,
//   experience: 2,
// };

// function CalculateSalary(emp) {
//   let basicSalary = emp.salary;
//   let bonus = 0;
//   if (emp.experience >= 5) {
//     bonus = (basicSalary * 15) / 100;
//   } else if (emp.experience >= 2) {
//     bonus = (basicSalary * 10) / 100;
//   }
//   let finalSalary = basicSalary + bonus;

//   console.log("Name:", emp.name);
//   console.log("Role:", emp.role);
//   console.log("Experience:", emp.experience, "years");
//   console.log("Basic Salary:", basicSalary);
//   console.log("Bonus:", bonus);
//   console.log("Final Salary:", finalSalary);
// }
// CalculateSalary(emp);

// // ___________________________________________________________________________________________________________
// // Task 3 — Product Filter System
// // Create an array:
// // let products = [
// //     { name: "Laptop", price: 55000, category: "electronics" },
// //     { name: "Mouse", price: 800, category: "electronics" },
// //     { name: "Shirt", price: 1200, category: "fashion" },
// //     { name: "Shoes", price: 2500, category: "fashion" },
// //     { name: "Phone", price: 30000, category: "electronics" }
// // ];
// // Perform:
// // 1.	Get products above ₹2,000

// let products = [
//   { name: "Laptop", price: 55000, category: "electronics" },
//   { name: "Mouse", price: 800, category: "electronics" },
//   { name: "Shirt", price: 1200, category: "fashion" },
//   { name: "Shoes", price: 2500, category: "fashion" },
//   { name: "Phone", price: 30000, category: "electronics" },
// ];
// let costlyproducts = products.filter(function (product) {
//   return product.price > 2000;
// });
// console.log(costlyproducts);
// // 2.	Get only electronics

// let electronics = products.filter(function (product) {
//   return product.category === "electronics";
// });
// console.log(electronics);

// // 3.	Find the first product below ₹1,000
// let cheapProduct = products.find(function (product) {
//   return product.price < 1000;
// });
// console.log(cheapProduct);
// // 4.	Calculate total price of all products

// let totalPrice = products.reduce(function (total, product) {
//   return total + product.price;
// }, 0);

// console.log("Total price:", totalPrice);
// // 5.	Check whether any product costs more than ₹50,000

// // let isAnyAbove50000 = products.some(function(product) {
// //     return product.price > 50000;
// // });

// // console.log("Any product above ₹50,000:", isAnyAbove50000);
// // 6.	Check whether every product has a price above ₹500
// // Concepts: filter(), find(), reduce(), some(), every().
// let isEveryAbove500 = products.every(function (product) {
//   return product.price > 500;
// });

// console.log("Every product above ₹500:", isEveryAbove500);

// // ___________________________________________________________________________________________________________
// // Task 4 — Employee Management
// // Create an array of 6 employees.
// // Each employee should have:
// // {
// //     id: 101,
// //     name: "Kavin",
// //     role: "Frontend Developer",
// //     salary: 40000
// // }
// // Perform:
// // •	Display all employee names
// // •	Display employees earning above ₹40,000
// // •	Find employee with ID 103
// // •	Calculate total salary
// // •	Find highest-paid employee
// // •	Sort employees from highest salary to lowest
// // •	Create a new array containing only employee names
// // Concepts: objects, arrays, map(), filter(), find(), reduce(), sort().

// // let employees = [
// //     {
// //         id: 101,
// //         name: "Prudhvi",
// //         role: "Frontend Developer",
// //         salary: 40000
// //     },
// //     {
// //         id: 102,
// //         name: "Naveen",
// //         role: "Backend Developer",
// //         salary: 50000
// //     },
// //     {
// //         id: 103,
// //         name: "Pradeep",
// //         role: "Full Stack Developer",
// //         salary: 65000
// //     },
// //     {
// //         id: 104,
// //         name: "Srija",
// //         role: "Ux Designer",
// //         salary: 35000
// //     },
// //     {
// //         id: 105,
// //         name: "Surekha",
// //         role: "Software developer",
// //         salary: 55000
// //     },
// //     {
// //         id: 106,
// //         name: "Teja",
// //         role: "Tester",
// //         salary: 45000
// //     }
// // ];

// // let employeeNames = employees.map(function(employee) {
// //     return employee.name;
// // });

// // console.log("Employee Names:");
// // console.log(employeeNames);

// // let highSalaryEmployees = employees.filter(function(employee) {
// //     return employee.salary > 40000;
// // });

// // console.log("Employees earning above ₹40,000:");
// // console.log(highSalaryEmployees);

// // let employee103 = employees.find(function(employee) {
// //     return employee.id === 103;
// // });

// // console.log("Employee with ID 103:");
// // console.log(employee103);

// // let totalSalary = employees.reduce(function(total, employee) {
// //     return total + employee.salary;
// // }, 0);

// // console.log("Total Salary:", totalSalary);

// // let highestPaid = employees.reduce(function(highest, employee) {
// //     if (employee.salary > highest.salary) {
// //         return employee;
// //     } else {
// //         return highest;
// //     }
// // });

// // console.log("Highest Paid Employee:");
// // console.log(highestPaid);

// // let sortedEmployees = [...employees].sort(function(a, b) {
// //     return b.salary - a.salary;
// // });

// // console.log("Employees sorted by salary:");
// // console.log(sortedEmployees);

// // let namesOnly = employees.map(function(employee) {
// //     return employee.name;
// // });

// // console.log("Names Only:");
// // console.log(namesOnly);
// // ___________________________________________________________________________________________________________
// // Task 5 — Shopping Cart
// // Create:
// // let cart = [
// //     { name: "Laptop", price: 50000, quantity: 1 },
// //     { name: "Mouse", price: 1000, quantity: 2 },
// //     { name: "Keyboard", price: 2000, quantity: 1 }
// // ];
// // Calculate:
// // Item total:
// // price × quantity
// // Then calculate:
// // •	Total cart value
// // •	10% discount if total > ₹50,000
// // •	Final payable amount
// // Create a function:
// // calculateCart(cart)
// // Concepts: objects, functions, reduce(), conditions.

// // let cart = [
// //     { name: "Laptop", price: 50000, quantity: 1 },
// //     { name: "Mouse", price: 1000, quantity: 2 },
// //     { name: "Keyboard", price: 2000, quantity: 1 }
// // ];

// // function calculateCart(cart) {

// //     let totalCartValue = cart.reduce(function(total, item) {
// //         let itemTotal = item.price * item.quantity;

// //         console.log(item.name + " Total:", itemTotal);

// //         return total + itemTotal;
// //     }, 0);

// //     let discount = 0;

// //     if (totalCartValue > 50000) {
// //         discount = totalCartValue * 10 / 100;
// //     }

// //     let finalAmount = totalCartValue - discount;

// //     console.log("Total Cart Value:", totalCartValue);
// //     console.log("Discount:", discount);
// //     console.log("Final Payable Amount:", finalAmount);
// // }

// // calculateCart(cart);
// // ________________________________________
// // Task 6 — Student Search System
// // Create an array of students:
// // let students = [
// //     { name: "Arun", age: 21, mark: 85 },
// //     { name: "Priya", age: 22, mark: 92 },
// //     { name: "Karthi", age: 20, mark: 67 },
// //     { name: "Dinesh", age: 23, mark: 45 }
// // ];
// // Requirements:
// // 1.	Display all student names
// // 2.	Display students who scored above 80
// // 3.	Find student named "Priya"
// // 4.	Calculate average mark
// // 5.	Check whether anyone failed
// // 6.	Check whether everyone scored above 40
// // 7.	Sort students by marks

// //     let students = [
// //     { name: "Arun", age: 21, mark: 85 },
// //     { name: "Priya", age: 22, mark: 92 },
// //     { name: "Karthi", age: 20, mark: 67 },
// //     { name: "Dinesh", age: 23, mark: 45 }
// // ];

// // let studentNames = students.map(function(student) {
// //     return student.name;
// // });

// // console.log("All Student Names:");
// // console.log(studentNames);

// // let highScorers = students.filter(function(student) {
// //     return student.mark > 80;
// // });

// // console.log("Students who scored above 80:");
// // console.log(highScorers);

// // let priya = students.find(function(student) {
// //     return student.name === "Priya";
// // });

// // console.log("Student named Priya:");
// // console.log(priya);

// // let totalMarks = students.reduce(function(total, student) {
// //     return total + student.mark;
// // }, 0);

// // let averageMark = totalMarks / students.length;

// // console.log("Average Mark:", averageMark);

// // let anyoneFailed = students.some(function(student) {
// //     return student.mark < 50;
// // });

// // console.log("Anyone failed:", anyoneFailed);

// // let everyoneAbove40 = students.every(function(student) {
// //     return student.mark > 40;
// // });

// // console.log("Everyone scored above 40:", everyoneAbove40);

// // let sortedStudents = [...students].sort(function(a, b) {
// //     return b.mark - a.mark;
// // });

// // console.log("Students sorted by marks:");
// // console.log(sortedStudents);
// // _________________________________________________________________________________________________________________
// // Task 7 — Array Transformation Challenge
// // Given:
// // let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
// // Perform:
// // 1.	Create a new array containing numbers × 2
// // let doubled = numbers.map(num => num * 2);
// // console.log("1. Doubled:", doubled);
// // 2.	Get only even numbers

// // let evenNumbers = numbers.filter(num => num % 2 === 0);
// // console.log("2. Even Numbers:", evenNumbers);

// // // 3.	Get numbers greater than 15
// // let greaterThan15 = numbers.filter((num) => num > 15);
// // console.log("3. Greater than 15:", greaterThan15);

// // // 4.	Find the first number greater than 20
// // let firstGreaterThan20 = numbers.find((num) => num > 20);
// // console.log("4. First number greater than 20:", firstGreaterThan20);

// // // 5.	Find total of all numbers
// // let total = numbers.reduce((sum, num) => sum + num, 0);
// // console.log("5. Total:", total);

// // // 6.	Check whether any number is greater than 40
// // let anyGreaterThan40 = numbers.some((num) => num > 40);
// // console.log("6. Any number greater than 40:", anyGreaterThan40);

// // // 7.	Check whether every number is positive
// // let everyPositive = numbers.every((num) => num > 0);
// // console.log("7. Every number is positive:", everyPositive);

// // // 8.	Sort from highest to lowest
// // let highToLow = [...numbers].sort((a, b) => b - a);
// // console.log("8. Highest to Lowest:", highToLow);

// // Restriction: Use array higher-order methods wherever possible.

// // ___________________________________________________________________________________________________________
// // Task 8 — String Analyzer
// // Ask the user to enter a sentence.
// // Example:
// // "JavaScript is very powerful"
// // Display:
// // •	Total characters
// // •	Uppercase sentence
// // •	Lowercase sentence
// // •	Whether it contains "JavaScript"
// // •	First character
// // •	Last character
// // •	Number of words
// // •	Replace "JavaScript" with "Python"
// // •	Convert sentence into an array using split()
// // Concepts: length, includes(), slice(), toUpperCase(), toLowerCase(), replace(), split().

// // let sentence = prompt("Enter a sentence:");

// // console.log("Original Sentence:", sentence);

// // console.log("Total Characters:", sentence.length);

// // console.log("Uppercase:", sentence.toUpperCase());

// // console.log("Lowercase:", sentence.toLowerCase());

// // console.log("Contains JavaScript:", sentence.includes("JavaScript"));

// // console.log("First Character:", sentence.slice(0, 1));

// // console.log("Last Character:", sentence.slice(-1));

// // let words = sentence.trim().split(" ");
// // console.log("Number of Words:", words.length);

// // console.log("After Replace:", sentence.replace("JavaScript", "Python"));

// // let sentenceArray = sentence.split(" ");
// // console.log("Sentence Array:", sentenceArray);

// // ___________________________________________________________________________________________________________
// // 🔥 Final Mini Project — Employee Dashboard
// // This would be a good intermediate-level class project.
// // Create an Employee Dashboard using JavaScript.
// // Data
// // let employees = [
// //     {
// //         id: 101,
// //         name: "Arun",
// //         department: "IT",
// //         salary: 45000,
// //         experience: 2
// //     },
// //     {
// //         id: 102,
// //         name: "Priya",
// //         department: "HR",
// //         salary: 50000,
// //         experience: 4
// //     },
// //     {
// //         id: 103,
// //         name: "Karthi",
// //         department: "IT",
// //         salary: 65000,
// //         experience: 6
// //     }
// // ];
// // Students must implement
// // 1. Employee List
// // •	Display all employees.

// // employees.forEach((employee) => {
// //   console.log(
// //     employee.id,
// //     employee.name,
// //     employee.department,
// //     employee.salary,
// //     employee.experience,
// //   );
// // });

// // // 2. Search
// // // •	Search employee by name.

// // let searchName = "Arun";

// // let searchedEmployee = employees.find(
// //   (employee) => employee.name.toLowerCase() === searchName.toLowerCase(),
// // );

// // console.log(searchedEmployee);
// // // 3. Department Filter
// // // •	Filter employees by department.
// // let department = "IT";

// // let departmentEmployees = employees.filter(
// //   (employee) => employee.department === department,
// // );

// // console.log(departmentEmployees);

// // // 4. Salary Filter
// // // •	Show employees earning more than ₹50,000.

// // let highSalaryEmployees = employees.filter(
// //   (employee) => employee.salary > 50000,
// // );

// // console.log(highSalaryEmployees);
// // // 5. Salary Calculation
// // // •	Calculate total company salary.
// // let totalSalary = employees.reduce(
// //   (total, employee) => total + employee.salary,
// //   0,
// // );

// // console.log(totalSalary);
// // // 6. Highest Salary
// // // •	Find the highest-paid employee.

// // let highestPaidEmployee = employees.reduce((highest, employee) =>
// //   employee.salary > highest.salary ? employee : highest,
// // );

// // console.log(highestPaidEmployee);
// // // 7. Experience
// // // •	Find employees with more than 3 years' experience.

// // let experiencedEmployees = employees.filter(
// //   (employee) => employee.experience > 3,
// // );

// // console.log(experiencedEmployees);
// // // 8. Sorting
// // // •	Sort employees by salary:
// // // o	Low → High

// // let salaryLowToHigh = [...employees].sort((a, b) => a.salary - b.salary);

// // console.log(salaryLowToHigh);
// // // o	High → Low

// // let salaryHighToLow = [...employees].sort((a, b) => b.salary - a.salary);

// // console.log(salaryHighToLow);
// // // 9. Statistics
// // // Display:
// // // Total Employees: 3
// // // Total Salary: ₹160000
// // // Highest Salary: ₹65000
// // // Average Salary: ₹53333

// // let totalEmployees = employees.length;

// // let averageSalary = totalSalary / totalEmployees;

// // console.log(totalEmployees);
// // console.log(totalSalary);
// // console.log(highestPaidEmployee.salary);
// // console.log(+Math.round(averageSalary));
