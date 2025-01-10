// Check if a number is Prime
// Write a function that checks if a number is prime or not.

function isPrime(num){
    if(num<=1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0) return false;
    }return true;
}
console.log(isPrime(5)); // true