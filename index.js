let word;
function isPalindrome(word) {
    // Write your algorithm here
    let backWords = reverseWord(word)
    if (word == backWords)  {
      return true
      console.log ("input: " + word )
      console.log ("output: " + true)
    } else {
      return false
      console.log ("input: " + word)
      console.log ("output: " + false)
    }
    return word
  }
  // function to reverse string
  function reverseWord(str) {
    return str.split("").reverse().join("");
  }

/* 
  Add your pseudocode here
write function name isPalindrome
write a function to reverse word
if word arugment is a Palindrome
then let Palindrome equal true
else return false
*/

/*
  Add written explanation of your solution here

  Take the word arugment, then set a condition.
  If the word is equal to the word written backword
  Then return true
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
