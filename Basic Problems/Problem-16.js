//Find the First Non-Repeating Character in a String
//Write a function that returns the first non-repeating character in a string.

function firstNonRepeatingChar(str){
    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i];
        }
    }
    return null;
}
console.log(firstNonRepeatingChar("hello")); // h