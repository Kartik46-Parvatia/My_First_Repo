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
console.log(Numberz(undefined))




// 2) Less Than (<)

console.log(7 < 6) // false //
console.log(7 < 7) // false //
console.log(7 < 8) // true //

// True => When OP1 is strictly less than OP2;
// False => When OP1 is equal to or greater than OP2;

let marks = 33;
let passingMarks = 35;
let isFailed = marka < passingMarks;
console.log("Is the student failed? =>", isFailed)

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