//Sum of Digits in a Number
//Write a function that returns the sum of all the digits in a number.
function sumOfDigits(n){
    return n.toString().split("").reduce((sum,num)=>sum+parseInt(num),0);
}
console.log(sumOfDigits(1234)); // 10