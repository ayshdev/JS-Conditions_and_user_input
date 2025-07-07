// ex 1

let city = prompt("Exercise 1: \n Enter your city name in lowercase");

if (city==="karachi") {
    console.log ("Welcome to the city of lights");
} else{
    console.log("Welcome to" , city);
    
}

// ex 2

let gender = prompt("Exercise 2: \n Enter you gender in lowercase (male/female)");
if (gender==="male") {
    console.log("Good Morning Sir");
    
} else if (gender==="female") {
    console.log("Good Morning Ma'am");
    
} else {
    console.log("Kindly enter the gender correctly.");
    
}

//ex 3

let color = prompt("Exercise 3: \n Enter any one color of traffic signal in lowercase (red/yellow/green)");
 if (color==="red") {
    console.log("Must Stop");
    
 } else if (color === "yellow") {
    console.log("Ready To Move");
    
 } else if (color === "green") {
    console.log("Move Now");
    
 } else {
    console.log("Kindly enter the color correctly.");  
 }

 //ex 4

 let fuel = +prompt("Exercise 4: \n Enter the remaining fuel in your car in litres i.e 1, 0.5");
 if (isNaN(fuel)) {
    console.log("Kindly enter a valid number.");
    
 }else if (fuel<0.25) {
    console.log("Please refill the fuel in your car.");  
 } else {
    console.log("You have enough fuel, no need to refill.");
    
 }
 
 // ex 5

//  part-a
var a = 4;
if (++a === 5){
alert("Exercise 5: \n given condition for variable a is true");
console.log("given condition for variable a is true");

}


// part-b
var b = 82;
if (b++ === 83){
alert("Exercise 5: \n given condition for variable b is true");
console.log("given condition for variable b is true");
}


// part-c
 var c = 12;
if (c++ === 13){
alert("Exercise 5: \n condition 1 is true");
console.log("condition 1 is true");
}
if (c === 13){
alert("Exercise 5: \n condition 2 is true");
console.log("condition 2 is true");
}
if (++c < 14){
alert("Exercise 5: \n condition 3 is true");
console.log("condition 3 is true");
}
if(c === 14){
alert("Exercise 5: \n condition 4 is true");
console.log("condition 4 is true");
}


//part-d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("Exercise 5: \n The cost equals" + " "+ totalCost);
console.log("The cost equals", totalCost);
}


// part-e
if (true){
alert("Exercise 5: \n True");
console.log("True");

}
if (false){
alert("Exercise 5: \n False");
console.log("False");
}


// part-f
if("car" < "cat"){
alert("Exercise 5: \n car is smaller than cat");
console.log("car is smaller than cat");
}


// ex 6



//      percentage                       grade          remarks
// greater than or equal to 80           a1            excellent
// greater than or equal to 70           a             good
// greater than or equal to 60           b             you need to improve
// less than 60                          fail          sorry


// Marks Sheet
// total marks : 300
// marks obtained : xxx
// percentage : xx%
// grade : x
// remarks : xxxxxxx


let engMarks = +prompt("Exercise 6: \n Enter your English marks out of 100.");
let compMarks = +prompt("Exercise 6: \n Enter your Computer marks out of 100.");
let mathMarks = +prompt("Exercise 6: \n Enter your Maths marks out of 100.");
let totalMarks = engMarks+compMarks+mathMarks;



let percentage = totalMarks / 300 * 100;
let grade;
let remarks;
if (isNaN(engMarks) || isNaN(compMarks) || isNaN(mathMarks) ) {
    alert("Kindly enter your marks correctly.")
} else if (percentage>=80) {
    grade = "A1";
    remarks = "Excellent";
} else if (percentage>=70) {
    grade = "A";
    remarks = "Good";
} else if (percentage>=60) {
    grade = "B";
    remarks = "You need to improve";
} else if (percentage<60) {
    grade = "Fail";
    remarks = "Sorry";
} 

alert("Exercise 6: \n MARKS SHEET \n \n Total Marks: 300 \n Marks Obtained:"+ " " + totalMarks + "\n Percentage:" + " " + percentage + "%" + "\n Grade:" + " " + grade + "\n Remarks:" + " " + remarks);

// ex 7


let s_number = 5;
let userGuess = +prompt("Exercise 7: \n Guess the secret number (from 1 to 10).");

if (isNaN(userGuess) || userGuess>10 || userGuess<1 ) {
    console.log("Please enter a valid number from 1 to 10.");
    
} else if (userGuess===s_number) {
    console.log("Bingo! Correct answer.");
    
} else if (++s_number === userGuess) {
    console.log("Close enough to the correct answer.");
    
}

// ex 8

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

let num = +prompt("Exercise 8: \n Enter a number and check the console to know if it's divisibe by 3.");

if (isNaN(num)) {
    console.log("Please enter a valid number.");
    
} else if(num%3 === 0){
    console.log("Your number is divisible by 3.");
} else if (num%3 !== 0) {
    console.log("Your number is not divisible by 3.");
}

// ex 9

// Write a program that checks whether the given input is an
// even number or an odd number.

let num_1 = +prompt("Exercise 9: \n Enter a number and check the console to know if it's even or odd.");

if (isNaN(num_1)) {
    console.log("Please enter a valid number.");
    
} else if(num_1 % 2 === 0){
    console.log("Your number is even.");
} else if (num_1 % 2 !== 0) {
    console.log("Your number is odd.");
}

//ex 10

// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temp = +prompt("Exercise 10: \n Enter the temperature in your area.");

if (isNaN(temp)) {
    console.log("Please enter a valid number.");
} else if(temp>40){
    console.log("It's too hot outside.");
} else if (temp>30) {
    console.log("The Weather today is Normal.");
    
} else if (temp>20) {
    console.log("Today’s Weather is cool.");
    
} else if (temp>10) {
    console.log("OMG! Today’s weather is so Cool.");
    
}

// ex 11

let num1 = +prompt("Exercise 11: \n Enter the first number to be calculated");
let num2 = +prompt("Exercise 11: \n Enter the second number to be calculated");
let operator = prompt("Exercise 11: \n Enter the operator to be used (+, -, *, /) and view the answer in console");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input: Please enter valid numbers.");
} else if (operator === "+") {
    console.log("Result:", num1 + num2);
} else if (operator === "-") {
    console.log("Result:", num1 - num2);
} else if (operator === "*") {
    console.log("Result:", num1 * num2);
} else if (operator === "/") {
    if (num2 === 0) {
        console.log("Error: Cannot divide by zero.");
    } else {
        console.log("Result:", num1 / num2);
    }
} else {
    console.log("Invalid operator.");
}

