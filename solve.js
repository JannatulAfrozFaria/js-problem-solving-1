//Print Randomly (1 to 6) for LUDU -------PROBLEM-------1
//---------------------------------------------------------------------
// function getRandBetweenMinAndMax(min,max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;

// }
// console.log(getRandBetweenMinAndMax(1,6))


//How to Arrange the Names of Students Alphabetically? -------PROBLEM-------2
//---------------------------------------------------------------------
// const students = ["Nafia","Naziha","Safia","Tasfia","Faria","Safwan","Alvee","Afroz","Amena"]
// console.log(students.sort())



//How to arrange the students' roll numbers in an ascending order?------PROBLEM---3
//---------------------------------------------------------------------
const roll_numbers = [4,6,1,7,13,11,18,26,56,34,31,45,47,87,86,84]
console.log(roll_numbers.sort(function(a,b){
    return a - b;
})); //sort changes the main array



//How to identify Leap Year?------PROBLEM---4
//---------------------------------------------------------------------
function isLeapYear(year){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100!== 0 )){
        console.log(`${year} is a leap year`)
    } else {
        console.log(`${year} is not a leap year`)
    }
}

isLeapYear(2026);


//How to check the total number of vowels in a sentence? ------------PROBLEM---5
//---------------------------------------------------------------------

//---------------------------------------------------------------------




//---------------------------------------------------------------------

//---------------------------------------------------------------------




//---------------------------------------------------------------------

//---------------------------------------------------------------------




//---------------------------------------------------------------------

//---------------------------------------------------------------------
