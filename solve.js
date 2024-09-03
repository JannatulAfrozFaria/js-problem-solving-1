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
// const roll_numbers = [4,6,1,7,13,11,18,26,56,34,31,45,47,87,86,84]
// console.log(roll_numbers.sort(function(a,b){
//     return a - b;
// })); 
//sort changes the main array



//How to identify Leap Year?------PROBLEM---4
//---------------------------------------------------------------------
// function isLeapYear(year){
//     if(year % 400 === 0 || (year % 4 === 0 && year % 100!== 0 )){
//         console.log(`${year} is a leap year`)
//     } else {
//         console.log(`${year} is not a leap year`)
//     }
// }
// isLeapYear(2026);


//How to check the total number of vowels in a sentence? ------------PROBLEM---5
//---------------------------------------------------------------------
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
function countVowels(sentence){
    let count = 0;
    //looping through the string to check if there is any vowel, so, converting it to an array is important
    const letters = Array.from(sentence);
    letters.forEach(function(value,index,array){
        if(vowels.includes(value)){
            count++;
        }
    })
    console.log(`There are ${count} vowels in this sentence`)
    return count;
}
countVowels("I love my country")



//How to find out the numbers which are unique (don't have Duplicates) in an array?-----PROBLEM---7
//---------------------------------------------------------------------
// const numArray2 = [1,22,4,5,4,7,9,7,6,4,5,3,13,6,13,34,5,34,90,101,25]
// const uniques = numArray.filter(function(value,index,array){
//     return array.indexOf(value)!== index
// })
// console.log(duplicates);





//How to find out the numbers which have Duplicates in an array?-----------PROBLEM---6
//---------------------------------------------------------------------
const numArray = [1,22,4,5,4,7,9,7,6,4,5,3,13,6,13,34,5,34,90,101,25]
const duplicates = numArray.filter(function(value,index,array){
    return array.indexOf(value) === index
})
console.log(duplicates);
//---------------------------------------------------------------------




//---------------------------------------------------------------------

//---------------------------------------------------------------------




//---------------------------------------------------------------------

//---------------------------------------------------------------------
