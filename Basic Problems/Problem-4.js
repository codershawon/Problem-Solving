// Count Vowels in a String
// Write a function to count the number of vowels in a given string.

function countVowels(str){
    let count = 0;
    let vowels = "aeiou";
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello")); // 2