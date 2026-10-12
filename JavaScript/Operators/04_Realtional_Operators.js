//                        **RELATIONAL OPERATORS**                         //

// 1) Greater Than (>)

console.log(7>6); // true //
console.log(7>7); // false //
console.log(7>8); // false //


// True => When OP1  is strictly greater than OP2;
// False => When the OP1 is equeal to or less than OP2;


let salary = 30000;
let threshHold = 50000;
let isHighEarner = salary > threshHold;
console.log("Is the person hogh earner?", isHighEarner)


console.log("10" > 5) // NaN > 5 => false;
console.log("Hi" > 5) // 49 > 50 => false;
console.log("10" > "2") // 49 > 50 => false
console.log("apple" > "banana") // 97 > 98 => false
console.log("apple" > "Apple") // 97 > 65 => true


console.log(false > 1) // 0 > 1 => false
console.log(0 > true) // 0 > 1 => false


console.log(1 > null) // 1 > 0 => null
console.log(0 < undefined) // 0 < NaN => false
console.log(Number(undefined))




// 2) Less Than (<)

console.log(7 < 6) // false //
console.log(7 < 7) // false //
console.log(7 < 8) // true //

// True => When OP1 is strictly less than OP2;
// False => When OP1 is equal to or greater than OP2;

// let marks = 33;
// let passingMarks = 35;
// let isFailed = marks < passingMarks;
// console.log("Is the student failed? =>", isFailed)

console.log("33" < 35) // 33 < 35 => true //
console.log("33" < "35") // 33 < 35 // true //
console.log("10" < "2") // 1 < 2 => true //
console.log("10" < "11") // 0 < 1 => true //
console.log("abhijeet" < "aniket") // 98 < 110 //




// 3) Greater than or Equal to (>=).

console.log(7 >= 6) // true //
console.log(7 >= 7) // true //
console.log(7 >= 8) // false //

// True => OP1 is equal or grester than OP2.
// False => OP2 is greater than OP1.




// 4) Less than or Equal to (<=)

console.log(7 <= 6) // false //
console.log(7 <= 7) // true //
console.log(7 <= 8) // true //

// True => If OP1 is less than or equal to OP2
// False => OP1 is strictly greater than OP2


// #               QUESTION PRACTICE 

// 1) Greater than and Less than //

console.log(63 > 67) // false //
console.log("74" > 72) // true //
console.log("72" > "76") // true //
console.log("72" < "74") // true //
console.log("72" < "7") // false //
console.log("27" > "7") // false //
console.log(null > -1) // true //
console.log(undefined > -1) // NaN // false //
console.log({} > -1) // false //
console.log([] > 1) // false //
console.log(Number({})) // NaN //


// 2) Greater than or equal to //
console.log(7 >= 6) // true //
console.log(7 >= 7) // true //
console.log(7 >= 8) // false //

// True => When OP1 is greater than or equal to OP2.
// False => When OP1 is strictly less than OP2.

// Ques - Check the student is passed or not,
// If he gets a marks of 35

let marks = 35;
let passingMarks = 35;
let isPass = passingMarks >= marks
console.log(isPass)


// Ques - A student must have 75% attendance to sit for an examination.
// Use '>=' to check the eligibility to sit for an exam.

let minimumAttendance = 75;
let studentAttendance = 75;
let isEligible = minimumAttendance >= studentAttendance;
console.log("Is the student eligible for exam: ", isEligible)


console.log(99 >= "99") // true //
console.log("99" >= "98") // true //
console.log("98" >= "99") // false //
console.log("aniket" >= "aniruddh") // 107 >= 114 // false //



// 3) Less than Equal to ( <= )

console.log(7 <= 6) // false //
console.log(7 <= 7) // true //
console.log(7 <= 8) // true  //

// True => When OP1 is less than or equal to OP2
// False => When OP1 is strictly greater than OP2

let battery = 19;
let batteryThreshHold = 20;
let canGiveAlert = batteryThreshHold <= battery;
console.log(canGiveAlert)


// Ques - A website allows file uploads of up to `5MB`
// use `<=` to check wether the selected file size is within the limit;

let sizeOfFile = 10;
let allowedFileSize = 5;
let canUpload  = allowedFileSize <= sizeOfFile;
console.log(canUpload)


console.log(Infinity <= 1) // false //
console.log("99" <= 99) // true //
console.log("99" <= "98") // false //
console.log("99" <= "999") // true //
console.log(null <= 0) // true //