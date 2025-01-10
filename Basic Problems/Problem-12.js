//Find the Index of a Target Number in an array
//Write a function that takes an array and a target number as arguments and returns the index of the target number in the array. If the target number is not in the array, return -1.

function binarySearch(array, targetNumber){
    let left=0; right=array.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(array[mid]===targetNumber) return mid;
        else if(array[mid]<targetNumber) left=mid+1;
        else right=mid-1;
    }return -1;
}
console.log(binarySearch([2, 3, 4, 10, 40], 10)); // 3  