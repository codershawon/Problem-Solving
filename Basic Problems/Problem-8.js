// Factorial of a number
// Write a function that returns the factorial of a number.

function factorial(n){
    if(n===0) return 1;
    return n*factorial(n-1);
}