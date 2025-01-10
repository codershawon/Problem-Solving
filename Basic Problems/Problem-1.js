// Problem-1=> Reverse a string
// Write a function that reverses a string.
function reverseString(str){
    return str.split("").reverse().join("");    
}
console.log(reverseString("Hello"));