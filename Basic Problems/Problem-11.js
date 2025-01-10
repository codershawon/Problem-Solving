//Find Second Larges Number in an Array
//Write a function that returns the second largest number in an array.

function secondLargest(arr){
    let uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a,b)=>b-a);
    return uniqueArr[1];
}
console.log(secondLargest([1,2,3,4,5])); // 4   