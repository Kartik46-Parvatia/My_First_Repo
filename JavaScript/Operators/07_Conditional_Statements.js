// 1] If Statement =>

// Syntax =>

// if (condition){

// }

// check if the student has passed? if (marks >= 35)

// marks = 45;
// if (marks >= 35){
//     console.log("Student is Passed")
// }else{
//     console.log("Studen is Failed")
// }



// Check wether a number is positive or negative.

// let num = -1;
// if (num > 0){
//     console.log("The number" + num +"is Positive")
// }else{
//     console.log("The Number " + num +"is Negative")
// }


// let num = 99;
// if(num % 2 == 1){
//     console.log("The number", num,"is Odd")
// }
// else{
//     console.log("The number", num,"is Even")
// }








// QUES - Check if the temprature is greater than 30 and print "It's hot"

// let temp = 30;
// if (temp > 30){
//     console.log("It's Hot")
// }else{
//     console.log("It's Cold")
// }


// QUES - Check if student is passed or failed.

// let marks = 33;
// if(marks >= 35){
//     console.log("Passed")
// }else{
//     console.log("Failed")
// }


// QUES - Check if character is a vowel or consonant (for a single lowercase letter)
let char = "V"
if(char == "A"|| char == "E"|| char == "I"|| char == "O"|| char == "U"){
    console.log("Char is a Vowel!")
}else{
    console.log("Char is a Consonant!")
}


// QUES - Check if the given year is a leap year or not(basic check: divisible by 4)

let year = 2026;
if(year % 4 == 0){
    console.log(year,"is a Leap Year")
}else{
    console.log(year,"is not a Leap Year")
}




// if else --- if else


// QUES - Assign Grade Based On Marks
let marks = 74

if(marks >= 90){
    console.log("A Grade")
}else if(marks >= 75){
    console.log("B Grade")
}else if(marks >= 50){
    console.log("C Grade")
}else{
    console.log("Fail")
}


let num = 42;
if (num > 0){
    if (num % 2 == 0){
        console.log(`The number ${num} is positive and even`)
    }
}


let num_1 = 45;
if(num_1 > 0){
    if (num_1 % 5 == 0){
        console.log(`The number ${num_1} is positivr and divisible by 5`)
    }
}


let isLoggedIn = true;
let isAdmin = true;
if(isLoggedIn == true){
    if(isAdmin == true){
        console.log("Admin Panel")
    }
}



let markss = 87;
if(markss >= 35){
    console.log("Passed");
    if(marks >= 90){
        console.log("Excellent")
    }
}