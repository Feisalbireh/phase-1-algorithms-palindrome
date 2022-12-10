function isPalindrome(word) {
  // Write your algorithm here

  const palindromeWord = palindrome(word);
  if (word === palindromeWord) {
    return true;
  } else {
    return false;
  }
}

function palindrome(word) {
  return word.split("").reverse().join("");
}
/* 
  Add your pseudocode here
//  if palindromeWord function returns same as input 
//     return true
//     if not 
//     return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
