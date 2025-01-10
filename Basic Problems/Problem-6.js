//Pallindrome Checker
// Write a function to check if a given string is a pallindrome or not.

function isPallindrome(str){
    return str === str.split("").reverse().join("");
}
console.log(isPallindrome("madam")); // true
console.log(isPallindrome("hello")); // false