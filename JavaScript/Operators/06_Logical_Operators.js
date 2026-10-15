//                                         **LOGICAL OPERATORS(&&,||,)**


// 1] AND(&&)

// Required 2 operands (Mostly Boolean)


// OP A                 OP B                 Result(A && B)
// False               False                    False
// False               True                     False
// True                False                    False
// True                True                     True



// Login Validation : A website allows login only when thr username is coorect and the password is correct,
// create two boolean variables use `&&` to check wether two conditions are true Display "Login Successful" or "Login Failed"

// let isUserNameCorrect = true;
// let isPasswordCorrect = false;
// let isLoggedIn = isUserNameCorrect && isPasswordCorrect;
// console.log(isLoggedIn)

// if (isLoggedIn == true){
//     console.log("Login Successful")
// }else{
//     console.log("Login Failed")
// }




// Discount Eligibility: An online store provides a discount only when the customer is
// logged in and the cart total is at least ₹2,000.
// Create suitable variables and use `&&` to check both conditions.
// Display `"Discount Applied"` or `"Discount Not Available"`.

// let isLoggedIn = true;
// let totalCartAmount = 2500;
// let discountValid = totalCartAmount >= 2000 && isLoggedIn;
// console.log(discountValid)

// if (discountValid){
//     console.log("Discount Applied")
// }else{
//     console.log("Discount Not Applicable")
// }



console.log(5 && 0) // true(1) && false(0) => false;
console.log(Boolean(5));         // true //
console.log(Boolean(0));         // false //
console.log(Boolean("Hello"));   // true //
console.log(Boolean(""));        // false //
console.log(Boolean(true));      // true //
console.log(Boolean(false));     // false //
console.log(Boolean(null));      // false //
console.log(Boolean(undefined)); // false //
console.log(Boolean(NaN));       // false //
console.log(Boolean([]));        // true //
console.log(Boolean({}))         // true //


// && => try to find the first falsy value, if didn't get the falsy value(all are truthy value), then it prints the final truthy value.

console.log("Kartik" && "Ritik")  // Ritil //
console.log([] && 1 && {} && true && "Ayush" && 0 && false) // 0 //





/// 2]  OR( || )

// OP A                 OP B                 Result(A || B)
// False               False                    False
// False               True                     True
// True                False                    True
// True                True                     True




// 3] LOGICAL NOT ( ! )

// QUES - Account Registration : A website should display a `Sign-Up` message only when the user is not already registered.
// Create a boolean variable `isRegistered` and use `!` to check it's opposite.
// DIsplay "Sign-UP" or "Already Registered"

let isRegistered = false;
let isAlreadyRegistered = ! isRegistered;
if (isAlreadyRegistered){
    console.log("Already Registered")
}else{
    console.log("Sign-UP")
}


let isNotificationEnabled = false;
let notificationEnabled = ! isNotificationEnabled;
if(notificationEnabled){
    console.log("Notifications Enabled 👍")
}else{
    console.log("Enable Notifications!!")
}

console.log(typeof({}))


// 7]        **Type Coercion**

// 7.1) Implicit Coercion (Automatic)

// String → Number with -, *, /

let a = "10";
let b = 5;

console.log(a - b);   // 5  ("10" → 10)
console.log(a * b);   // 50 ("10" → 10)
console.log(a / b);   // 2  ("10" → 10)

console.log("20" - 8);    // 12
console.log("3" * 4);     // 12
console.log("100" / 5);   // 20
console.log("50" - "20"); // 30

console.log(10 + "23") // number => string(ITC) 10 -23("23" => 23) => -13



// 7.2) Explicit Coercion (Manual)


// String → Number

let str = "25";
let num1 = Number(str);   // 25
let num2 = +str;          // 25 (shorthand)
console.log(num1 + 10);   // 35
console.log(num2 + 10);   // 35


// Number → String

let num = 123;
let str1 = String(num);   // "123"
let str2 = num + "";      // "123" (shorthand)
console.log(str1 + " rupees"); // "123 rupees"



// Any → Boolean

let value = 0;
let bool = Boolean(value); // false
console.log(Boolean(1));    // true
console.log(Boolean(""));   // false
console.log(Boolean("Hi")); // true



let amount = "200"
amount = parseInt(amount)
let walletBalance = 500;
walletBalance = walletBalance + amount;
console.log(walletBalance)