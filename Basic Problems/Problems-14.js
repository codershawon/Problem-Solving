// Count the Occurrences of a Character in a String
// Write a function to count the number of occurrences of a given character in a given string.

function countCharOccurrence(str, char){
    let count = 0;
    for(let ch of str){
        if(ch === char){
            count++;
        }
    }
    return count;
}
console.log("Total l is here:",countCharOccurrence("hello", "l")); // 2