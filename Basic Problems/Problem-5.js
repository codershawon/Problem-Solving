//Sum of Elements in an Array
//Write a function that takes an array as an argument and returns the sum of all the elements in the array.

function sumOfArray(arr){
    return arr.reduce((sum,num)=>sum+num,0);
}
console.log(sumOfArray([1,2,3,4,5])); // 15