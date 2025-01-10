//Check if a string is an Anagram of another string
// Write a function to check if a given string is an anagram of another string.

function isAnagram(str1, str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(isAnagram("listen", "silent")); // true