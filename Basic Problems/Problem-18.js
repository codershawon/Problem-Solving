//Find the Intersection of Two Arrays
//Write a function that takes two arrays as arguments and returns the intersection of the two arrays. The intersection of two arrays is the array of common elements between the two arrays.

function intersectionOfArrays(arr1, arr2){
    return arr1.filter(num=>arr2.includes(num));
}
console.log(intersectionOfArrays([1,2,3,4,5], [3,4,5,6,7])); // [3,4,5]