//Print Randomly (1 to 6) for LUDU
function getRandBetweenMinAndMax(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(getRandBetweenMinAndMax(1,6))