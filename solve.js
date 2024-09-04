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
// countVowels("I love my country")



//How to find out the numbers which are unique (don't have Duplicates) in an array?-----PROBLEM---7
//---------------------------------------------------------------------
// const numArray2 = [1,22,4,5,4,7,9,7,6,4,5,3,13,6,13,34,5,34,90,101,25]
// const uniques = numArray.filter(function(value,index,array){
//     return array.indexOf(value)!== index
// })
// console.log(duplicates);





//How to find out the numbers which have Duplicates in an array?-----------PROBLEM---6
//---------------------------------------------------------------------
// const numArray = [1,22,4,5,4,7,9,7,6,4,5,3,13,6,13,34,5,34,90,101,25]
// const duplicates = numArray.filter(function(value,index,array){
//     return array.indexOf(value) === index
// })
// console.log(duplicates);



//বাকেরকে অসংখ্য টিকেট বিক্রি করতে হয়। বাকেরকে calculateMoney( ) নামে একটি ফাংশন বানিয়ে দিতে হবে যাতে প্রতি দিন টিকেট সেল করার সংখ্যা ইনপুট দিলে সে সকল খরচ বাদ দিয়ে কত টাকা থাকে তা বলে দিতে পারে । 
// চিড়ি য়াখানায় প্রতি টিকেট বিক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতিদিন ১ জন দার োয়ান কে দিতে হয় ৫০০ টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।
//---------------------------------------------------------------------
// function calculateMoney(tickets){
//     if(tickets > 0){
//         const leftOverMoney = (tickets * 120) - (500 + (8*50))
//         console.log(leftOverMoney)
//         return leftOverMoney;
//     }
//     else{
//         console.log('Ticket Number Must be Positive')
//     }
// }
// calculateMoney(88)



// সালমান ভাই দেখতে পেলেন যে যাদের নামের শেষে a, y, i , e , o , u, w থাকে তাদেরকে আসলে ক্ষেপান ো যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনে র নাম গুল ো কে ব্যাংগ করে উচ্চারন করা যায় না । 
// সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লি খে দি তে হবে । যেটা একটা স্ট্রি ং
// ইনপুট নে বে । এবং ফাংশনটি চেক করে দেখবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রিটার্ন করবে Good Name আর না টি খারাপ হলে রিটার্ন করবে Bad Name
// ইনপুট হি সে বে স্ট্রি ং টাইপে র বাইরে অন্য যে ক োন কি ছুদি লে এটা শুধুমাত্র “invalid” রি টার্ন
// করবে ।
//---------------------------------------------------------------------
function checkName(nickName){
    if(typeof nickName !== 'string'){
        console.log('input shpuld be a string')
        return 'invalid';
        
        }
    const goodEnding = ['a' , 'e', 'i', 'o','u','w','y', 'A', 'E', 'I', 'O', 'U', 'W', 'Y']
    const nameEnding = nickName.charAt(nickName.length-1).toLowerCase();
    console.log(nameEnding);
    if(goodEnding.includes(nameEnding)){
        console.log('Good Name')
    }
    else{
        console.log('Bad name')
    }
}
// checkName(1)





// ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট    হিসেবে একটি Array নেবে । ফাংশন টি আরেকটি Array রিটার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল elements নাম্বার না , তাদের ডিলিট করে শুধুমাত্র নাম্বার গুল োকে Array আকারে রিটার্ন করতে হবে ।
// তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো তাহলে সে ত োমাকে রিটার্ন করবে [ 1 , 12 , 0 , -1 ]
//---------------------------------------------------------------------
function deleteInvalids(data){
if(typeof data !== Array){
    console.log('You have to input an Array')
}
//using Array.isArray()
// if(Array.isArray(data) === false){
//     return "Invalid Array";
//     }
const numberDedicatedArray = data.filter(element => element && typeof element === 'number');
console.log(numberDedicatedArray);
return(numberDedicatedArray);
}
// deleteInvalids([7,8,NaN]);


function password(givenData){
if(typeof givenData !== 'object' || givenData === null || Array.isArray(givenData) === true){
return 'invalid';
}
else{
    const pass = `${givenData.siteName} + '#' + ${givenData.name}`
    console.log(givenData)
}
}