//Rotate an Array
// Write a function that rotates an array to the right by a certain number of "steps".
function rotateArray(arr,steps){
    let n = arr.length;
    steps = steps%n;
    return arr.slice(n-steps).concat(arr.slice(0,n-steps));
}
console.log(rotateArray([1,2,3,4,5],2)); // [4,5,1,2,3]