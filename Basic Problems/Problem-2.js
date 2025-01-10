// Problem-2=> Find the maximum number in an array
// Write a function that returns the maximum number in an array.
function maxNumber(arr){
    return Math.max(...arr);
}
console.log(maxNumber([1,2,3,4,5])); // 5