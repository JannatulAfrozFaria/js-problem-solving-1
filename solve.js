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
function countVowels(sentence) {
    let count = 0;
    //looping through the string to check if there is any vowel, so, converting it to an array is important
    const letters = Array.from(sentence);
    letters.forEach(function (value, index, array) {
        if (vowels.includes(value)) {
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
function checkName(nickName) {
    if (typeof nickName !== 'string') {
        console.log('input shpuld be a string')
        return 'invalid';

    }
    const goodEnding = ['a', 'e', 'i', 'o', 'u', 'w', 'y', 'A', 'E', 'I', 'O', 'U', 'W', 'Y']
    const nameEnding = nickName.charAt(nickName.length - 1).toLowerCase();
    console.log(nameEnding);
    if (goodEnding.includes(nameEnding)) {
        console.log('Good Name')
    }
    else {
        console.log('Bad name')
    }
}
// checkName(1)





// ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট    হিসেবে একটি Array নেবে । ফাংশন টি আরেকটি Array রিটার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল elements নাম্বার না , তাদের ডিলিট করে শুধুমাত্র নাম্বার গুল োকে Array আকারে রিটার্ন করতে হবে ।
// তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো তাহলে সে ত োমাকে রিটার্ন করবে [ 1 , 12 , 0 , -1 ]
//---------------------------------------------------------------------
function deleteInvalids(data) {
    if (typeof data !== Array) {
        console.log('You have to input an Array')
    }
    //using Array.isArray()
    // if(Array.isArray(data) === false){
    //     return "Invalid Array";
    //     }
    const numberDedicatedArray = data.filter(element => element && typeof element === 'number');
    console.log(numberDedicatedArray);
    return (numberDedicatedArray);
}
// deleteInvalids([7,8,NaN]);


// কলিমুদ্দিন সাহেব এমন একটি ফাংশন চান, যে খানে তার ইনফরমেশন এবং ওয়েবসাইট নেম দিলে সেটা কলি মুদ্দিন সাহেবকে একটি মনে রাখার মত ো পাসওয়ার্ড জেনারেট করে দি তে পারবে । তার জন্য password() নামে একটা ফাংশন লি খতে হবে ।
// Input : ফাংশন টি একটা object ইনপুট হিসেবে নিবে । যে খানে শুধু তিনটি প্র োপার্টি থাকবে ।
// { name: "kolimuddin" , birthYear: 1999 , siteName: "google" } <br>
// যদি ক োন একটা প্র োপার্টি মিসি ং থাকে অথবা যদি birthYear 4 ডি জি টে র না হয় ফাংশনটি রিটার্ন করবে একটি স্ট্রি ং যার ভ্যালুহবে invalid / any message 
//---------------------------------------------------------------------
function passwordGenerate(givenData) {
    if (typeof givenData !== 'object' || givenData === null || Array.isArray(givenData) === true) {
        console.log('input an object')
        return 'invalid';
    }
    if (!(givenData.name && givenData.siteName && givenData.birthYear) || typeof givenData.name !== 'string' || typeof givenData.siteName !== 'string' ||
        typeof givenData.birthYear !== 'number' || givenData.birthYear < 1000 || givenData.birthYear >= 10000) {
        console.log('Property Error in Object')
        return 'invalid';
    }
    else {
        const firstLetterOfSiteName = givenData.siteName.charAt(0).toUpperCase();
        const restOftheSiteName = givenData.siteName.slice(1);
        const pass = firstLetterOfSiteName + restOftheSiteName + '#' + givenData.name + '@' + givenData.birthYear
        console.log(pass);
    }
}
const objectInput = { name: "kolimuddin", birthYear: 1999, siteName: "google" }
const objectInput2 = { birthYear: 1999, siteName: "google" }
passwordGenerate(objectInput);


function password(givenData) {
    if (typeof givenData !== 'object' || givenData === null || Array.isArray(givenData) === true) {
        return 'invalid';
    }
    if (!('name' in givenData && 'birthYear' in givenData && 'siteName' in givenData) ||
        typeof givenData.name !== 'string' || typeof givenData.siteName !== 'string' ||
        typeof givenData.birthYear !== 'number' || givenData.birthYear < 1000 || givenData.birthYear >= 10000) {
        return "invalid";
    }
    const outputString = givenData.siteName.charAt(0).toUpperCase() + givenData.siteName.slice(1) + '#' + givenData.name + '@' + givenData.birthYear;
    return outputString;
}





// সেভি ংস এর হিসেব করার জন্যে monthlySavings() নামে একটি ফাংশন তৈরী করে দিতে যেটা ইনপুট হিসেবে নেবে একটি Array (প্রতি মাসে
// পাওয়া সকল পেমেন্ট ) এবং একটি Number ( শাহেদের লিভি ং কস্ট ) ।
// শাহেদের যে সকল পেমেন্ট 3000 টাকা বা তার বেশি সে সকল পেমেন্ট থেকে ব্যাংক Tax হিসেবে ২০% টাকা কেটে
// নেয় । এখন ম োট ইনকাম থেকে Tax গুল ো বাদ দিয়ে এবং Living cost বাদ দিয়ে বাকী যে টাকা থাকে সেটা ই
// হল ো শাহেদের সেভি ংস । অর্থাৎ ফাংশন টি শাহেদের সেভি ংসকে রিটার্ন করবে । যদি সেভি ংস করার মত ো টাকা না
// থাকে অর্থাৎ সেভি ংস এর ভ্যালুযদি ০ এর চেয়ে কম হয় তাহলে ফাংশনটি রিটার্ন করবে একটি স্ট্রি ং তাহল ো “earn
// more” ।

// Input :
// ফাংশন টি ইনপুট নেবে একটি Array (All payments) এবং একটি number (Living cost) ।
// Output :
// ফাংশন টি একটি number অথবা string রিটার্ন করবে ।
// ● যদি savings 0 বা তার থেকে বেশি হয় তাহলে রি টার্ন করবে একটা number ( Total Savings )
// ● যদি savings 0 থে কে ছ োট হয় তাহলে রিটার্ন করবে String যার ভ্যালুহবে earn more

function monthlySavings(payments, livingCost) {
    if (Array.isArray(payments) === false && typeof livingCost !== 'number') {
        console.log('Input An Array in 1st Parameter and a number in 2nd Parameter')
    }
    else {
        const totalPayment = payments.reduce((total, value, index, array)=> {
            if (value >= 3000) {
                value = value - ( value*0.2);
            }
            return total + value;
        },0); //initial value of total is 0
        const totalSaving = totalPayment - livingCost;
        if (totalSaving < 0) {
            console.log("Earn More")
        }
        else {
            console.log(totalPayment);
        }
    }
}
const earningArray = [5000,3000]
monthlySavings(earningArray, 4000)


// function monthlySavings2(paymentArray, livingCost) {
//     if (Array.isArray(paymentArray) === false || typeof livingCost !== 'number') {
//         return "invalid input"
//     }
//     let sumOfPaymentElement = 0;
//     for (let i = 0; i < paymentArray.length; i++) {
//         if (paymentArray[i] >= 3000) {
//             sumOfPaymentElement = sumOfPaymentElement + (paymentArray[i] - paymentArray[i] * 20 / 100);
//         }
//         else {
//             sumOfPaymentElement = sumOfPaymentElement + paymentArray[i];
//         }
//     }
//     const totalSaving = sumOfPaymentElement - livingCost;
//     if (totalSaving < 0) {
//         return "earn more"
//     }
//     else {
//         return totalSaving;
//     }
// }