// Find the Missing Number in an Array
// Write a function that takes an array of integers as an argument and returns the missing number in the array. The array will have a sequence of numbers from 1 to n. There will be one number missing in the sequence.

function missingNumber(arr){
    let n= arr.length + 1;
    let sum= n*(n+1)/2;
    let totalSum= arr.reduce((sum,num)=>sum+num,0);
    return sum-totalSum;
}
console.log(missingNumber([1,2,3,4,6,7,8])); // 5